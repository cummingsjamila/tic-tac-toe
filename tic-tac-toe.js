// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
function reset()
{location.reload();
}
var namespace = "http://www.w3.org/2000/svg"
var canvas=document.getElementById("game-board")
var buttonClicked1=8
currentShape="circle"
function shapes() {
  if(buttonClicked1 == 8){
  if(currentShape=="rect"){
var circle=document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 150)
circle.setAttribute("cy", 110)
circle.setAttribute("r", 65)
circle.setAttribute("fill","white")
circle.setAttribute("stroke", "black")
circle.setAttribute("stroke-width", 8)
canvas.appendChild(circle)
currentShape="circle"
buttonClicked1=9 }
else{
  var rect=document.createElementNS(namespace,"rect")
  rect.setAttribute("x", 50)
  rect.setAttribute("y", 100)
  rect.setAttribute("width", 120)
  rect.setAttribute("height", 60)
  rect.setAttribute("fill", "white")
  rect.setAttribute("stroke", "black")
  rect.setAttribute("stroke-width", 8)
  canvas.appendChild(rect)
  currentShape="rect"
  buttonClicked1=9
  }
}
}
var buttonClicked2=8
function shapes2() {
  if(buttonClicked2== 8){
  if(currentShape=="rect"){
var circle=document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 420)
circle.setAttribute("cy", 110)
circle.setAttribute("r", 65)
circle.setAttribute("fill","white")
circle.setAttribute("stroke", "black")
circle.setAttribute("stroke-width", 8)
canvas.appendChild(circle)
currentShape="circle"
buttonClicked2=9 }
else{
  var rect=document.createElementNS(namespace,"rect")
  rect.setAttribute("x", 350)
  rect.setAttribute("y", 100)
  rect.setAttribute("width", 120)
  rect.setAttribute("height", 60)
  rect.setAttribute("fill", "white")
  rect.setAttribute("stroke", "black")
  rect.setAttribute("stroke-width", 8)
  canvas.appendChild(rect)
  currentShape="rect"
buttonclicked2=9}
}
}
var buttonClicked3=8
function shapes3() {
  if(buttonClicked3== 8){
  if(currentShape=="rect"){
var circle=document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 620)
circle.setAttribute("cy", 110)
circle.setAttribute("r", 65)
circle.setAttribute("fill","white")
circle.setAttribute("stroke", "black")
circle.setAttribute("stroke-width", 8)
canvas.appendChild(circle)
currentShape="circle"
buttonClicked3=9  }
else{
  var rect=document.createElementNS(namespace,"rect")
  rect.setAttribute("x", 580)
  rect.setAttribute("y", 60)
  rect.setAttribute("width", 120)
  rect.setAttribute("height", 130)
  rect.setAttribute("fill", "white")
  rect.setAttribute("stroke", "black")
  rect.setAttribute("stroke-width", 8)
  canvas.appendChild(rect)
  currentShape="rect"
buttonClicked3=9}
}
}
var buttonClicked4=8
function shapes4(){
  if(buttonClicked4== 8){
if(currentShape=="rect"){
var circle=document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 140)
circle.setAttribute("cy", 330)
circle.setAttribute("r", 65)
circle.setAttribute("fill","white")
circle.setAttribute("stroke", "black")
circle.setAttribute("stroke-width", 8)
canvas.appendChild(circle)
currentShape="circle"
buttonClicked4=9  }
else{
var rect=document.createElementNS(namespace,"rect")
rect.setAttribute("x", 50)
rect.setAttribute("y", 300)
rect.setAttribute("width", 120)
rect.setAttribute("height", 130)
rect.setAttribute("fill", "white")
rect.setAttribute("stroke", "black")
rect.setAttribute("stroke-width", 8)
canvas.appendChild(rect)
currentShape="rect"
buttonClicked4=9}
}
}
var buttonClicked5=8
function shapes5(){
  if(buttonClicked5== 8){
if(currentShape=="rect"){
var circle=document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 420)
circle.setAttribute("cy", 320)
circle.setAttribute("r", 65)
circle.setAttribute("fill","white")
circle.setAttribute("stroke", "black")
circle.setAttribute("stroke-width", 8)
canvas.appendChild(circle)
currentShape="circle"
buttonClicked5=9  }
else{
var rect=document.createElementNS(namespace,"rect")
rect.setAttribute("x", 390)
rect.setAttribute("y", 300)
rect.setAttribute("width", 120)
rect.setAttribute("height", 130)
rect.setAttribute("fill", "white")
rect.setAttribute("stroke", "black")
rect.setAttribute("stroke-width", 8)
canvas.appendChild(rect)
currentShape="rect"
buttonClicked5=9}
}
}
var buttonClicked6=8
function shapes6(){
  if(buttonClicked6== 8){
if(currentShape=="rect"){
var circle=document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 610)
circle.setAttribute("cy", 330)
circle.setAttribute("r", 65)
circle.setAttribute("fill","white")
circle.setAttribute("stroke", "black")
circle.setAttribute("stroke-width", 8)
canvas.appendChild(circle)
currentShape="circle"
buttonClicked6=9  }
else{
  var rect=document.createElementNS(namespace,"rect")
  rect.setAttribute("x", 580)
  rect.setAttribute("y", 300)
  rect.setAttribute("width", 120)
  rect.setAttribute("height", 130)
  rect.setAttribute("fill", "white")
  rect.setAttribute("stroke", "black")
  rect.setAttribute("stroke-width", 8)
  canvas.appendChild(rect)
  currentShape="rect"
buttonClicked6=9}
}
}
var buttonClicked7=8
function shapes7() {
  if(buttonClicked7== 8){
if(currentShape=="rect"){
var circle=document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 150)
circle.setAttribute("cy", 610)
circle.setAttribute("r", 65)
circle.setAttribute("fill","white")
circle.setAttribute("stroke", "black")
circle.setAttribute("stroke-width", 8)
canvas.appendChild(circle)
currentShape="circle"
buttonClicked7=9 }
else{
  var rect=document.createElementNS(namespace,"rect")
  rect.setAttribute("x", 150)
  rect.setAttribute("y", 600)
  rect.setAttribute("width", 120)
  rect.setAttribute("height", 60)
  rect.setAttribute("fill", "white")
  rect.setAttribute("stroke", "black")
  rect.setAttribute("stroke-width", 8)
  canvas.appendChild(rect)
  currentShape="rect"
buttonClicked7=9}
}
}
var buttonClicked8=8
function shapes8 () {
  if(buttonClicked8==8){
if(currentShape=="rect"){
var circle=document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 450)
circle.setAttribute("cy", 590)
circle.setAttribute("r", 65)
circle.setAttribute("fill","white")
circle.setAttribute("stroke", "black")
circle.setAttribute("stroke-width", 8)
canvas.appendChild(circle)
currentShape="circle"
buttonClicked8=9  }
else{
  var rect=document.createElementNS(namespace,"rect")
  rect.setAttribute("x", 290)
  rect.setAttribute("y", 530)
  rect.setAttribute("width", 140)
  rect.setAttribute("height", 60)
  rect.setAttribute("fill", "white")
  rect.setAttribute("stroke", "black")
  rect.setAttribute("stroke-width", 8)
  canvas.appendChild(rect)
  currentShape="rect"}
}
}
var buttonClicked9=8
function shapes9() {
  if (buttonClicked9 == 8){
if(currentShape=="rect"){
var circle=document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 610)
circle.setAttribute("cy", 540)
circle.setAttribute("r", 65)
circle.setAttribute("fill","white")
circle.setAttribute("stroke", "black")
circle.setAttribute("stroke-width", 8)
canvas.appendChild(circle)
currentShape="circle"
buttonClicked9=9 }
else{
  var rect=document.createElementNS(namespace,"rect")
  rect.setAttribute("x", 560)
  rect.setAttribute("y", 530)
  rect.setAttribute("width", 120)
  rect.setAttribute("height", 60)
  rect.setAttribute("fill", "white")
  rect.setAttribute("stroke", "black")
  rect.setAttribute("stroke-width", 8)
  canvas.appendChild(rect)
  currentShape="rect"
buttonClicked9=9}
}
}
