function Playlist() {
 this.songs = [];
 this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function(song) {
	this.songs.push(song); //each song is pushed into playlist array
};

Playlist.prototype.play = function() {
	var currentSong = this.songs[this.nowPlayingIndex]; //create variable of current song by setting it equal to this.songs array whose index is found at the this.nowPlayingIndex
	currentSong.play(); //uses the play method it's set within to stop the song.
};

Playlist.prototype.stop = function(){
	var currentSong = this.songs[this.nowPlayingIndex]; //create variable of current song by setting it equal to this.songs array whose index is found at the this.nowPlayingIndex
	currentSong.stop(); //uses the stop method it's set within to stop the song.
};

Playlist.prototype.next = function() {
	this.stop(); //stops the cureent song
	this.nowPlayingIndex++; //increments the nowPayingIndex by one
	//but what if the number of indexed items get larger than the number of items in the array? use this if statement to check.
	if(this.nowPlayingIndex === this.songs.length) {
		this.nowPlayingIndex = 0;
	} 

	this.play(); //plays the next song with the play method.
};

Playlist.prototype.renderInElement = function(list) {
	list.innerHTML = "";
	for(var i=0; i<this.songs.length; i++) {
		list.innerHTML += this.songs[i].toHTML();
	}
};