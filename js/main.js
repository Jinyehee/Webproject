const mySwiper = new Swiper(".swiper-container", {
   direction: "horizontal",
   loop: true,
   autoplay: {
      delay: 10000,
   },
   speed: 500,
   slidesPerView: 1,
   effect: "slide",
   pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
   },
});

document.addEventListener("DOMContentLoaded", function () {
   const book1 = document.querySelector(".book01");
   const book2 = document.querySelector(".book02");
   const book3 = document.querySelector(".book03");
   const book4 = document.querySelector(".book04");

   const topBook1 = document.querySelector(".top_book01");
   const topBook2 = document.querySelector(".top_book02");
   const topBook3 = document.querySelector(".top_book03");
   const topBook4 = document.querySelector(".top_book04");

   function hideTopBooks() {
      topBook1.style.display = "none";
      topBook2.style.display = "none";
      topBook3.style.display = "none";
      topBook4.style.display = "none";
   }

   book1.addEventListener("click", function () {
      hideTopBooks();
      topBook1.style.display = "flex";
   });

   book2.addEventListener("click", function () {
      hideTopBooks();
      topBook2.style.display = "flex";
   });

   book3.addEventListener("click", function () {
      hideTopBooks();
      topBook3.style.display = "flex";
   });

   book4.addEventListener("click", function () {
      hideTopBooks();
      topBook4.style.display = "flex";
   });
});
