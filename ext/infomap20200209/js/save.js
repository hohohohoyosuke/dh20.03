
/*localstorageに編集内容を保存する
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
*/

/*thisIdを使わず、editableContentを直接指定するトライ*/

//編集された都度、内容をlocalStorageに保存する関数
function onInput(){
  //編集中のHTML要素の内容を変数latestContentに格納
  const latestContent = document.getElementById('editableContent').outerHTML;
  //変数latestContentの値をlocalStorageに保存。keyは変数thisId
  localStorage.setItem('editableContent', latestContent);
}
