const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.body.addEventListener('keydown', function(event){
     
   if(event.keyCode == 32)jump(); 
});



function jump (){
    if (dino.classList!="jump"){
       dino.classList.add("jump")
    }
    setTimeout(function(){
        dino.classList.remove("jump")
    },4 000)
}

let isAlive = setInterval((e)=>{
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactusLeft < 100 && cactusLeft > 0 && dinoTop >= 140){
        alert("GAME OVER")
    }

},100)


