# voicechat

web speech APIを用いたチャットボットの素。

## ファイル構成

### 最小構成チャット
- index.html
- main.js
  - 「お疲れ様」「こんにちは」に反応。それ以外は「〇〇って言いました？」オウム返し。
 
### 首都高旅行時間（情報取得のためphp）
- liveinfo.php
- liveinfo_main.js
  - 上記に加え「1号線」「羽田線」「3号線」「渋谷線」「4号線」「新宿線」「5号線」「池袋線」「6号線」「向島線」「7号線」「小松川線」
  に反応。所要時間を応答。上下あれば上下別案内。省略されると上り。
  
### ロガー機能付きバージョン
- log.php
- log_main.js
- sendlog.php スプレッドシートにPOST。ハッシュ部分を代入すること。
  
### 共用
- style.css
- icon.png
  
  
## 必要環境
- google chrome
- 音声入力
- (SSL接続。非SSLだと入力ごとにプロンプトが要求される)
