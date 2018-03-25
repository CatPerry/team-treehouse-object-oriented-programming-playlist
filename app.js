var playlist = new Playlist();
var hereComesTheSun = new Song("Here Comes the Sun", "The Beatles", "2:54");
var walkingOnSunshine = new Song("Walking on Sunshine", "Katrina and the Waves", "3:43");

playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function() {
	playlist.play();
	playlist.renderInElement(playlistElement);
}
var nextButton = document.getElementById("next");
nextButton.onclick = function() {
	playlist.next();
	playlist.renderInElement(playlistElement);
}
var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
	playlist.stop();
	playlist.renderInElement(playlistElement);
}//refresh the ui after these because each of them alters the state of the player. TO to that, we call the renderInElement() on the playlist ot render it again, as shown by the following on each button onclick event listener: playlist.renderInElement(playlistElement);
 


