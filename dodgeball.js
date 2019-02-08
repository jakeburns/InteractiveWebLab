
window.addEventListener("keydown", checkKeyPressed);
var player_position = 0
var step = 20
var first_movement = true

window.alert("Use the W and S keys to move up and down to dodge the  balls.");
var player = document.getElementById("playerBtn");

// function checkKeyPressed(e) {
//     if (e.keyCode == "83") {
//       downPressed();
//     }
//     else if (e.keyCode == "87"){
//       upPressed();
//     }
//}


function checkKeyPressed(e){
		var key_code=e.which||e.keyCode;
		switch(key_code){
			case 83: //s key
        if (first_movement){
          first_movement = false
          start_game()
        }
				downPressed();
				break;
			case 87: //w key
        if (first_movement){
          first_movement = false
          start_game()
        }

				upPressed();
				break;
		}
  }

var moveUp = function(){

  //player.style.top+="300px";
  player.style.top=parseInt(player.style.top)-5 +'px';
}

var downPressed = function(){
   player_position += step
   player.style.top = player_position + 'px';
}

var upPressed = function(){
   player_position -= step
   player.style.top = player_position + 'px';

}
//window.onload = init;



function start_game(){

  var rand_y = Math.random() *
}
