
/*コンテンツを描画する*/

//HTMLに追加する内容を格納する変数を宣言
let addContents = "";

//localStorageにコンテンツの内容が保存されているか確認をして、処理を分岐させる
if(localStorage.getItem("editableContent")){
    //localStorageから、保存したコンテンツ(キーはeditableContent)を取得し、変数addContentsに追加
    addContents += localStorage.getItem("editableContent");
} else {
    //localStorageに保存したコンテンツがない場合は、デフォルトの内容を変数addContentsに追加
    addContents += '\
      <div id="editableContent" contenteditable="true" oninput="onInput();">\
        <div class="category_outer">\
          <div class="category">\
            <div class="category_name"><p>情報<br>デザイン</p>\
            </div>\
          </div>\
          <div class="link">\
            <div class="link_name">\
              <p><i src="./img/"></i>\
                <a href="https://infodesign.amebaownd.com/" target="_blank">INFO DESIGN</a>\
              </p>\
            </div>\
          </div>\
          <div contenteditable="false">\
            <div id="addlinkbutton" class="addlinkbutton">Add<br>link\
            </div>\
            <div id="addcategorybutton" class="addcategorybutton">Add<br>Caterogy\
            </div>\
          </div>\
        </div>\
      </div>\
    ';
}

//変数addContentsの内容をid"wrapper"の中身に追加
//document.getElementById("wrapper").innerHTML = addContents;
//変数使って分割記述
var page = document.getElementById("wrapper");
page.innerHTML = addContents;