var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deletebtn = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");

for (var i = 0; i < deletebtn.length; i++){
	deletebtn[i].addEventListener("click",removeParent,false);
}

function removeParent(evt){
	evt.target.removeEventListener("click",removeParent,false);
	evt.target.parentNode.remove();
}

function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}

ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}

function inputLength(){
	return input.value.length;
}

function createlistElement(){
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);
	ul.appendChild(li);
	//ul.appendChild(document.createElement("br"));
	input.value = "";
}

function addToListAfterClick(){
	if(inputLength()>0){
		createlistElement();
	}
}

function addTolistAfterKeypress(event){
	if(inputLength()>0 && event.keyCode === 13){
		createlistElement();
	}
}

button.addEventListener("click",addToListAfterClick);
input.addEventListener("keypress",addTolistAfterKeypress);
