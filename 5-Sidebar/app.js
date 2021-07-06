const toggleBtn=document.querySelector(".sidebar-toggle");
const closeBtn=document.querySelector(".close-btn");
const sidebar=document.querySelector(".sidebar");


toggleBtn.addEventListener('click',function(){
    /*if else ile yapabilirdik ama uzatmadık */
    sidebar.classList.toggle("show-sidebar");
})


closeBtn.addEventListener('click',function(){
    sidebar.classList.remove("show-sidebar");
})

