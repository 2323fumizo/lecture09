var player = document.querySelector("audio");
player.addEventListener("play", hello);
player.addEventListener("pause", goodbye);



function hello(event){
  console.log("hello");
  console.log(event);
}

function goodbye(event){
  console.log("good bye");
}

var playButton = document.querySelector("#playButton");
playButton.addEventListener("click", playMusic);

function playMusic(event){
   player.play();
 }

var pauseButton = document.querySelector("#pauseButton");
pauseButton.addEventListener("click", pauseMusic);

function pauseMusic(event){
   player.pause();
}

var skipButton = document.querySelector("#skipButton");
skipButton.addEventListener("click", skip10sec);

function skip10sec(event){
   player.currentTime = player.currentTime + 10;
}

var backButton = document.querySelector("#backButton");
backButton.addEventListener("click", back10sec);

function back10sec(event){
  player.currentTime = player.currentTime - 10;
}

var volumeControl = document.querySelector("volumeControl");
volumeControl.addEventListener("change", volumeControl);

function volumeControl(event){
  player.volume = volumeControl.value;
}
