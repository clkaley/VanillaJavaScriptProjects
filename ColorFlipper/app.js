/*Renkleri içeren bir dizi oluşturduk */
const colors=["#BA135D","#C67ACE","rgba(133,122,200)","#9B3675"]

const btn=document.getElementById("btn");
const color=document.querySelector(".color");


btn.addEventListener("click",function(){
   /**  console.log(document.body);*/
   //get random number between 0-3 colors[0],colors[1] etc.
   const randomNumber=getRandomNumber();
   console.log(randomNumber);
   document.body.style.backgroundColor=colors[randomNumber];
   color.textContent=colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}