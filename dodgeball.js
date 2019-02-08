
window.addEventListener("keydown", checkKeyPressed);

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
   player.style.top =+ 600 + 'px';
}

var upPressed = function(){
   player.style.top =- 100 + 'px';

}
//window.onload = init;
