// About page js :::::: right container
const aboutContainer = document.querySelector(".article");
const aboutBtns = document.querySelectorAll(".btn");
const contentAbout = document.querySelectorAll(".article__display-sec");

aboutContainer.addEventListener("click", (e) =>{

 const currentId = e.target.dataset.about;

 if(currentId){

  aboutBtns.forEach((btn) => {
   // removing active class for all btns and adding to current target btn
   btn.classList.remove("active");
   e.target.classList.add("active");


   // removing active class from all the articles
   contentAbout.forEach((content) => {
    content.classList.remove("active")
   });

   const currentMatchId = document.getElementById(currentId);
   currentMatchId.classList.add("active");

  });
 }

});