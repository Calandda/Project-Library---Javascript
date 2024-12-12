const myLibrary = [];

function Book(title, author, pages, read){
	this.title = title;
	this.author = author;
	this.page = pages;
	this.read = read;
}

function addBookToLibrary(book){
	myLibrary.push(book);
}

function outputDisplay(){

}

document.addEventListener('DOMContentLoaded', function(){
	const book1 = new Book('testTitle','testAuthor','100','No');
	addBookToLibrary(book1);
},false);