//グローバル変数宣言
var flag_speech = 0;
var input_text;
var answer_text;


//入力フキダシ生成
function input_balloon(){
  var target = document.getElementById("wrapper");
  var newTag = document.createElement("p");
  newTag.setAttribute("class", "input_comment");
  newTag.innerHTML = input_text;
  target.appendChild(newTag);
}

//応答フキダシ生成
function answer_balloon(){
  var target = document.getElementById("wrapper");
  var newTag = document.createElement("p");
  var imgTag = document.createElement("img");
  newTag.setAttribute("class", "answer_comment");
  imgTag.setAttribute("src", "icon.png");
  imgTag.setAttribute("width", "100");
  newTag.innerHTML = answer_text;
  target.appendChild(imgTag);
  target.appendChild(newTag);
}


//音声認識メイン
function vr_function() {
  window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
  var recognition = new webkitSpeechRecognition();
  recognition.lang = 'ja';
  recognition.interimResults = true;
  recognition.continuous = true;

  //エラー;
  recognition.onerror = function () {
    if (flag_speech == 0) vr_function();
  };

  //認識中断
  recognition.onsoundend = function () {
    console.log("停止中");
    vr_function();
  };

  //認識成功
  recognition.onresult = function (event) {
    var results = event.results;
    for (var i = event.resultIndex; i < results.length; i++) {
      if (results[i].isFinal) {
        //認識結果はグローバルで宣言
        rtnString = results[i][0].transcript;
        //認識結果コンソール表示
        console.log("【"+rtnString+"】");
        input_text=rtnString;
        input_balloon();

        //条件分岐　反応キーワードを設定
        if (~rtnString.indexOf("お疲れ様")) {
          //応答動作
          setTimeout(function(){
            //応答語句を設定
            answer_text="はい。お疲れ様です！";
            //1000ミリ秒遅延して応答フキダシを表示
            answer_balloon();},1000);
            //音声認識再開
            vr_function();
        } else if (~rtnString.indexOf("こんにちは")) {
          setTimeout(function(){
            answer_text="はい。こんにちは！";
            answer_balloon();},1000);
          vr_function();
        }else {
          setTimeout(function(){
            answer_text="「"+rtnString+"」って言いました？";
            answer_balloon();},1000);
          vr_function();
        }
      } else {
          //認識過程をコンソール表示
          console.log("[認識中] " + results[i][0].transcript);
          flag_speech = 1;
      }
  }
}
//音声認識開始
flag_speech = 0;
console.log("認識開始");
recognition.start();
}
