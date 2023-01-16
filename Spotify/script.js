console.log("Welcome to Spotify");

//Initialize the Variables
let songIndex = 0;
let audioElement=new Audio('1.mp3');
let masterPlay= document.getElementById('masterPlay'); 
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songs=[
    {songName:"Salam-e-Ishq", filepath:"1.mp3", coverPath:"coverpage.jpg"},
    {songName:"Salam-e-Ishq", filepath:"1.mp3", coverPath:"coverpage.jpg"},
    {songName:"Salam-e-Ishq", filepath:"1.mp3", coverPath:"coverpage.jpg"},
    {songName:"Salam-e-Ishq", filepath:"1.mp3", coverPath:"coverpage.jpg"},
    {songName:"Salam-e-Ishq", filepath:"1.mp3", coverPath:"coverpage.jpg"},
    {songName:"Salam-e-Ishq", filepath:"1.mp3", coverPath:"coverpage.jpg"}
]

//audioElement.play()

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
    }
})
//listen to events
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
}) 