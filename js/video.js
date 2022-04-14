var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.querySelector("#slower").addEventListener("click", function(){
	console.log("I want to slow the video");
	video.playbackRate *=0.95;
	console.log("Speed is", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speeding up");
	video.playbackRate /=0.95;
	console.log("Speed is", video.playbackRate);
});

document.querySelector("#skip"). addEventListener("click", function(){
	console.log("skipping ahead");
	video.currentTime +=15;
	if (video.currentTime >= video.duration){
		video.currentTime = 0
	}
	console.log("video current time is", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === true) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}

	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
})

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML=video.volume * 100 +"%";
})

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});