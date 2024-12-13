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
	var table = document.querySelector('.bookTable');
	for(let i = 0; i < myLibrary.length; i++){
		var tableInner = document.createElement('table');
		//var row = table.insertRow(i);
		//var cellInner1 = row.insertCell(0);
		//var rowInner = tableInner.insertRow(0);
		//var cell1 = rowInner.insertCell(0);
		//cellInner1.innerHTML = myLibrary[i]['title'];
		var j = 0;
		for(let [key,value] of Object.entries(myLibrary[i])){
			var rowInner = tableInner.insertRow(j);
			var cellInner1 = rowInner.insertCell(0);
			var cellInner2 = rowInner.insertCell(1);
			cellInner1.innerHTML = key;
			cellInner2.innerHTML = value;
			j++;
		};
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