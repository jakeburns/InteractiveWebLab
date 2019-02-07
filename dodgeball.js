var player_real = {
  pos: 0
}

var moveUp = function(){
  var player = document.getElementById('player');
  player_real.pos += 200
  player.style.top = player_real.pos
}
