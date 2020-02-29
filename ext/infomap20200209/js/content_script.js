//https://mae.chab.in/archives/2861
//に沿ったトライ

// localStorageに保存されているkey名'foo'の値を取得する場合
chrome.runtime.sendMessage({method: 'getItem', key: 'foo'}, function (response) {
  if (response.data) {
    console.log(response.data);
  }
});

// localStorageにkey名'foo'として値2を保存する場合
chrome.runtime.sendMessage({method: 'setItem', key: 'foo', value: 2});

// localStorageのkey名'foo'の値を削除する場合
chrome.runtime.sendMessage({method: 'removeItem', key: 'foo'});