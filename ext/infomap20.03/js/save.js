
/*localstorageに編集内容を保存する*/

//

window.addEventListener('load', (event) => {
  document.getElementById("savebutton").addEventListener("click", saveToLocalStorage, false);
  console.log(document.getElementById("savebutton"));
});

//HTMLをlocalStorageに保存する関数
function saveToLocalStorage(){
  //編集中のHTML要素の内容を変数latestContentに格納
  var latestContent = document.getElementById('editableContent').outerHTML;
  //変数latestContentの値をlocalStorageに保存。keyは変数thisId
  localStorage.setItem('editableContent', latestContent);
}


//変数addContentsの内容をid"wrapper"の中身に追加
//document.getElementById("wrapper").innerHTML = addContents;
//変数使って分割記述

var page = document.getElementById("wrapper");
var box = document.createElement('div');
box.innerHTML = addContents;
page.appendChild(box);