function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalSpan = document.querySelectorAll(".close");
const formValidation = document.getElementById("formID");
const firstInput = document.getElementById("first");
const lastInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const dateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const btnRadio = document.querySelectorAll("input[name='location']");
const btnCheck = document.getElementById("checkbox1");
const errorMsg = document.querySelectorAll(".error");

// List of character accepted
const onlyLetters = new RegExp(/[a-zA-Z-]{2,}/i);
let emailPattern = new RegExp(/[a-z0-9\.-]+@[a-z0-9\.-]+(\.[a-z0-9._-]+)/);
const onlyNumbers = new RegExp(/[0-9]{1,}/);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// Close modal event
modalSpan.forEach((span) => span.addEventListener("click", closeModal));

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Check if date is OK
function checkDate() {
  let setDate = new Date (dateInput.value);
  let currentDate = new Date ();
  let age = currentDate.getFullYear() - setDate.getFullYear();

  if(age >= 18) {
    return true;
  }
  return false;
}

// Check if at least 1 radio is selected
btnRadio.forEach((checkedBoxInput) => checkedBoxInput.addEventListener("change", () => {
  checkRadiobox();
}));

function checkRadiobox() {
  for (var i = 0; i < btnRadio.length; i++) {
    if (btnRadio[i].checked){
      return true;
    }
  }
  return false;
}

// Empty errorMsg

function emptyError() {
  for (var i = 0; i < 7; i++)
  {
    errorMsg[i].innerText = "";
  }
}

// Validation of all inputs
formValidation.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!firstInput.value.match(onlyLetters)) {
    errorMsg[0].innerText = "Syntaxe du prénom incorrecte";
  }
  else if(!lastInput.value.match(onlyLetters)) {
    emptyError();
    errorMsg[1].innerText = "Syntaxe du nom incorrecte";
  }
  else if(!emailPattern.test(emailInput.value)) {
    emptyError();
    errorMsg[2].innerText = "Syntaxe de l'email incorrecte";
  }
  else if(!checkDate()) {
    emptyError();
    errorMsg[3].innerText = "Date incorrecte";
  }
  else if(!quantityInput.value.match(onlyNumbers)) {
    emptyError();
    errorMsg[4].innerText = "Veuillez entrer un nombre";
  }
  else if(!checkRadiobox()) {
    emptyError();
    errorMsg[5].innerText = "Veuillez sélectionner un lieu";
  }
  else if(!btnCheck.checked){
    emptyError();
    errorMsg[6].innerText = "Veuillez cocher cette case";
  }
  else {
    emptyError();
    formValidation.reset();
    alert("Merci ! Votre réservation a été reçue.");
    closeModal();
  }
});