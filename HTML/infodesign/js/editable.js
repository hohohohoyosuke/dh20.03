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

//追加する先である、"wrapper"のidを変数targetに格納します。
var target = document.getElementById("wrapper");
//HTMLに追加する内容を格納する変数を宣言
let addContents = "";

//localStorageにコンテンツの内容が保存されているか確認をして、処理を分岐させることでエラーを回避します。
if(localStorage.getItem("editableContent")){
    //localStorageから、保存したコンテンツ(キーはeditableContent)を取得し、変数addContentsに追加します。
    addContents += localStorage.getItem("editableContent");
} else {
    //localStorageに保存したコンテンツがない場合は、デフォルトの内容を変数addContentsに追加します。
    addContents += '<div id="editableContent" contenteditable="true" onInput="onInput();">編集可能コンテンツ</div>';
}

//最後に変数addContentsの内容をid"wrapper"の中身に追加します。
document.getElementById("wrapper").outerHTML = addContents;