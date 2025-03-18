const myLibrary = [];

function Book(title, author, pages, read) {
    this.id=crypto.randomUUIDC();
    this.added= Date.now();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const openAddBook = document.querySelector('#openAddBook');
const addBook = document.querySelector('#addBook');
const closeAddBook = document.querySelector('#closeAddBook');

openAddBook.addEventListener('click', ()=> addBook.showModal());
closeAddBook.addEventListener('click', ()=> addBook.close());

