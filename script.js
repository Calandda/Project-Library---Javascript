const myLibrary = [];
const dialog = document.querySelector('dialog');
const openDialogButton = document.querySelector('.openButton');
const buttonSubmit = document.querySelector('.buttonSubmit');
const formInput = document.querySelector('.formInput');

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
	var table = document.querySelector('.bookTable');
	for(let i = 0; i < myLibrary.length; i++){
		var tableInner = document.createElement('table');
		var j = 0;
		for(let [key,value] of Object.entries(myLibrary[i])){
			var rowInner = tableInner.insertRow(j);
			var cellInner1 = rowInner.insertCell(0);
			var cellInner2 = rowInner.insertCell(1);
			cellInner1.innerHTML = key;
			cellInner2.innerHTML = value;
			j++;
		};
		tableInner.classList.add('tableInner');
		table.appendChild(tableInner);
	}
	console.log(myLibrary);
}

document.addEventListener('DOMContentLoaded', function(){
	const book1 = new Book('testTitle','testAuthor','100','No');
	const book2 = new Book('testTitle2','testAuthor2','200','Yes');
	const book3 = new Book('testTitle3','testAuthor3','300','Yes');
	addBookToLibrary(book1);
	addBookToLibrary(book2);
	addBookToLibrary(book3);
	outputDisplay();
},false);

openDialogButton.addEventListener("click", ()=>{
	dialog.showModal();
},false);

buttonSubmit.addEventListener('click',function(){
	const formData = new FormData(formInput);
	const bookNew = new Book(formData.get('title'),formData.get('author'),formData.get('page'),formData.get('read'));
	addBookToLibrary(bookNew);
	outputDisplay();
	dialog.close();
},false);