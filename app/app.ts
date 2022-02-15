import {ctx, canvas} from './canvas';
import {makeButton} from './controls';
//Buttons
let clearButton = makeButton('Clear');
clearButton.addEventListener(
  "click",
  function () {
    ctx.clearRect(
      0,0,canvas.width,canvas.height
    ) }
);
let penButton = makeButton('Pen')
penButton.addEventListener(
  "mousemove",
function(){
  ctx.fillStyle 
}
);
let triangleButton = makeButton('Triangle');
triangleButton.addEventListener(
  "click",
  function () {}
);
let squareButton = makeButton('Square');
squareButton.addEventListener(
  "click",
  function () {}
);

//functions or something
function drawPen(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 10, 20, Math.PI * 2);
  ctx.fill();
}
function drawTriangle (
  x:number,
  y:number,
){
  ctx.beginPath();
    ctx.moveTo(x,y)
    ctx.lineTo(x+40,y+60)
    ctx.lineTo(x+50,y+20)
    ctx.lineTo(x,y)
    ctx.stroke(); 
}
function drawSquare (
  x:number,
  y:number,
){
  ctx.beginPath();
  ctx.rect(x,y,40,40);
  ctx.stroke();
}
let drawFunction = drawTriangle;
//eventlisteners
canvas.addEventListener(
  "mousemove",
  function (event) {
    if (event.buttons === 1) {
      drawPen(event.offsetX, event.offsetY);
    }
  }
);
canvas.addEventListener(
  "click", 
  function (event){
    drawFunction(event.offsetX,event.offsetY);});

squareButton.addEventListener(
  "click",
  function(){
    drawFunction=drawSquare
  }
);
penButton.addEventListener(
  "mousemove",
  function(){
    drawFunction=drawPen
  }
)
triangleButton.addEventListener(
  "click",
  function() {
    drawFunction=drawTriangle
  }
); 


let colorInput = document.querySelector("#color-ex") 
let rangeInput = document.querySelector("#size-range") 
let color 

colorInput.addEventListener("change",function(event){
  color = event.target.value;
  ctx.strokeStyle = color; 
  ctx.fillStyle = color;
}); 
