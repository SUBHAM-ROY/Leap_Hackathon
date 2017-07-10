chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "http://subro-test.azurewebsites.net/login.html";
  chrome.tabs.create({ url: newURL });
});

function ajaxRequest(){
 var activexmodes=["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"] //activeX versions to check for in IE
 if (window.ActiveXObject){ //Test for support for ActiveXObject in IE first (as XMLHttpRequest in IE7 is broken)
  for (var i=0; i<activexmodes.length; i++){
   try{
    return new ActiveXObject(activexmodes[i])
   }
   catch(e){
    //suppress error
   }
  }
 }
 else if (window.XMLHttpRequest) // if Mozilla, Safari etc
  return new XMLHttpRequest()
 else
  return false
}

//Sample call:
//var myajaxrequest=new ajaxRequest()





//text
chrome.contextMenus.create({
	id: "search_and_send",
	title: "TelePort",
	contexts:["selection"],
	onclick : onRequest

});

function onRequest(info, tab) {
	var selection = info.selectionText;	
  	//var chatID= localStorage[cID];
  	//alert(chatID);
  	alert(selection);
  	console.log(selection);

  	var mypostrequest=new ajaxRequest()
	mypostrequest.onreadystatechange=function(){
	 if (mypostrequest.readyState==4){
	  if (mypostrequest.status==200 ){
	   //document.getElementById("result").innerHTML=mypostrequest.responseText
	  }
	  else{
	   alert("An error has occured making the request")
	  }
	 }
	}

  	var mypostrequest2=new ajaxRequest()
	mypostrequest2.onreadystatechange=function(){
	 if (mypostrequest2.readyState==4){
	  if (mypostrequest2.status==200 ){
		var chatID = mypostrequest2.responseText;
		var parameters="chat_id=" + chatID + "&text=" + selection;
		mypostrequest.open("POST", "https://api.telegram.org/bot392333038:AAGk3Jx3FFuHLb0epzKffq4t9AUrLujj1XQ/sendMessage", true);
		mypostrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		mypostrequest.send(parameters);
	  }
	  else{
	   alert("An error has occured making the request")
	  }
	 }
	}

	mypostrequest2.open("GET", "http://subro-test.azurewebsites.net/getchatid.php?brno="+encodeURI(String(navigator.userAgent)) , true);
	mypostrequest2.send();

};

//image
chrome.contextMenus.create({
	id: "randomim",
    title: "TelePort Image",
    contexts:["image"],
    onclick: function(info) {
        handleImageURL(info.srcUrl);
    }
});

function handleImageURL(url) {
    // now do something with the URL string in the background page
    var mypostrequest=new ajaxRequest()
	mypostrequest.onreadystatechange=function(){
	 if (mypostrequest.readyState==4){
	  if (mypostrequest.status==200 ){
	   //document.getElementById("result").innerHTML=mypostrequest.responseText
	  }
	  else{
	   alert("An error has occured making the request")
	  }
	 }
	}
	
	var mypostrequest2=new ajaxRequest()
	mypostrequest2.onreadystatechange=function(){
	 if (mypostrequest2.readyState==4){
	  if (mypostrequest2.status==200 ){
		var chatID = mypostrequest2.responseText;
		var parameters="chat_id=" + chatID + "&photo=" + url;
		mypostrequest.open("POST", "https://api.telegram.org/bot392333038:AAGk3Jx3FFuHLb0epzKffq4t9AUrLujj1XQ/sendPhoto", true);
		mypostrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		mypostrequest.send(parameters);
	  }
	  else{
	   alert("An error has occured making the request")
	  }
	 }
	}

	mypostrequest2.open("GET", "http://subro-test.azurewebsites.net/getchatid.php?brno="+encodeURI(String(navigator.userAgent)) , true);
	mypostrequest2.send();
}

//video
chrome.contextMenus.create({
	id: "randomvid",
    title: "TelePort Video",
    contexts:["video"],
    onclick: function(info) {
    	console.log(info);
        handleVideoURL(info.srcUrl);
    }
});
function handleVideoURL(url) {
    // now do something with the URL string in the background page
    var mypostrequest=new ajaxRequest()
	mypostrequest.onreadystatechange=function(){
	 if (mypostrequest.readyState==4){
	  if (mypostrequest.status==200 ){
	   //document.getElementById("result").innerHTML=mypostrequest.responseText
	  }
	  else{
	   alert("An error has occured making the request")
	  }
	 }
	}
	
	var mypostrequest2=new ajaxRequest()
	mypostrequest2.onreadystatechange=function(){
	 if (mypostrequest2.readyState==4){
	  if (mypostrequest2.status==200 ){
		var chatID = mypostrequest2.responseText;
		var parameters="chat_id=" + chatID + "&video=" + url;
		mypostrequest.open("POST", "https://api.telegram.org/bot392333038:AAGk3Jx3FFuHLb0epzKffq4t9AUrLujj1XQ/sendVideo", true);
		mypostrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		mypostrequest.send(parameters);
	  }
	  else{
	   alert("An error has occured making the request")
	  }
	 }
	}

	mypostrequest2.open("GET", "http://subro-test.azurewebsites.net/getchatid.php?brno="+encodeURI(String(navigator.userAgent)) , true);
	mypostrequest2.send();
}


//audio
chrome.contextMenus.create({
	id: "randomaud",
    title: "TelePort Audio",
    contexts:["audio"],
    onclick: function(info) {
    	console.log(info);
        handleAudioURL(info.srcUrl);
    }
});
function handleAudioURL(url) {
    // now do something with the URL string in the background page
    var mypostrequest=new ajaxRequest()
	mypostrequest.onreadystatechange=function(){
	 if (mypostrequest.readyState==4){
	  if (mypostrequest.status==200 ){
	   //document.getElementById("result").innerHTML=mypostrequest.responseText
	  }
	  else{
	   alert("An error has occured making the request")
	  }
	 }
	}
	
	var mypostrequest2=new ajaxRequest()
	mypostrequest2.onreadystatechange=function(){
	 if (mypostrequest2.readyState==4){
	  if (mypostrequest2.status==200 ){
		var chatID = mypostrequest2.responseText;
		var parameters="chat_id=" + chatID + "&audio=" + url;
		mypostrequest.open("POST", "https://api.telegram.org/bot392333038:AAGk3Jx3FFuHLb0epzKffq4t9AUrLujj1XQ/sendAudio", true);
		mypostrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		mypostrequest.send(parameters);
	  }
	  else{
	   alert("An error has occured making the request")
	  }
	 }
	}

	mypostrequest2.open("GET", "http://subro-test.azurewebsites.net/getchatid.php?brno="+encodeURI(String(navigator.userAgent)) , true);
	mypostrequest2.send();
}