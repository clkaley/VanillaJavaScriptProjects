//set initial count (başlangıç sayısını ayarlama)

let count=0;

//select value and buttons (butonları ve değerleri seç)

const btns=document.querySelectorAll('.btn');
const value=document.getElementById('value');


btns.forEach(function(item){
  item.addEventListener('click',function(e){
     // console.log(e.currentTarget);
    const style=e.currentTarget.classList;
    
    if(style.contains('decrease')){
        count--;
    }

    else if(style.contains('increase')){
        count++;
    }
    else {
        count=0;
    }

    if(count>0){
        value.style.color='green';
    }

    if(count<0){
        value.style.color="red";
    }

    value.textContent=count;


  })
   });




