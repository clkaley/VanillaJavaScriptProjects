/*
Select modal-button modal-overlay and close-btn
*/ 

const modalBTN=document.querySelector(".btn-modal");
const modal=document.querySelector(".modal-overlay");
const closeBTN=document.querySelector(".close-btn");



window.addEventListener('DOMContentLoaded',function(){
    console.log("shake and bake");
})


//open modal btn bastığımızda textin açılması 
modalBTN.addEventListener("click",function(){
    modal.classList.add("open-modal");
})


//close btn tıkladığımızda açılan textin kapanması
closeBTN.addEventListener("click",function(){
    modal.classList.remove("open-modal");
})