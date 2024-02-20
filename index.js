const modal = document.querySelector('#modal');
const addBookBtn = document.querySelector('#add-book');
const submit = document.querySelector('#submit');
const btnClose = document.getElementsByClassName("btn-close")[0];

//Show pop-up when add book button is pressed
addBookBtn.addEventListener('click', () => modal.style.display = "block");

//Submit button to push new book data to library
submit.addEventListener('click', addBooktoLibrary);

//Close pop-up when close button is clicked.
btnClose.addEventListener('click', () => modal.style.display = "none");

//Close pop-up when anywhere on the webpage outside of the pop-up box is clicked
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//Create book library array
let myLibrary = [];

// Book Object Constructor
function Book(title, author, pages, read) {

    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value;
    this.read = form.read.value;
}

//Add books to library when new book is submitted and render library
function addBooktoLibrary(book) {

    event.preventDefault(); //Prevent error from submitting to backend server
    modal.style.display = "none";
    let newBook =  new Book(title, author, pages, read);
    myLibrary.push(newBook);

    displayBooks();
    console.log(myLibrary);
    form.reset();

}

//Display the books in the library by iterating through the object array, clear the library everytime to avoid repeats
function displayBooks() {
    const display = document.getElementById('library-container');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));

    for (let x = 0; x < myLibrary.length; x++) {
        createBook(myLibrary[x]);
    }
}

//Helper function to display books
function createBook(book) {
    const library = document.querySelector('#library-container');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button');

    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(book));

    titleDiv.textContent = book.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authDiv.textContent = "Author: " + book.author;
    authDiv.classList.add('author');
    bookDiv.appendChild(authDiv);

    pageDiv.textContent = "Pages: " + book.pages;
    pageDiv.classList.add('pages');
    bookDiv.appendChild(pageDiv);

    readBtn.classList.add('readBtn');
    bookDiv.appendChild(readBtn);
    if (book.read == "Yes") {
        readBtn.textContent = "Read Status: Read"
    } else if (book.read == "No") {
        readBtn.textContent = "Read Status: Not Read"
    }

    removeBtn.textContent = 'Remove';
    removeBtn.setAttribute('id', removeBtn);
    bookDiv.appendChild(removeBtn);

    library.appendChild(bookDiv);

    readBtn.addEventListener('click', () => {
        if (book.read == "Yes"){
            book.read = "No";
        } else { 
            book.read = "Yes";
        }
        displayBooks();
    });

}


