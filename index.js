//Initilaize the variables

let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay"); // that main button which play and pause the song;
let myProgressBar = document.getElementById("myProgressBar");   // that blue bar;
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));   // All songs item

let songs = [
  // array of objects
  {
    songName: "Warriyo - Mortals",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  { songName: "Choo loo", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
  {
    songName: " Ishaqzaade",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  { songName: "Choo loo", filePath: "songs/2.mp3", coverPath: "covers/4.jpg" },
  { songName: "Choo loo", filePath: "songs/2.mp3", coverPath: "covers/5.jpg" },
  { songName: "Choo loo", filePath: "songs/2.mp3", coverPath: "covers/6.jpg" },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;  // It will give images to songs;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;  // It will give song names
});

//Handel play/pause click


masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});


//Listen to events;
audioElement.addEventListener("timeupdate", () => {
  // Gaanna update hoga seekbar me
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;    // seekbar me kahi v click krne se waha se song start hoga
});

const makeAllPlay = () => {
  Array.from(document.getElementsByClassName("songItemPlay ")).forEach(     //Array.from method create array, suppose a string is given 'HELLO' to => {'H','E','L','L','O'} syntax is Array.from(ovject, function)

  // forEach is an array method functon  which gives value one by one  in which we have to pass a function, It will take one value at a time;
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};


Array.from(document.getElementsByClassName("songItemPlay ")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlay();

      songIndex = parseInt(e.target.id);            //parseInt convert string into integer
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);
// My change

// Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) =>{
//     element.addEventListener("click",(e) =>{
//         makeAllPlay();
        
//        if(audioElement.play || audioElement.currentTime > 0){
//         audioElement.pause();
//         e.target.classList.remove("fa-circle-pause");
//         e.target.classList.add("fa-circle-play");
//         masterPlay.classList.remove("fa-circle-pause");
//         masterPlay.classList.add("fa-circle-play");
//         gif.style.opacity = 0;
//        } 
       
//     })
// })

// next button

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 6) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

// previous button

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
