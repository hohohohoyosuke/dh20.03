chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == "getUser"){
    sendResponse({user_id: localStorage[request.user_id]});
  }else{
    sendResponse({});
  }
});