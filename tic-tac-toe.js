// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
alert("Are you sure?")
var canvas=.getElementById("game-board")
currentShape="circle"
function box1() {
  if(currentShape=="circle"){
var circle=document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 50)
circle.setAttribute("cy", 100)
circle.setAttribute("r", 45)
circle.setAttribute("fill","white")
canvas.appendChild("circle") }
}
