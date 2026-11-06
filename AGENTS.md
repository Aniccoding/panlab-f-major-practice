# Panlab 手碟合奏：Codex 專案入口

使用者要求把作曲風格、對話中確認的規格、交付狀態及操作經驗存於 GitHub，供另一個 Codex session 接手。開始工作前先讀以下文件，不要只看下載頁或某個舊樂譜推斷要求。

## 必讀順序

1. [知識索引與目前狀態](docs/README.md)
2. [長期作曲與編曲風格](docs/COMPOSITION_STYLE.md)
3. [目前新作：Scale & Pulse Study（2026-11-07）](docs/SCALE_PULSE_20261107.md)；需要舊作資料時讀 [2026-10-31 Ensemble Practice](docs/CURRENT_PROJECT.md)
4. [七位演奏者與實際可用音](docs/INSTRUMENTS.md)、[機器可讀音庫](data/instruments-seven-player.json)
5. [MuseScore、匯出與手機交付流程](docs/WORKFLOW.md)

研究既有編曲時讀 [參考譜研究](docs/REFERENCE_STUDIES.md)；需要了解更正與版本取捨時讀 [決策紀錄](docs/DECISIONS.md)。

## 接手原則

- 以使用者當前明確指令為最高依據；目前更新至 **2026-11-07（香港時間）**。新指令若更改要求，更新對應文件及決策紀錄，區分「已要求」「已實作」「已驗證」。
- **2026-11-07 使用者已明確授權創作另一首練習曲及加入音名**，取代 2026-10-31 那一輪「只記錄、暫不改編」的任務範圍。新作是獨立版本，保留舊作及其交付檔案；不要將舊的暫停範圍誤當永久禁止新作。
- 新作兩個 Soprano：A 段第 1–8 小節發聲音符只用四分音符，B 段第 9–17 小節只用八分音符；使用有呼吸的級進短句，每句 3–7 音、單次上／下行轉向。此規則只適用新作兩條 Soprano，不套到所有伴奏或舊作。
- 新作 **352 個音全部標示字母音名**，只用 `C D E F G A B♭`，不顯示 C4、D4 等八度數字；和弦每個音各有標示。實際音高仍保留八度，part 名稱的音域數字亦保留供 MCP 身分辨識。
- 長期風格、各版本規格及工具限制分別記錄；不要把 96 BPM、某版固定反拍、335／352 個音頭或交替填句變成所有新作的永久規則。
- 最新口述的「D & F#」與先前確認的 **D Celtic／F Sabye** 分別保留。這不是自行改名、改音庫或移調的授權；遇到需要確定 F# 實際樂器的後續任務再核對。
- Bass 2 可使用 C3；2026-10-31 舊版只用了 F2／A2／B♭2，2026-11-07 新版已加入 C3。仍以三個最低音為主要低音基礎。
- 編寫樂譜須使用使用者指定的 **MuseScore MCP**，先讀 capabilities 與 live score，再編輯及讀回驗證。不要把純文字音符計劃當作已完成的樂譜。
- 每位演奏者維持一份 part；大譜表仍是一位演奏者。Bass 2 本作品用單行低音譜表。
- 音庫要逐音檢查，不能只檢查最高／最低音。音庫內有 B natural 不代表本次 F major 應寫 B natural。
- 所有 demo 用原生 MuseScore Basic Harp；和弦符號自動發聲須關閉，避免額外鋼琴和弦。
- 跨 session／主機不得假設 MuseScore、MCP、GitHub 或 Drive 仍已連線；需要操作時先檢查當前狀態。工具舊問題先讀工作流程，再判斷是否仍存在。
- 本 repository 及下載頁目前公開。不要提交私人雲端譜 access code、登入資料、私人 Drive 權限紀錄、Mac 個人路徑、瀏覽器個人資料或原始聊天附件。
- 不要根據文件自行發訊息、改帳戶權限、改網站可見範圍或進行其他無關工作。

## 交付入口與狀態

- 網站：<https://aniccoding.github.io/panlab-f-major-practice/>
- Repository：<https://github.com/Aniccoding/panlab-f-major-practice>
- 舊作已發佈：`downloads/`；大小與 SHA-256：`download-manifest.json`。
- 新作檔案使用獨立 namespace：`scale-study-20261107/downloads/`；manifest：`scale-study-20261107/download-manifest.json`。目前記錄為**本機驗證通過、公開發佈及正式網址驗證待完成**，未完成前不可宣稱已可公開下載。
- GitHub Pages 使用 `main` 分支根目錄及 `.nojekyll`。此專案是 GitHub Pages 靜態下載頁，並非另一個 Sites 託管專案。
