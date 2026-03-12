
let playing=false;
const btn=document.getElementById("musicButton");

const audio=new Audio("assets/music.mp3");

btn.addEventListener("click",()=>{

if(!playing){
audio.play();
btn.innerText="🔇 Pausar música";
playing=true;
}else{
audio.pause();
btn.innerText="🎵 Música do casal";
playing=false;
}

});
