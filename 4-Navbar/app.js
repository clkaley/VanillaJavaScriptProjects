const navToggle=document.querySelector(".nav-toggle");
const link=document.querySelector(".links");


navToggle.addEventListener('click',function(){
   /* console.log(link.classList);*/
   /*console.log(link.classList.contains("random")); burası içerikte random class ı var mı diye kontrol eder*/


   /* if(link.classList.contains('show-links')){
        link.classList.remove('show-links')
    }
    else{
        link.classList.add('show-links');
    }*/
    /*if else yapısının tek satır kod hali :)*/ 
    link.classList.toggle('show-links')

})