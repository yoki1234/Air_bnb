
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
// var lastScrolltop=0;
//     inscreen_footer= document.getElementsByClassName("ina");
//   window.addEventListener("scroll",()=>{let scrollTop = window.pageYOffset||Document
//     .documentElement.scrollTop;
//     if(scrollTop < lastScrolltop){
//       inscreen_footer.style.bottom="-114px";

//     }
//     else{
//       inscreen_footer.style.bottom="0";
//     }
//     lastScrolltop = scrollTop;
//   })
$(window).scroll(function() {
  if ($(this).scrollTop() > 0) {
      $('.ina').hide();
  } else {
      $('.ina').show();
  }
});