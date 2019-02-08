
window.addEventListener("keydown", checkKeyPressed, false);



function checkKeyPressed(e) {
    if (e.keyCode == "83") {
      //  alert("The 'a' key is pressed.");
        //window.alert("Testing");
      downPressed();
    }
    else if (e.keyCode == "87"){
      upPressed();
    }
}

var moveUp = function(){
  var player = document.getElementById("playerBtn");
  player.style.top+="300px";
}

var downPressed = function(){
  var player = document.getElementById("playerBtn");
   player.style.top =+ 200 + 'px';
}

var upPressed = function(){
  var player = document.getElementById("playerBtn");
   player.style.top =- 200 + 'px';

}
