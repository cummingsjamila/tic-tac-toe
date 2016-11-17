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
circle.setAttribute("stroke", "black")
circle.setAttribute("stroke-width", 8)
canvas.appendChild(circle)
currentShape="circle" }
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
  currentShape="rect"}
}
function shapes2() {
  if(currentShape=="rect"){
var circle=document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 420)
circle.setAttribute("cy", 110)
circle.setAttribute("r", 65)
circle.setAttribute("fill","white")
circle.setAttribute("stroke", "black")
circle.setAttribute("stroke-width", 8)
canvas.appendChild(circle)
currentShape="circle" }
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
  currentShape="rect"}
}

function shapes3() {
  if(currentShape=="rect"){
var circle=document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 620)
circle.setAttribute("cy", 110)
circle.setAttribute("r", 65)
circle.setAttribute("fill","white")
circle.setAttribute("stroke", "black")
circle.setAttribute("stroke-width", 8)
canvas.appendChild(circle)
currentShape="circle" }
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
  currentShape="rect"}
}

function shapes4(){
if(currentShape=="rect"){
var circle=document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 140)
circle.setAttribute("cy", 330)
circle.setAttribute("r", 65)
circle.setAttribute("fill","white")
circle.setAttribute("stroke", "black")
circle.setAttribute("stroke-width", 8)
canvas.appendChild(circle)
currentShape="circle" }
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
currentShape="rect"}
}

function shapes5(){
if(currentShape=="rect"){
var circle=document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 420)
circle.setAttribute("cy", 320)
circle.setAttribute("r", 65)
circle.setAttribute("fill","white")
circle.setAttribute("stroke", "black")
circle.setAttribute("stroke-width", 8)
canvas.appendChild(circle)
currentShape="circle" }
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
currentShape="rect"}
}
function shapes6(){
if(currentShape=="rect"){
var circle=document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 600)
circle.setAttribute("cy", 320)
circle.setAttribute("r", 65)
circle.setAttribute("fill","white")
circle.setAttribute("stroke", "black")
circle.setAttribute("stroke-width", 8)
canvas.appendChild(circle)
currentShape="circle" }
else{
  var rect=document.createElementNS(namespace,"rect")
  rect.setAttribute("x", 580)
  rect.setAttribute("y", 300)
  rect.setAttribute("width", 120)
  rect.setAttribute("height", 60)
  rect.setAttribute("fill", "white")
  rect.setAttribute("stroke", "black")
  rect.setAttribute("stroke-width", 8)
  canvas.appendChild(rect)
  currentShape="rect"}
}
function shapes7() {
if(currentShape=="rect"){
var circle=document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 150)
circle.setAttribute("cy", 610)
circle.setAttribute("r", 65)
circle.setAttribute("fill","white")
circle.setAttribute("stroke", "black")
circle.setAttribute("stroke-width", 8)
canvas.appendChild(circle)
currentShape="circle" }
else{
  var rect=document.createElementNS(namespace,"rect")
  rect.setAttribute("x", 50)
  rect.setAttribute("y", 600)
  rect.setAttribute("width", 120)
  rect.setAttribute("height", 60)
  rect.setAttribute("fill", "white")
  rect.setAttribute("stroke", "black")
  rect.setAttribute("stroke-width", 8)
  canvas.appendChild(rect)
  currentShape="rect"}
}
function shapes8 () {
if(currentShape=="rect"){
var circle=document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 150)
circle.setAttribute("cy", 610)
circle.setAttribute("r", 65)
circle.setAttribute("fill","white")
circle.setAttribute("stroke", "black")
circle.setAttribute("stroke-width", 8)
canvas.appendChild(circle)
currentShape="circle" }
else{
  var rect=document.createElementNS(namespace,"rect")
  rect.setAttribute("x", 150)
  rect.setAttribute("y", 100)
  rect.setAttribute("width", 120)
  rect.setAttribute("height", 60)
  rect.setAttribute("fill", "white")
  rect.setAttribute("stroke", "black")
  rect.setAttribute("stroke-width", 8)
  canvas.appendChild(rect)
  currentShape="rect"}
}
function shapes9() {
if(currentShape=="rect"){
var circle=document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 550)
circle.setAttribute("cy", 510)
circle.setAttribute("r", 65)
circle.setAttribute("fill","white")
circle.setAttribute("stroke", "black")
circle.setAttribute("stroke-width", 8)
canvas.appendChild(circle)
currentShape="circle" }
else{
  var rect=document.createElementNS(namespace,"rect")
  rect.setAttribute("x", 550)
  rect.setAttribute("y", 500)
  rect.setAttribute("width", 120)
  rect.setAttribute("height", 60)
  rect.setAttribute("fill", "white")
  rect.setAttribute("stroke", "black")
  rect.setAttribute("stroke-width", 8)
  canvas.appendChild(rect)
  currentShape="rect"}
}
