let hrs=document.getElementById("hrs");
let min=document.getElementById("min")
let sec=document.getElementById("sec");

function notify(){

    if(sec.innerHTML=="59")
    {
    const music=new Audio();
    music.src="notification.mp3";
    music.type="audio/mpeg";
    music.addEventListener("canplaythrough",()=>{
        music.play();
    
    })
   
   
  
}
}

setInterval(()=>{


let currTime=new Date();

hrs.innerHTML=(currTime.getHours()<10 ? "0":"")+currTime.getHours();
hrs.style.color="red";
min.innerHTML=(currTime.getMinutes()<10 ? "0":"")+currTime.getMinutes();

min.style.color="rgba(230,0,140,6)";
sec.innerHTML=(currTime.getSeconds()<10 ? "0":"")+currTime.getSeconds();


notify();

},1000);



