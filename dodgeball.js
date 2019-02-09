window.addEventListener("keydown", checkKeyPressed);

var real_player = {
  x: 0,
  y: 0
}
var step = 20;
var secs = 1;
var timer = 0;

window.alert("Use WASD to move the character around. The game's objective is to gather the most coins in the given time.");
var player = document.getElementById("player");
var player_height = player.getAttribute("height")
var screen_height = 450

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
      case 65:
        leftPressed();
        break;
      case 68:
        rightPressed();
        break;
		}
}

var downPressed = function(){
  if (real_player.y <= screen_height){
    real_player.y += 20;
    player.style.top = real_player.y + 'px';
  }
}

var upPressed = function(){
  if (real_player.y >= 0){
    real_player.y -= 10;
    player.style.top = real_player.y + 'px';
  }
}

var leftPressed = function(){
  if (real_player.x >= 0){
    real_player.x -= 10;
    player.style.left = real_player.x + 'px';
  }
}

var rightPressed = function(){
  if (real_player.x <= 1300){
    real_player.x += 10;
    player.style.left = real_player.x + 'px';
  }
}

var generateCoin = function(){
  console.log("Generating coin.");
  var coin = document.createElement("IMG");
//  random_x = (Math.random() * 1300) + 1;
//  random_y = (Math.random() * 450) + 1;

  coin.setAttribute("src", "images/Substitute.png");
  coin.setAttribute("width", "35px");
  coin.setAttribute("height", "35px");
  coin.setAttribute("alt", 'Coin');
  coin.setAttribute('id', 'Coin')
  document.body.appendChild(coin);

//  console.log('(' + random_x + ', ' + random_y + ')');

}

 


while (timer < 300){
  setTimeout(func, 1/60)
  console.log("Game has ended.")

}
