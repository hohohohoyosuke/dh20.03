//URLを取得する
function showUrl(){
  var url= location.href;
  console.log(url);
}

//リンクを追加する
//addlinkボタンを見つけ、リスナーを貼る
document.getElementById("addlinkbutton").addEventListener("click", function() {
  //変数categoryにリンクを描画するためのdivを作って格納する
  var category = document.createElement("div");
  //変数urlにページのURLを格納する
  var url= document.createTextNode(location.href);
  //円表現のクラスを付与
  category.classList.add('circle');
  category.classList.add('c2');
  //ドラッグアンドドロップのためのクラスを付与
  category.classList.add('drag-and-drop');
  //ドラッグのクラスを付与
  category.classList.add('drag');
  /*save.jsが発動できるように、idを振る*/
  category.setAttribute('id', 'editableContent');
  category.addEventListener('click', function(){
  category.contentEditable='true';
  });
  document.body.appendChild(category).appendChild(url);

  //追加したカテゴリに対してもドラッグアンドドロップできるようにする
  (function(){

    //要素の取得
  var elements = document.getElementsByClassName("drag-and-drop");

  //要素内のクリックされた位置を取得するグローバル（のような）変数
  var x;
  var y;

  //マウスが要素内で押されたとき、又はタッチされたとき発火
  for(var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("mousedown", mdown, false);
    elements[i].addEventListener("touchstart", mdown, false);
    }

  //マウスが押された際の関数
  function mdown(e) {

    //クラス名に .drag を追加
    this.classList.add("drag");

    //タッチイベントとマウスのイベントの差異を吸収
    if(e.type === "mousedown") {
      var event = e;
    } else {
      var event = e.changedTouches[0];
    }

    //要素内の相対座標を取得
    x = event.pageX - this.offsetLeft;
    y = event.pageY - this.offsetTop;

    //ムーブイベントにコールバック
    document.body.addEventListener("mousemove", mmove, false);
      document.body.addEventListener("touchmove", mmove, false);
    }

  //マウスカーソルが動いたときに発火
  function mmove(e) {

    //ドラッグしている要素を取得
    var drag = document.getElementsByClassName("drag")[0];

    //同様にマウスとタッチの差異を吸収
    if(e.type === "mousemove") {
      var event = e;
    } else {
      var event = e.changedTouches[0];
    }

    //フリックしたときに画面を動かさないようにデフォルト動作を抑制
    e.preventDefault();

    //マウスが動いた場所に要素を動かす
    drag.style.top = event.pageY - y + "px";
    drag.style.left = event.pageX - x + "px";

    //マウスボタンが離されたとき、またはカーソルが外れたとき発火
    drag.addEventListener("mouseup", mup, false);
    document.body.addEventListener("mouseleave", mup, false);
    drag.addEventListener("touchend", mup, false);
    document.body.addEventListener("touchleave", mup, false);

  }

  //マウスボタンが上がったら発火
  function mup(e) {
    var drag = document.getElementsByClassName("drag")[0];

    //ムーブベントハンドラの消去
    document.body.removeEventListener("mousemove", mmove, false);
    drag.removeEventListener("mouseup", mup, false);
    document.body.removeEventListener("touchmove", mmove, false);
    drag.removeEventListener("touchend", mup, false);

    //クラス名 .drag も消す
    drag.classList.remove("drag");
    }
  })()
});




