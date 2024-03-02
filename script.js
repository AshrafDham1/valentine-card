const btn1 = document.getElementById("yesBtn");
const btn2 = document.getElementById("noBtn");
var outside= document.getElementById("section1")

btn2.addEventListener("mouseover", changePosition);
function changePosition() {
    const x = Math.floor(Math.random() * 700) + 1;
    const y = Math.floor(Math.random() * 300) + 1;
    btn2.style.left = x + "px";
    btn2.style.top = y + "px";
}


btn1.addEventListener("mouseover", changePage);
function changePage(){
    outside.className="changePage"
}


const triangle2=document.getElementById("triangle2")
triangle2.addEventListener("mouseover",pageScaleUp)
var page =document.getElementById("page")
function pageScaleUp(){
     page.className="translateY"
     
}

triangle2.addEventListener("mouseout",pageScaleDown)
function pageScaleDown(){
    page.className="retranslateY"
}

const Page=document.getElementById("letter")
Page.addEventListener("mouseover",pageScaleUp)
var page =document.getElementById("letter")

function pageScaleUp(){
     page.className="translateY"
     
}



