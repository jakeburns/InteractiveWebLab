
window.addEventListener("keydown", checkKeyPressed);

window.alert("Use the W and S keys to move up and down to dodge the  balls.");

function checkKeyPressed(e) {
    if (e.keyCode == "83") {
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
