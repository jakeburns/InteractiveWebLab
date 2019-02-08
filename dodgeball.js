
window.addEventListener("keydown", checkKeyPressed);
var player = {
  x: 0,
  y: 0
}
var step = 20;

window.alert("Use the W and S keys to move up and down to dodge the  balls.");
var player = document.getElementById("player");
var player_height = player.getAttribute("height")
var screen_height = 600

console.log(player_height)
// function checkKeyPressed(e) {
//     if (e.keyCode == "83") {
//       downPressed();
//     }
//     else if (e.keyCode == "87"){
//       upPressed();
//     }
//}

function start_of_game(){
  player.style.top = 100
  player.style.left = 0
}

function checkKeyPressed(e){
		var key_code=e.which||e.keyCode;
		switch(key_code){
			case 83: //s key
				downPressed();
				break;
			case 87: //w key
				upPressed();
				break;
		}
  }

var moveUp = function(){

  //player.style.top+="300px";
  player.style.top=parseInt(player.style.top)-5 +'px';
}

var downPressed = function(){
  player_position += step;
  player.style.top = player_position + 'px';
}

var upPressed = function(){
  player_position -= step
  player.style.top = player_position + 'px';
}
