console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();

	alert("Form submitted successfully");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


//Image mouseover alert
const pic = document.querySelector("img");

function duck(evt) {
	//evt.preventDefault();
  alert("You are so brave!");
}

pic.addEventListener('mouseover', duck);

