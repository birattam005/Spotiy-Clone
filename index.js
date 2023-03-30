//Initilaize the variables

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    // array of objects
    {songName : "Choo loo", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName : "Choo loo", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName : "Choo loo", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName : "Choo loo", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName : "Choo loo", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName : "Choo loo", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
]
//Handel play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0 ){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
    }
})

//Listen to events;
myProgressBar.addEventListener('timeupdate', ()=>{

})

