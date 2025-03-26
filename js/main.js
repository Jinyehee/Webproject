// 헤더 스타일 변경
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
   if (window.scrollY > 0) {
      header.classList.add("on");
   } else {
      header.classList.remove("on");
   }
});

// 모바일 메뉴
const showMobile = document.querySelector(".show_mobile");
const mobileMenu = document.querySelector("#mobile_menu");
showMobile.addEventListener("click", function () {
   header.classList.toggle("on_click");

   if (mobileMenu.style.display === "block") {
      mobileMenu.style.display = "none";
   } else {
      mobileMenu.style.display = "block";
   }
});

const menuLinks = document.querySelectorAll("#mobile_menu a");

menuLinks.forEach((link) => {
   link.addEventListener("click", function () {
      mobileMenu.style.display = "none";
      header.classList.remove("on_click");
   });
});

// 슬라이드
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

// 트렌드 책 보이게하기
document.addEventListener("DOMContentLoaded", function () {
   const books = document.querySelectorAll(
      ".book01, .book02, .book03, .book04"
   );
   const topBooks = document.querySelectorAll(
      ".top_book01, .top_book02, .top_book03, .top_book04"
   );

   function showTopBook(index) {
      topBooks.forEach((topBook, i) => {
         topBook.style.display = i === index ? "flex" : "none";
      });
   }

   books.forEach((book, index) => {
      book.addEventListener("click", function () {
         showTopBook(index);
      });
   });
});

// 애니메이션
document.addEventListener("DOMContentLoaded", function () {
   const sections = document.querySelectorAll(
      ".main_section_content, .info_img, .info_content, .first_article, .second_article, .third_article, .four_article"
   );

   const observer = new IntersectionObserver(
      (entries, observer) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               entry.target.classList.add("visible");
               observer.unobserve(entry.target);
            }
         });
      },
      { threshold: 0.5 }
   );

   sections.forEach((section) => {
      observer.observe(section);
   });
});
