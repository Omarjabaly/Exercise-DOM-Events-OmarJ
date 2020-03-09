var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
ul.id = "itemList";
var item = document.getElementsByClassName("item");
var deleteButton = document.getElementsByClassName("deleteListButton");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var product = document.createElement("i");
	product.className = "item";
	var delBtn = document.createElement("button");
	delBtn.className = "deleteListButton";
	product.appendChild(document.createTextNode(input.value + "  "));
	delBtn.appendChild(document.createTextNode("Delete"));
	li.appendChild(product);
	li.appendChild(delBtn);
	ul.appendChild(li);
	input.value = "";
	createListerners();
	
}

function createListerners() {
	item[itemLength()-1].addEventListener("click", toggle);
	deleteButton[itemLength()-1].addEventListener("click", removeListElement);
}
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function itemLength() {
	return item.length;
}

function toggle(e) {
		var i = [].indexOf.call(item, e.target);
		item[i].classList.toggle("done");
}

function removeListElement(e) {
	var i = [].indexOf.call(deleteButton, e.target);
	ul.removeChild(ul.childNodes[i]);
}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

