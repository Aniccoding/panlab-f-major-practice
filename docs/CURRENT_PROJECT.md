# 歷史作品：F Major — Ensemble Practice（2026-10-31）

狀態整理：**2026-10-31（香港時間）**。

本頁保留 2026-10-31 已交付作品的原有規格與證據。**目前新作**是 [F Major — Scale & Pulse Study（2026-11-07）](SCALE_PULSE_20261107.md)，兩者各有獨立檔案及 manifest；新作沒有覆蓋本頁的 335 音版本。

## 使用者確認的作品規格

- 七位學生／七個聲部：Soprano 1、Soprano 2、D Celtic、F Sabye、Alto、Bass 1、Bass 2。
- **F major，調號一個降號 B♭**；每個譜表均正確顯示調號。
- **4/4**。原始最密節奏上限為十六分音符；後來把這首練習曲收窄為簡單版本，Soprano 旋律主要用四分及八分音符。
- 主體是兩組八小節，共 16 小節；另加 **第 17 小節 F 和弦結束**。
- Soprano 1／2 都要重新寫，使用短的上行、下行或先升後降的音階片段，有不同 phrase 及呼吸；不需要走完整個音階。
- 兩個 Soprano 同時發聲時盡量避免半音碰撞；本次不使用 B natural，應按 F major 寫 B♭。
- Alto、Bass 1、Bass 2 合作分配和弦；D Celtic／F Sabye 做較豐富的伴奏及短填句。長期風格的最新補充另見 [COMPOSITION_STYLE.md](COMPOSITION_STYLE.md)。
- Bass 2 本作品使用**單行低音譜表**，主要保持低音域。
- 用 **MuseScore MCP** 進行樂譜編寫。

| 第一組／第二組小節 | 和弦 |
| --- | --- |
| 1／9 | F major |
| 2／10 | C major |
| 3／11 | D minor |
| 4／12 | A minor |
| 5／13 | B♭ major |
| 6／14 | F/A |
| 7／15 | B♭ major |
| 8／16 | C major |
| 17 | F major，結束 |

## 精確署名與頁尾

譜面可見作者文字：

> Composed by Hailey.S and Ting Ho Fung @Panlab Limited

Composer metadata：`Hailey.S and Ting Ho Fung @Panlab Limited`。本作品 arranger 留空，避免重複署名。

使用者選定的一行 copyright，**每一頁包括第一頁均顯示**：

> © 2026 Panlab Limited. All Rights Reserved.

年份及排法是本作品的已確認選擇；不照搬舊雲端譜的年份或兩行排法。

## 2026-10-31 已交付版本

可見標題：`F Major — Ensemble Practice`。當時另存的重寫版本檔名含 `F-Major-Ensemble-Practice-Revised`；本 repository 中總譜使用穩定名稱 `downloads/Scores/MuseScore/01-Full-Score.mscz`。

本版實作設定與證據如下，不是所有未來作品的硬性限制：

- 四分音符 **96 BPM**；兩條 Soprano 第 1–16 小節均有至少三音連續上行或下行的音階片段，每小節最多五個音頭；第 17 小節以全音符收結。
- Soprano 1 有句尾留白；Soprano 2 有回應、齊奏、交叉及音程配合。
- 逐八分拍位置檢查，現版兩個 Soprano 無半音或大七度音級碰撞。這是本版檢查結果，不是使用者永久禁止所有經過音不協和。
- D Celtic／F Sabye 在本版較多輪流填句；Alto 前八小節弱拍四分和弦，後八小節加入反拍八分和弦。
- Bass 2 在本版只使用 F2／A2／B♭2。當時風格已明確容許 C3，但 2026-10-31 只記錄，未回頭改譜；2026-11-07 的獨立新作已使用 C3。
- 七個 part，共十個譜表：D Celtic、F Sabye、Alto 各自是兩行大譜表，其餘各一行。

| 聲部 | 現版 MIDI note-on 數量 |
| --- | ---: |
| Soprano 1 | 77 |
| Soprano 2 | 78 |
| D Celtic | 27 |
| F Sabye | 21 |
| Alto | 86 |
| Bass 1 | 32 |
| Bass 2 | 14 |
| 合計 | 335 |

以上用來辨識現版及驗證匯出，後續改編可以合理改變數量。

## 交付檔案

| 位置 | 內容 |
| --- | --- |
| `downloads/Scores/PDF/` | 總譜兩頁；七份分譜各一頁，共八個 PDF |
| `downloads/Scores/MuseScore/` | 對應八個可編輯原生 MSCZ |
| `downloads/Audio/Harp/` | 總譜及七個聲部，共八個純 Harp MP3 |
| `downloads/Audio/Harp-with-Click/` | 對應八個 Harp＋Click MP3 |
| `downloads/README.txt` | 練習及檔案說明 |
| `downloads/F-Major-Ensemble-Practice-Revised-Panlab-2026-10-31.zip` | 上述 33 個檔案的完整壓縮包 |

公開下載目錄合共 **34 個檔案**，包括壓縮包本身；總大小 21,403,164 bytes。ZIP 為 10,578,822 bytes。逐檔 SHA-256 及大小見 [download-manifest.json](../download-manifest.json)。

所有 MP3 使用原生 MuseScore Basic Harp；每個約 45.5 秒，包括結尾餘韻。Click 版本 68 個四分拍，第一拍加重，由第 1 小節第一拍開始，**沒有額外預備小節**。分譜音訊保留完整 17 小節時間及休止。

## 歷史驗證與後續版本

2026-10-31 已驗證：live MuseScore 逐聲部讀回、七人音庫、F major 調號、八個原生檔案、九頁 PDF 排版、原生 Harp／停用和弦自動發聲、十六個 MP3；正式網站 38 次未登入 HTTP GET 全部 200，34 個下載檔案大小及 SHA-256 與本機一致。瀏覽器實際 ZIP 下載及正式網址 MP3 播放通過。

最初發佈網站與檔案的 commit：`7519a70cb286329b0ce7684cd2af76d6070f7188`。

**當時的任務範圍**：2026-10-31 使用者只要求記住風格及保存知識，沒有再改編這一份作品。

**2026-11-07 後續**：使用者已授權另一首新練習曲，詳見 [SCALE_PULSE_20261107.md](SCALE_PULSE_20261107.md)。新作的 352 音、分段節奏及字母音名是獨立要求，不追溯改變本頁舊作；舊作下載檔案繼續保留。
