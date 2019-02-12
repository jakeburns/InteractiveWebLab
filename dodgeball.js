window.addEventListener("keydown", checkKeyPressed);

var real_player = {
  x: 0,
  y: 0
}
var step = 20;
var secs = 1;
var amount_of_coins = 175;
var absolute_width = 25;
var absolute_height = 50;
var current_interval = 0;
var max_intervals = 25;
var current_score = 0;
var current_time = 20;
var timer_element = document.getElementById('Timer')

window.alert("IMPORTANT INSTRUCTIONS: Use WASD to move the character around. The game's objective is to gather the most coins in " +  current_time + " seconds. The coins are randomized each time you play. Click on the coin to obtain it.");
var player = document.getElementById("player");
var player_height = player.getAttribute("height");
var screen_height = 450;

console.log(player_height)
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
    real_player.y += 10;
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
  player.setAttribute('src', 'images/Avatar-Back.png');
  if (real_player.x >= 0){
    real_player.x -= 10;
    player.style.left = real_player.x + 'px';
  }
}

var rightPressed = function(){
  player.setAttribute('src', 'images/Avatar-Front.png');
  if (real_player.x <= 1300){
    real_player.x += 10;
    player.style.left = real_player.x + 'px';
  }
}

var generateCoin = function(){
  var clicker = document.createElement("BUTTON");
  var coin = document.createElement("IMG")
  var side_num = Math.floor((Math.random() * 4));
  var side;
  var pixels;

  if (side_num == 0){
    var min_pixels = 0;
    var max_pixels = 250;

    side = 'top'
    pixels = (Math.random() * max_pixels) + min_pixels
  }else if(side_num == 1){
    var min_pixels = 0;
    var max_pixels = 300;

    side = 'left'
    pixels = (Math.random() * max_pixels) + min_pixels
  }

  clicker.setAttribute("type", "button");
  clicker.style[side] = pixels + "px";
  coin.setAttribute("src", "images/Coin.png");
  coin.setAttribute("width", absolute_width);
  coin.setAttribute("height", absolute_height);
  coin.setAttribute("alt", "Coin");
  coin.setAttribute("class", "Coin")
  clicker.setAttribute('onclick', "animateCoin(this.id)")
  document.body.appendChild(clicker);
  clicker.appendChild(coin);

  return [clicker, coin];
//  console.log('(' + random_x + ', ' + random_y + ')');

}

var animateCoin = function(id){
  current_score++;
  var button = document.getElementById(id);
  var score = document.getElementById("Score")
  var coin = button.getElementsByClassName('Coin')[0];
  var width = absolute_width;
  var height = absolute_height;
  var transparency = 0;

  score.innerHTML = current_score.toString();
  var change_attribute = function(){
    if (current_interval > max_intervals){
      console.log('Clearing.');
      clearInterval(interval)
      current_interval = 0
      document.body.removeChild(button)
    }
    coin.setAttribute('width', width);
    coin.setAttribute('height', height);
    coin.style.opacity = (1 - transparency).toString();
    console.log(transparency)
    width++;
    height++;
    current_interval++;
    transparency += 1/max_intervals;
  }

  var interval = setInterval(change_attribute, 10)
}

for (var i = 0; i < amount_of_coins; i++){
  var elements = generateCoin();
  var button = elements[0];
  var coin = elements[1];
  button.setAttribute('coin', i);
  button.style.outline = 'none';
  button.style['background-color'] = 'Transparent';
  coin.style.outline = 'none';
  button.setAttribute('id', i);
  button.style.position = 'relative';
  button.style['border-width'] = '0px';
  coin.setAttribute('id', i);
}

var timer = function(){
  current_time--;
  var body = document.getElementById('body');
  timer_element.innerHTML = current_time.toString();
  if (current_time <= 0){
    clearInterval(timer_intervals)
    document.body.innerHTML = '';
    document.head.innerHTML = '';
    var title = document.createElement("TITLE");

    title.innerHTML = 'Game Ended!';

    document.head.appendChild(title);

    var h1 = document.createElement('H1');

    h1.innerHTML = 'Time has run out!!!';
    h1.style['text-align'] = 'center';
    h1.style.color = 'green';

    var hr = document.createElement('HR')

    var h2 = document.createElement('H2');

    h2.innerHTML = 'COINS: ' + current_score;
    h2.style.top = '300px';
    h2.style['text-align'] = 'center';
    h2.style.color = 'blue';

    var play_again = document.createElement('BUTTON');


    play_again.setAttribute('type', 'button');
    play_again.setAttribute('onclick', 'location.reload()');
    play_again.setAttribute('style', 'text-align:center')
    play_again.style.top = '500px';
    play_again.style.left = '500px';
    play_again.innerHTML = 'Play Again';


    document.body.appendChild(h1);
    document.body.appendChild(hr);
    document.body.appendChild(h2);
    document.body.appendChild(play_again);
  }
}

var timer_intervals = setInterval(timer, 1000)
