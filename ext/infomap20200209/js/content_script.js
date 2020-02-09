chrome.runtime.sendMessage({method: "getLocalStorage", key: "status"}, function(response) {
  console.log(response.data);
});