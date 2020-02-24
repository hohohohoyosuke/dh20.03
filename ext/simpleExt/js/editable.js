/*localstorageに編集内容を保存する*/
//idを格納する変数を宣言
var thisId = "";

//編集された都度、内容をlocalStorageに保存する関数
function onInput(){
  //編集中のHTML要素のidを変数thisIdに格納
  thisId = document.activeElement.id;
  //編集中のHTML要素の内容を変数latestContentに格納
  const latestContent = document.getElementById(thisId).outerHTML;
  //変数latestContentの値をlocalStorageに保存。keyは変数thisId
  localStorage.setItem(thisId, latestContent);
}

//追加する先である、"editableContent"のidを変数targetに格納
var target = document.getElementById("editableContent");

//HTMLに追加する内容を格納する変数を宣言
let addContents = "";

//localStorageにコンテンツの内容が保存されているか確認をして、処理を分岐させることでエラーを回避
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
      </div>\
      <div contenteditable="false">\
        <div id="addlinkbutton" class="addlinkbutton">Add<br>link\
        </div>\
        <div id="addcategorybutton" class="addcategorybutton">Add<br>Caterogy\
        </div>\
      </div>\
    </div>\
    ';
}

//最後に変数addContentsの内容をid"wrapper"の中身に追加
document.getElementById("wrapper").outerHTML = addContents;

