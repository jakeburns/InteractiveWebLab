window.addEventListener("keydown", checkKeyPressed);

var real_player = {
  x: 0,
  y: 0
}
var step = 20;
var secs = 1;
var amount_of_coins = 3;
var absolute_width = 35;
var absolute_height = 35;
var current_interval = 0;
var max_intervals = 25;

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
  var clicker = document.createElement("BUTTON");
  var coin = document.createElement("IMG")
//  random_x = (Math.random() * 1300) + 1;
//  random_y = (Math.random() * 450) + 1;
  clicker.setAttribute("type", "button");
  coin.setAttribute("src", "images/Substitute.png");
  coin.setAttribute("width", absolute_width);
  coin.setAttribute("height", absolute_height);
  coin.setAttribute("alt", "Coin");
  coin.setAttribute("class", "Coin")
  console.log(coin)
  clicker.setAttribute('onclick', "animateCoin(this.id)")
  document.body.appendChild(clicker);
  clicker.appendChild(coin);

  return [clicker, coin];
//  console.log('(' + random_x + ', ' + random_y + ')');

}

var animateCoin = function(id){
  var button = document.getElementById(id);
  var coin = button.getElementsByClassName('Coin')[0];
  var width = absolute_width;
  var height = absolute_height;
  var transparency = 0;
  var change_attribute = function(){
    if (current_interval > max_intervals){
      clearInterval(interval)
      current_interval = 0
      document.body.removeChild(button)
    }
    coin.setAttribute('width', width);
    coin.setAttribute('height', height);
    coin.style.opacity = toString(transparency);

    console.log(transparency)
    width++;
    height++;
    current_interval++;
    transparency += 1/max_intervals;
  }

  var interval = setInterval(change_attribute, 500)
}

for (var i = 0; i < amount_of_coins; i++){
  var elements = generateCoin();
  var button = elements[0];
  var coin = elements[1];
  button.setAttribute('id', i)
  coin.setAttribute('id', i)
  //button.onclick = function() {animateCoin(i);}
}
