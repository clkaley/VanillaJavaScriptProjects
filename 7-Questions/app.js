//btns
const btns=document.querySelectorAll(".question-btn")

btns.forEach(function(btn){
    //console.log(e); 
    btn.addEventListener("click" ,function(e){
        //console.log(e.currentTarget.parentElement.parentElement.parentElement);
        const question=e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text')    })
})