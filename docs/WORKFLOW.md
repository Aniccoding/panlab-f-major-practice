# MuseScore、匯出與交付工作流程

這是本次工作中已遇到並驗證的操作經驗，整理於 **2026-10-31**。跨主機或工具更新後，先檢查實際版本及能力；不把舊限制當成永久產品行為。

## 1. 開始與編寫

1. 確認目前任務真的要求編寫／修改。最新一輪只是保存記憶，沒有進行改編。
2. 使用者明確要求使用 **MuseScore MCP**。先 `get_capabilities`、讀取 live score，辨認目標作品、七個 part 及當前音庫。
3. 寫入前備份／另存可回復版本，保護使用者既有修改及私人雲端原譜。
4. 按精確可用 MIDI 音庫驗證計劃，並逐小節核對拍數。F major 本作品音階為 F、G、A、B♭、C、D、E。
5. 優先使用可檢查 handpan 音庫的 `write_handpan_notes`；完成後 `read_passage`／`get_score` 讀回實際音高、時值、休止與聲部，並做整體七人檢查。
6. 若寫入回覆為 outcome uncertain，先讀回；不要盲目重播同一個修改。
7. 按兩個 Soprano 的實際時值重疊檢查碰撞，並以聆聽確認旋律及伴奏；程式檢查不能代替音樂判斷。

本次工具的座標差異：

| 工具／資料 | staff 計法 |
| --- | --- |
| `write_handpan_notes.position.staff` | **part 內** 1-based，不是全譜 staff |
| `get_score` 回傳 events | 全譜 1-based |
| compatibility `read_passage.staff` | 全譜 **0-based** |
| compatibility `add_live_dynamic.staff` | 全譜 **0-based** |

新工具的 measure／voice 一般 1-based；offset 與 duration 使用全音符分數，例如四分音符 `1/4`。每次仍以當前工具 schema 為準。

## 2. 調號與譜面文字

- 本作品每個譜表為 F major，一個 B♭ 調號。不能用每音臨時記號代替正確調號。
- 本次插件 0.1.0 操作中，live key-signature setter 曾讀回錯誤的 `-8` 並影響異名拼寫；後來以 MuseScore 原生介面修正並核對 `-1`。後續先核對工具版本及讀回結果；不要在已正確的 F major 上重複套用未驗證的 setter。
- `set_title` 當時只改 `workTitle` metadata，**不會改可見 VBox title**。兩者必須分別核對。
- MuseScore 可見文字可含 rich-text 子節點，例如 `<font/>` 及 child tail。直接設定 XML `.text` 會留下舊 tail，曾造成標題重複、超出頁邊。替換整段標題／署名時清除舊子節點及 tail，再設定完整文字。
- 每個 PDF 第一頁核對一次標題與作者；每一頁（含總譜第二頁及第一頁）都核對一行 copyright。
- 分譜移除不必要的強制 page break 可避免多出近乎空白第二頁；保留合適的總譜分頁，實際重新渲染確認。

## 3. 原生 Harp 與額外鋼琴和弦

使用者曾聽到每個和弦開始時出現譜上沒有的鋼琴和弦。本次是**和弦符號的自動發聲**；使用者不要這種額外伴奏。

本作品所有聲部及 demo 的目標：

- MuseScore 原生 `harp`／`pluck.harp`。
- `MuseScore Basic` sound profile；不是 Muse Sounds 或另外的 piano 音色。
- GM MIDI program **46（zero-based；one-based 為 47）**。
- 可見和弦符號保留作讀譜提示，但自動發聲關閉；native Harmony 使用 `<play>0</play>`。

本次 MusicXML round-trip 會遺失 Harmony 的停用設定；總譜及分譜 native 匯出後要再核對。Demo 可用**一次性音訊副本**移除 Harmony，再渲染；不要因此刪除正式列印譜上的和弦標記。

若重設 instrument，保留 part 名稱、譜表數與譜號。模板可能預設 Harp 大譜表，但本作品 Bass 2 仍只需單行低音譜表。

## 4. 原生檔與渲染驗證

- 原生 `.mscz` 是包含 score XML 等內容的有效壓縮封裝，不是把 MusicXML 改副檔名。
- 存檔後檢查 ZIP 完整性、譜表／小節／音符，再以 MuseScore 真正重新開啟並顯示。
- 本次從 Recent／Open 載入檔案後，MuseScore 有時仍停在 Home；按上方 **Score** 才顯示樂譜。這可造成「打開沒有反應」的觀感，但不能只憑這一點判斷檔案損壞。
- 原生 Save As 的檔名欄只填檔名；目錄另選。把完整 Unix 路徑放進檔名欄，曾把斜線變成冒號。
- 需要修改原生 ZIP 的 metadata、style 或 playback 設定時，先儲存並關閉該本機副本，使用原子替換、保留其餘 ZIP entries，並確認 Chord／Rest／音高／時值沒有被改動，再重新開啟。不能在未儲存的 live score 背後覆寫同一檔案。
- 本次 MuseScore CLI 部分早期渲染曾在輸出有效 PDF／MIDI 後，以 `-6` mutex／Rosetta 相關錯誤結束。不能只看 exit code 或檔頭；應獨立解析、逐頁渲染及核對音樂內容。最終交付那一輪八個 PDF 渲染均 exit 0，亦經逐頁檢視。

## 5. 每次完整交付的內容

使用者本次要求「總譜、每個聲部一份譜、demo、click 版本，打包到 Downloads」：

| 類別 | 數量 |
| --- | ---: |
| 總譜＋七份分譜 PDF | 8 |
| 對應可編輯原生 MSCZ | 8 |
| 總譜＋七個聲部純 Harp MP3 | 8 |
| 相同八份 Harp＋Click MP3 | 8 |
| 使用說明 | 1 |
| 包含上述 33 檔的 ZIP | 1 |

保留一位學生一個 part；不能只交總譜音訊而省略七個分譜 demo。核對樂譜音符與實際 MIDI note-on 數量、所有音色 program、音訊非靜音、無 clipping、播放長度及 click 對拍。

本版設定：96 BPM、4/4、68 個 click、沒有預備小節、完整 17 小節休止時間、約 45.5 秒含尾韻。這些是本版設定，後續作品依新要求決定。

當時 MCP 的 ensemble audio exporter 只涵蓋總譜及若干不同速度 click，未直接提供所需的八組 clean／click。本次先匯出樂譜，再逐份用已安裝 MuseScore 原生 Harp 渲染，製作並驗證十六個 MP3。這個 repository 保存輸出、manifest 與操作知識，不假設另一部主機已有當時額外使用的本機 helper。

## 6. 手機下載與 GitHub Pages

**Mac 絕對檔案路徑不是電話可下載的 chat 附件。** 本次 iPhone Codex 曾顯示「無法在『檔案』中開啟此連結」。不能把本機路徑或自行拼出的 `sandbox:` URI 當成已上傳附件。

本次曾用私人 Google Drive 作中間交付：Connector 可讀，但 create／upload 回傳 403 insufficient authentication scopes；最後用已登入的 Google Drive 網頁及 macOS 原生檔案選擇器上載，核對 34 檔名稱、大小及私人權限。Connector 未提供遠端 MD5，沒有宣稱完成 Drive checksum 核對。

Chrome extension 的 `fileChooser.setFiles` 當時因未開啟 `Allow access to file URLs` 失敗；改用正常網頁上載按鈕及原生多選檔案視窗即可完成，沒有修改安全權限。不要因為自動選檔失敗，就要求不在電腦前的使用者一定要回電腦操作。

使用者其後要求獨立 GitHub repository 及手機下載頁，已建立：

- Repo：<https://github.com/Aniccoding/panlab-f-major-practice>
- 公開網站：<https://aniccoding.github.io/panlab-f-major-practice/>
- GitHub Pages：`main` 根目錄、`.nojekyll`、HTTPS。
- 手機版八個聲部快速跳轉；每份 PDF／MSCZ 及 clean／click MP3 有下載連結；原生音訊 controls、`preload="none"`，播放另一軌會暫停上一軌。
- 檔案連結使用同源相對路徑及 `download`；瀏覽器若直接預覽 PDF／MP3，使用其分享／下載功能儲存。

網站更新後核對實際 Pages build／公開 HTTPS 回應，再測試代表性下載及音訊。檔案有改動時更新 `download-manifest.json`，只包含公開的相對路徑、大小及 SHA-256。勿將私人 Drive 連結、雲端譜存取碼或本機個人路徑寫進公開來源。

目前這一輪只更新知識文件；網站及交付檔案內容不變。
