var video = document.querySelector('#player1');
var slider_value = document.querySelector('#volume').innerHTML;

// Load video
window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

// Play Video Function
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

// Pause Video Function
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Mute Video Function
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
	video.muted = false;
	console.log("Video Unmuted");
	}
	else {
		video.muted = true;
		console.log("Video Muted")
	}
});

// Decrease Video Speed Function
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate - 0.05;
	console.log("Current Speed is " + video.playbackRate);
});

// Increase Video Speed Function
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate + 0.05;
	console.log("Current Speed is " + video.playbackRate + "%");
});

// Skip Video
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = video.currentTime + 15;
	if (video.ended) {
		video.load();
		video.play();
		playbackRate = 1;
	}
	console.log("Current Location is " + video.currentTime);
});

// document.querySelector("#slider").addEventListener("slidestop", function() {
// 	console.log(slider_value.value);
// 	slider_value = slider.value;
// 	video.volume = slider.value / 100;
// 	document.querySelector('#volume').innerHTML = slider_value + '%';
// });

// Style change
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool");
});