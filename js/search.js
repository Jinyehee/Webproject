let books = [];
let page = 1;

function searchClick() {
   page = 1;
   bookList();
}

function nextClick() {
   page++;
   const li = document.createElement("li");
   li.innerHTML = ``;
   bookList();
}

function beforeClick() {
   if (page > 1) {
      const li = document.createElement("li");
      li.innerHTML = ``;
      page--;
      bookList();
   }
}

async function bookList() {
   books = [];
   const searchInput = document.querySelector(".search_input").value;
   const size = 5; // 한 페이지당 최대 5개의 책

   try {
      const response = await fetch(
         `https://dapi.kakao.com/v3/search/book?target=title&query=${encodeURIComponent(
            searchInput
         )}&page=${page}&size=${size}`,
         {
            method: "GET",
            headers: {
               Authorization: "KakaoAK c5382120f4ae64f8bc7759260c1d638a",
            },
         }
      );
      const data = await response.json();

      if (data.documents.length === 0) {
         alert("검색된 책이 없습니다.");
         return;
      }

      data.documents.forEach((item) => {
         const bookdata = {
            title: item.title,
            author: item.authors.join(", "),
            publisher: item.publisher,
            price: item.price,
            translators: item.translators
               ? item.translators.join(", ")
               : "없음",
            thumbnail: item.thumbnail,
            isbn: item.isbn.split(" "),
         };
         books.push(bookdata); // books 배열에 책 정보 추가
      });
      console.log(books);
      const bookListElement = document.getElementById("bookList");
      bookListElement.innerHTML = ""; // 기존 목록 초기화

      books.forEach((book) => {
         const li = document.createElement("li");
         li.innerHTML = `
            <a href="https://www.yes24.com/product/search?query=${
               book.isbn[1]
            }">
                <img src="${book.thumbnail}" alt="${book.title}" />
                <div class="search_content">
                    <p>제목 : ${book.title}</p>
                    <p>출판사 : ${book.publisher}</p>
                    <p>저자 : ${book.author}</p>
                    ${
                       book.translators
                          ? `<p>역식자 : ${book.translators}</p>`
                          : ""
                    }
                    <p>가격 : ${book.price}</p>
                </div>
            </a>
               `;
         bookListElement.appendChild(li); // 책 항목을 ul에 추가
      });
   } catch (error) {
      alert("불러오는 것을 실패하였습니다...");
      console.log(error);
   }
}
