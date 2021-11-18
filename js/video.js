var video = document.querySelector('#player1');
var volume = document.querySelector('#volume').innerHTML;
var slider = document.querySelector('#slider');

// console.log(slider);

// Load video
window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

// Play Video Function
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById("volume").innerHTML = (video.volume * 100 + "%");
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
	document.getElementById("mute").innerHTML = "Mute"
	}
	else {
		video.muted = true;
		console.log("Video Muted")
		document.getElementById("mute").innerHTML = "Unmute"
	}
});

// Decrease Video Speed Function
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate - 0.05;
	console.log("New Speed " + video.playbackRate);
});

// Increase Video Speed Function
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate + 0.05;
	console.log("New Speed " + video.playbackRate);
});

// Skip Video
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = video.currentTime + 15;
	if (video.ended) {
		video.currentTime = 0;
		video.play();
		// playbackRate = 1;
	// document.getElementById('video').addEventListener('ended', function() {
	// 	video.load();
	// 	video.play();
	 }
	console.log("Current Location is " + video.currentTime);
});

// document.querySelector("#slider").addEventListener("change", function() {
// 	console.log(slider.value);
// 	var slider_value = document.querySelector('#volume').innerHTML; 
// 	slider_value = slider.value;
// 	video.volume = slider_value / 100;
// 	document.querySelector('#volume').innerHTML = slider_value + '%';
// });

slider.addEventListener('change', function(e){
	video.slider = e.currentTarget.value / 100;
	document.querySelector('#volume').innerHTML = video.slider*100 + '%'
	console.log(video.slider)
	
});


// Style change
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool");
});