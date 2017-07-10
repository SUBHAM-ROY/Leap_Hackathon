function ajaxRequest(){
 var activexmodes=["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"]//activeX versions to check for in IE
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


var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function latenm() {
    modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
function latenm2() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



function myFun(){

    console.log("hello");
    var x = document.getElementById("val").value;
    console.log(x);
    console.log("http://subro-test.azurewebsites.net/verify.php?pinno="+String(x));
    //alert(x);
    // $.ajax({
    //     type: "POST",
    //     url: "http://teleport-server.azurewebsites.net/verify.php",
    //     data: {pinno: x},
    //     success: function(response){
    //         var data_array = $.parseJSON(response);
    //         var returnval = data_array;
    //         //console.log(data_array);
    //         //console.log(returnval);
    //         alert(returnval);
    //         //localStorage.setItem('scID', returnval);
    //         //chatID = localStorage.getItem("cID");
    //     }
    // });
    
    var mypostrequest2=new ajaxRequest()
    mypostrequest2.onreadystatechange=function(){
     if (mypostrequest2.readyState==4){
      if (mypostrequest2.status==200 ){

      }

      else{
       alert("An error has occured making the request")
      }
     }
    }


    var mypostrequest=new ajaxRequest()
    mypostrequest.onreadystatechange=function(){
     if (mypostrequest.readyState==4){
      if (mypostrequest.status==200 ){
       //alert(mypostrequest.responseText);
        var result = mypostrequest.responseText;
        //localStorage.setItem('cID', result);
        //var cID = localStorage.setItem(result);
        //browser.runtime.sendMessage({cID: result}, function(response) {
        console.log(result);
        if(result=='no')
            alert("Invalid PIN");
        else
        {
            alert("WELCOME");
            mypostrequest2.open("GET", "http://subro-test.azurewebsites.net/storechatid.php?brno="+encodeURI(String(navigator.userAgent))+"&chatid="+String(result), true);
            mypostrequest2.send();
            console.log("http://subro-test.azurewebsites.net/storechatid.php?brno="+encodeURI(String(navigator.userAgent))+"&chatid="+String(result));
        }

      }

      else{
       alert("An error has occured making the request")
      }
     }
    }
    
    var parameters="pinno=" + x;
    mypostrequest.open("GET", "http://subro-test.azurewebsites.net/verify.php?pinno="+String(x), true);
    //mypostrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    mypostrequest.send();
     
}



