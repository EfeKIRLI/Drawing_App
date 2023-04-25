const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('incerease');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');
const ctx = canvas.getContext('2d');

let size = 20 ; 
let color = 'black'
// let x = 50;
// let y = 50;
let isPressed = false;

canvas.addEventListener("mousedown",()=>{
    isPressed = true;
    
});
canvas.addEventListener("mouseup",()=>{
    isPressed = false;
   
});

canvas.addEventListener("mousemove",(e)=>{
    if(isPressed=true){
        const x = e.offsetX;
        const y = e.offsetY

            drawCircle(x,y)
    }
    
});


function drawCircle(x,y){

    ctx.beginPath();  
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color;
    ctx.fill(); // ctx.strok() empty circle
}

increaseBtn.addEventListener('click',()=>{
    size +=5;
    if(size > 50){
        size = 50 
    }
    updateSizeOnScreen()
});
decreaseBtn.addEventListener('click',()=>{
        size -=5;
        if(size < 5 ){
            size = 5 
        }
        updateSizeOnScreen()
});

colorEl.addEventListener('change',(e)=>{
    color = e.target.value  
});

clearEl.addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height) //clear
});

function updateSizeOnScreen(){
       sizeEl.innerHTML = size
}

// drawCircle(50,50)

// function draw(){
//     ctx.clearRect(0,0,canvas.width,canvas.height)
//     drawCircle(x,y)
//     requestAnimationFrame(draw)
// }

// draw()






