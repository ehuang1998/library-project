var modal = document.getElementById("modal");
var addBookBtn = document.getElementById("add-book");
var btnClose = document.getElementsByClassName("btn-close")[0];

addBookBtn.onclick = function() {
    modal.style.display = "block";
}

btnClose.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


let myLibrary = [];

// Book Object Constructor
function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;

    this.info = function() {
        return (title + " by " + author + ", " + pages + ", " + read); 
    }

}

function addBooktoLibrary(book) {

    this.myLibrary.push(book);

}

function displayBooks() {

}

// Object - the Hobbit
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295 , 'not read yet')

console.log(theHobbit.info());


