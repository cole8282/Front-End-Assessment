//buttons
const colorButton = document.querySelector("#color");
const placeButton = document.querySelector("#place");
const ritualButton = document.querySelector("#ritual");
const wholeBody = document.querySelector('#profile-body');

function favColor(e) {
  alert("My favorite color is Purple.");

  wholeBody.style.backgroundColor = "purple";

  /*setTimeout(function () {
    message.className = "hide"
  }, 1000)
  */

}

function favPlace(e) {
  alert("My favorite place is Kayenta.");

  wholeBody.style.backgroundImage = "url('https://media.istockphoto.com/vectors/beautiful-desert-sunset-vector-id1262849250?k=20&m=1262849250&s=612x612&w=0&h=LKUFkzxnw1gF08IcefjBklN-Xb0X5BfINmC3xPyL97A=')";

  /*setTimeout(function () {
    message.className = "hide"
  }, 1000)
  */
}

function favRitual(e) {
  alert("My favorite ritual is Listening to an Audiobook before bed.");

  wholeBody.style.backgroundImage = "url('https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg')";

  /*setTimeout(function () {
    message.className = "hide"
  }, 1000)
  */
}

colorButton.addEventListener("click", favColor);
placeButton.addEventListener("click", favPlace);
ritualButton.addEventListener("click", favRitual);


//Input Box //work in progress
let funForm = document.querySelector("form#experiment");

function submitAction(e) {
  console.log('hi there');
  e.preventDefault();
  alert("Hello");
}

funForm.addEventListener("click", submitAction);
//