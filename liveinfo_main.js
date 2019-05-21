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
        if (~rtnString.indexOf("お疲れ様")) {
          setTimeout(function(){
            answer_text="はい。お疲れ様です！";
            answer_balloon();},1000);
          vr_function();
        } else if (~rtnString.indexOf("こんにちは")) {
          setTimeout(function(){
            answer_text="はい。こんにちは！";
            answer_balloon();},1000);
          vr_function();
        } else if (~rtnString.indexOf("1号線") || ~rtnString.indexOf("羽田線")){
          num=0;
          routeInfo(num);
        } else if ((~rtnString.indexOf("3号線") || ~rtnString.indexOf("渋谷線")) && ~rtnString.indexOf("下り")) {
          num=2;
          routeInfo(num);
        } else if (~rtnString.indexOf("3号線") || ~rtnString.indexOf("渋谷線"))  {
          num=1;
          routeInfo(num);
        } else if ((~rtnString.indexOf("4号線") || ~rtnString.indexOf("新宿線")) && ~rtnString.indexOf("下り")) {
          num=4;
          routeInfo(num);
        } else if (~rtnString.indexOf("4号線") || ~rtnString.indexOf("新宿線"))  {
          num=3;
          routeInfo(num);
        } else if ((~rtnString.indexOf("5号線") || ~rtnString.indexOf("池袋線")) && ~rtnString.indexOf("下り")) {
          num=6;
          routeInfo(num);
        } else if (~rtnString.indexOf("5号線") || ~rtnString.indexOf("池袋線"))  {
          num=5;
          routeInfo(num);
        } else if ((~rtnString.indexOf("6号線") || ~rtnString.indexOf("向島線")) && ~rtnString.indexOf("下り")) {
          num=8;
          routeInfo(num);
        } else if (~rtnString.indexOf("6号線") || ~rtnString.indexOf("向島線")) {
          num=7;
          routeInfo(num);
        } else if (~rtnString.indexOf("7号線") || ~rtnString.indexOf("小松川線")) {
          num=9;
          routeInfo(num);
        } else if (~rtnString.indexOf("川口線")) {
          num=10;
          routeInfo(num);
        } else if (~rtnString.indexOf("三郷線")) {
          num=11;
          routeInfo(num);
        }else {
          setTimeout(function(){
            answer_text="「"+rtnString+"」って言いました？";
            answer_balloon();},1000);
          vr_function();
        }
      } else {
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


//路線情報
function routeInfo(num){

  var j=num;
  setTimeout(function(){
      answer_text="はい。首都高速"+text.item[j][0]+"の情報です。<br>"+
      text.item[j][0]+"の"+text.item[j][1]+"、"+text.item[j][2]+"から"+text.item[j][3]+"にかけての所要時間は、およそ"+text.item[j][7]+"分です。<br>("+text.updtime+"配信)";
    answer_balloon();},1000);
 
}