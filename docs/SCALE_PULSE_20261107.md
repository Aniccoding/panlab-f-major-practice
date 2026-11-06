# 新作：F Major — Scale & Pulse Study（2026-11-07）

狀態更新：**2026-11-07（香港時間）**。**創作、匯出、公開發佈及正式下載驗證完成。**

這是使用者明確授權的另一首練習曲，取代 2026-10-31 那一輪「只記錄、暫不改編」的任務範圍。舊作 [F Major — Ensemble Practice](CURRENT_PROJECT.md) 的 335 音版本、下載檔案及 manifest 保留，新作另存及交付。

## 已確認的新作要求

- 七位演奏者仍為 Soprano 1、Soprano 2、D Celtic、F Sabye、Alto、Bass 1、Bass 2。每位一個 part；D Celtic、F Sabye、Alto 保留大譜表，Bass 2 單行低音譜表。
- **F major，一個 B♭ 調號，4/4**。本次使用 F 大調音階音，不使用 B natural；速度沿用上次的四分音符 = 96 BPM，屬本版實作設定。
- 共 **17 小節**：F、C、Dm、Am、B♭、F/A、B♭、C，每小節一個和弦，重複兩次；第 17 小節 F 收結。
- 兩條 Soprano 使用級進的上山／落山短音階句，長短有變化並留呼吸。本版實作為每句 **3–7 音**、一次上／下行轉向；這個音數不是使用者另定的固定限制。句內不改成跳進分解和弦；不同短句之間可以另選起音。
- **A 段第 1–8 小節**：兩條 Soprano 的發聲音符只用四分音符。
- **B 段第 9–17 小節**：兩條 Soprano 的發聲音符只用八分音符，第 17 小節也遵守。休止按呼吸長度安排；這個分段規則不要求所有伴奏同步改成同一時值。
- Bass 2 本版使用 **F2、A2、B♭2、C3**，保留 C 和弦可用 C3 的分工；不能把舊作三音選擇套回本版。
- 全部音符加音名。使用者後來更正為**只寫字母** `C D E F G A B♭`，不寫 C4、D4 等八度數字。這一更正取代最初帶八度的顯示版本。

長期聲部分工仍參考 [COMPOSITION_STYLE.md](COMPOSITION_STYLE.md)。正式樂器名稱及音庫沒有因歷史口述「D & F#」而自行改名或移調。

## 音名與原生音高

原生樂譜共 **352 個 Note、352 個 Lyrics 音名**，每個實際發聲音均有標示。和弦同時有兩個音時，兩個字母依高至低分行顯示；單音只顯示一個字母。

只移除顯示音名的八度數字，**不改實際 `Note.pitch` 八度**。instrument／part 名稱內的音域（例如 B3–A5）另有用途，保留供 MCP exporter 辨識，不屬逐音音名。

| 聲部 | Note／字母音名數量 |
| --- | ---: |
| Soprano 1 | 81 |
| Soprano 2 | 81 |
| D Celtic | 31 |
| F Sabye | 29 |
| Alto | 76 |
| Bass 1 | 33 |
| Bass 2 | 21 |
| 合計 | 352 |

數量用於辨識及驗證本版，不是未來作品的固定要求。

## 精確署名、音色與版面

可見作者文字：

> Composed by Hailey.S and Ting Ho Fung @Panlab Limited

Composer metadata 為 `Hailey.S and Ting Ho Fung @Panlab Limited`，arranger 留空。每頁包括第一頁均顯示一行：

> © 2026 Panlab Limited. All Rights Reserved.

所有 demo 用原生 **MuseScore Basic Harp**，GM program **46（zero-based）**。正式譜可見和弦符號保留，但 Harmony 自動發聲關閉，避免額外鋼琴和弦。

- 總譜：A4 橫向、9 pt 音名，共三頁，分別為第 **1–8／9–12／13–17** 小節。
- 七份分譜：A4 直向、10 pt 音名，各一頁。兩份 Soprano 各五行：**1–4／5–8／9–11／12–14／15–17**，B♭／C 音名有清楚間距。
- 總譜及 Soprano 1 的 rehearsal mark 為 A、B；音名不與符桿、其他音名或下一譜表重疊。

## 交付檔案與公開位置

[手機下載頁](https://aniccoding.github.io/panlab-f-major-practice/scale-study-20261107/) 已公開，可分別下載樂譜及 MP3，或下載完整 ZIP。頁面相對路徑為 `scale-study-20261107/`。

| Repository 位置 | 內容 |
| --- | --- |
| `scale-study-20261107/downloads/Scores/PDF/` | 總譜三頁＋七份單頁分譜，8 個 PDF、共 10 頁 |
| `scale-study-20261107/downloads/Scores/MuseScore/` | 對應 8 個可編輯原生 MSCZ |
| `scale-study-20261107/downloads/Audio/Harp/` | 總譜＋七個聲部，8 個純 Harp MP3 |
| `scale-study-20261107/downloads/Audio/Harp-with-Click/` | 對應 8 個 Harp＋Click MP3 |
| `scale-study-20261107/downloads/README.txt` | 使用說明 |
| `scale-study-20261107/downloads/F-Major-Scale-Pulse-Study-Note-Names-Panlab-2026-11-07.zip` | 上述 33 個檔案的完整壓縮包 |
| `scale-study-20261107/download-manifest.json` | 34 個下載檔案（含 ZIP）的大小及 SHA-256 |

完整下載目錄共 **34 個檔案，22,421,359 bytes**。ZIP 為 **11,086,644 bytes**，33 entries；SHA-256：

```text
518a41daa364ab254604a3c218e9d1e3dcdb61135d97b628a6625badb8f466d6
```

16 個 MP3 均約 **45.5 秒**，包括 42.5 秒的 17 小節及結尾餘韻。Click 版本有 **68 個四分拍**，每小節第一拍加重，由第 1 小節第一拍開始，沒有預備小節；分譜保留全曲時間及休止。

## 2026-11-07 驗證證據

已完成的本機驗證：

- 透過 MuseScore MCP 編寫及讀回新作；最終重新開啟的交付總譜讀回為 17 小節、7 個 part、10 個譜表、key −1、4/4、全聲部 Harp。`check_live_handpan_ensemble` 回報 valid、352 個音高、0 個違規；Soprano 分段時值核對通過。
- 逐音核對 352 個字母音名與實際音高的 pitch class；沒有逐音八度數字，Alto 雙音標示依高至低排列。
- 8 個 MSCZ 原生封裝可解析；總譜在 MuseScore 原生介面實際開啟，字母音名以畫面截圖確認。
- 8 個 PDF 全部獨立解析及渲染，10 頁逐頁檢視通過。最後總譜與兩份 Soprano 的排版修正再次匯出均 exit 0，無最後一小節獨佔一頁或音名碰撞。
- 16 個 MP3 的長度、Harp program 46、和弦額外發聲停用及 68 拍 click 核對通過。
- ZIP 的 33 個 entries、完整性、大小及雜湊已核對。
- 本機下載頁在實際 390×844 手機版面檢查通過，無橫向溢出；8 個聲部卡、16 個音訊播放器、34 個下載連結完整。新作 manifest 全部檔案雜湊通過；舊作 34 個下載檔案保持原樣。

公開驗證於 2026-11-07 01:30（香港時間）完成：

- 發佈 commit：`5aed6f6e68ee9708b22dc7c45d81f57ae826501b`；GitHub Pages run `42261414583` 成功，Pages build 狀態 `built`。
- 新頁、共用 CSS／JS、manifest 及 34 個下載檔案，共 **38 次未登入 HTTPS GET 全部 200**；頁面、manifest 及所有檔案大小／SHA-256 與本機一致。
- 公開 ZIP 的 33 個 entries 通過 CRC 及逐檔內容雜湊；瀏覽器實際下載的 ZIP 亦與上述 SHA-256 完全一致。
- 正式網址的總譜 Harp 及 Harp＋Click 均實際解碼播放，45.5 秒，沒有 media error；播放另一軌會自動暫停上一軌。
- 簡明機器可讀證據見 [verification.json](../scale-study-20261107/verification.json)。本輪要求的交付項目已完成。

操作注意事項（包括 `add_lyrics` 附加文字與 rich-text 標記）見 [WORKFLOW.md](WORKFLOW.md)。
