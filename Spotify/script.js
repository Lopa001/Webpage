console.log("Welcome to Spotify");

//Initialize the Variables
let songIndex = 0;
let audioElement=new Audio('1.mp3');
let masterPlay= document.getElementById('masterPlay'); 
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Salam-e-Ishq", filepath:"1.mp3", coverPath:"coverpage.jpg"},
    {songName:"Mana-meri-jaan", filepath:"2.mp3", coverPath:"coverpage.jpg"},
    {songName:"Jhoome-Jo-Pathan", filepath:"3.mp3", coverPath:"coverpage.jpg"},
    {songName:"Besharam-Rang", filepath:"4.mp3", coverPath:"coverpage.jpg"},
    {songName:"Moon-Rise", filepath:"5.mp3", coverPath:"coverpage.jpg"},
    {songName:"Munda-sohan-hoon-main", filepath:"6.mp3", coverPath:"coverpage.jpg"}
]
songItems.forEach((element,i)=>{
    
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//audioElement.play()

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
//update Seekbar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src="songs/${index+1}.mp3";
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        

    } )
})
