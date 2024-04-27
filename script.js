var closenav=document.getElementById("closeoffer")
var offerbar=document.getElementById("offerbar")
console.log(offerbar)
closenav.addEventListener("click",function(){
offerbar.style.display="none"
})
var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav1=document.getElementById("closenav1")
menuicon.addEventListener("click",function(){
    sidenav.style.left=0
})
closenav1.addEventListener("click",function(){
    sidenav.style.left="-50%"
})
const container = document.querySelector(".imageContainer")
let rightBtn = document.getElementById("rightArrow")
let leftBtn = document.getElementById("leftArrow")

let image1 = document.getElementById("imgOne")
let image2 = document.getElementById("imagetwo")




rightBtn.addEventListener("click",function(){
   

    image1.style.marginLeft = "-1130px"
    image1.style.transition = "1s"
   
})
leftBtn.addEventListener("click",function(){
    console.log("left")
    image1.style.marginLeft="0px"

})