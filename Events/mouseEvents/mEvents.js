var sClick = document.querySelector("#btn");
sClick.addEventListener('click',()=>{
    document.getElementById("sclic").innerHTML = "This text was generated when single clicked"
})
var dbclick = document.querySelector("#dbclick");
dbclick.addEventListener('dblclick',()=>{
    document.getElementById("dbclic").innerHTML ="This text was generated when double clicked"
})
var mOver = document.querySelector("#mOvr");
mOver.addEventListener('mouseover',()=>{
    document.getElementById("mouseOver").innerHTML="This text was generated on mouseover"
})
var mDown = document.querySelector("#mDwn");debugger;
mDown.addEventListener('mouseup',()=>{
    document.getElementById("mouseDown").innerHTML = "This text was generated on mousedown"
})