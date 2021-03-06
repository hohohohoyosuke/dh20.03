
/*中身を編集する*/
// localstorageの中身を描画させてから（画面に要素が揃ってから）処理を始める
window.onload = function() {

  /*リンクを追加する*/
  //addlinkボタンを見つけ、リスナーを貼る
  document.getElementById("addlinkbutton").addEventListener("click", function() {
    //変数linkにリンクを描画するためのdivを作って格納する
    //var link = document.createElement('div');
    //変数linkにリンクを描画するためのaタグを作って格納する
    //var link = document.createElement('a');
    
    //変数faviconにファビコンを格納する（仕掛かり中。連結まではできた。URLが正しく取れればいけるか。）
    var favicon = document.createTextNode('http://www.google.com/s2/favicons?domain=' + location.href);
    
    //参考：http://www.inashiro.com/2011/06/13/dev-chrome-extension-get-current-tab-url/
    //タブのURLを取得する
    chrome.tabs.getSelected(window.id, function (tab) {
      var title = document.createTextNode(tab.title);
      var tabUrl = document.createTextNode(tab.url);
      var favicon = document.createTextNode('http://www.google.com/s2/favicons?domain=' + tab.url);
      console.log(tabUrl);

      //変数linkにリンクを描画するためのaタグを作って格納する
      var link = document.createElement('a');
      //リンクURLを付与
      link.setAttribute('href', tabUrl);
      //リンク文字列用のクラスを付与
      link.classList.add('linktext');
      //ドラッグアンドドロップのためのクラスを付与
      link.classList.add('drag-and-drop');
      //ドラッグのクラスを付与
      link.classList.add('drag');
      /*localstorageに保存する関数が発動できるように、idを振る*/
      //link.setAttribute('id', 'editableContent');
      link.addEventListener('click', function(){
        link.contentEditable='true';
        });
      
      //editableContent>link直下にfaviconを追加する
      //document.getElementById('editableContent').appendChild(link).appendChild(favicon);
      //editableContent>link直下にtitleを追加する
      document.getElementById('editableContent').appendChild(link).appendChild(title);
      //editableContent>link直下にURLを追加する
      //document.getElementById('editableContent').appendChild(link).appendChild(url);
    
      //追加した要素に対し、ドラッグアンドドロップできるようにする
      (function(){

        // 要素の取得
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
  });//document.getElementById("addlinkbutton").addEventListener終わり

  /*カテゴリを追加する*/
  //addボタンを見つけ、リスナーを貼る
  document.getElementById("addcategorybutton").addEventListener("click", function() {
    //変数categoryにdivを作って格納する
    var category = document.createElement("div");
    //変数textにデフォルト値を指定して格納する
    var text = document.createTextNode("category");
    //円表現のクラスを付与
    category.classList.add('circle');
    category.classList.add('c2');
    //ドラッグアンドドロップのためのクラスを付与
    category.classList.add('drag-and-drop');
    //ドラッグのクラスを付与
    category.classList.add('drag');
    //localstorageに保存する関数が発動できるように、idを振る
    category.setAttribute('id', 'editableContent');
    category.addEventListener('click', function(){
        category.contentEditable='true';
      });
    //body直下に追加
    //document.body.appendChild(category).appendChild(text);
    //editableContent直下に追加
    document.getElementById('editableContent').appendChild(category).appendChild(text);

    //追加した要素に対し、ドラッグアンドドロップできるようにする
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
      }//function mmove(e)終わり

      
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
      }//function mup(e)終わり
    })()//(function()終わり
  });
}

//localStorageへの保存の確認
// key名'bar'に3を保存
localStorage.bar = 3;

// key名'bar'の値を取得
console.log(localStorage.bar); // => 3