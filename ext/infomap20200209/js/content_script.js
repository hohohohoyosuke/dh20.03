chrome.runtime.sendMessage({method: "getUser", user_id: user_id},
 function(response) {
  if(response.user_name){
    console.log(response.user_name);
  }
});