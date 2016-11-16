// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var canvas=document.getElementById("game-board")
currentShape="circle"
function shapes() {
  if(currentShape=="rect"){
var circle=document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 150)
circle.setAttribute("cy", 110)
circle.setAttribute("r", 65)
circle.setAttribute("fill","white")
circle.setAttribute("stroke-color", "black")
canvas.appendChild(circle)
currentShape="circle" }
else{
  var rect=document.createElementNS(namespace,"rect")
  rect.setAttribute("x", 50)
  rect.setAttribute("y", 100)
  rect.setAttribute("width", 120)
  rect.setAttribute("height", 60)
  rect.setAttribute("fill", "white")
  rect.setAttribute("stroke-color", "black")
  rect.setAttribute("stroke-width", 8)
  canvas.appendChild(rect)
  currentShape="rect"

}
}
