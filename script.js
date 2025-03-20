// library storage and book constructor.
const myLibrary = [];

// to make date readable. got from web.
const formattedDate = new Date(Date.now()).toISOString().slice(0, 19).replace("T", " ");
console.log(formattedDate);

function Book(title, author, pages, read,genre) {
    this.id=crypto.randomUUID();
    this.added= formattedDate;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.genre = genre;
}

// Opening and closing of book form.
const openAddBook = document.querySelector('#openAddBook');
const addBook = document.querySelector('#addBook');
const closeAddBook = document.querySelector('#closeAddBook');

openAddBook.addEventListener('click', ()=> addBook.showModal());
closeAddBook.addEventListener('click', ()=> addBook.close());

// To make books visible in display.

function displayBooks(){
  const bookList = document.getElementById("display");
  bookList.innerHTML = "";

  for(let book of myLibrary) {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("bookBlock");

    bookDiv.innerHTML = 
    `<p><strong>${book.title}</strong> by ${book.author}</p>
    <p>Pages: ${book.pages} | Genre: ${book.genre} | Read: ${book.read ? "Yes" : "No"}</p>`;
    bookList.appendChild(bookDiv);
  }
}

// To accept form data and add into Library.
document.getElementById("book-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.querySelector("input[name='title']").value;
  const author = document.querySelector("input[name='author']").value;
  const pages = document.querySelector("input[name='pages']").value;
  const read = document.querySelector("input[name='read']").checked; 
  const genre = document.querySelector("select[name='genre']").value;

  let newBook = new Book(title, author, pages, read, genre);
  myLibrary.push(newBook);

  console.log(myLibrary);
  displayBooks(); 
});


