"use strict";
//  ====================== elements =======================
const INPUTS = document.querySelectorAll("input");
const FORM = document.getElementById("form");
const btnSubmit = document.getElementById("btnSubmit");
let userList = []
// ==================== Events   ======================

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  setFormInput();
  clearForm();
});

// >>>>>>>>>>>>>>>>>>>>>   FUNCTIONS  <<<<<<<<<<<<<<<<<<<<<

// ===================== setFormInput =====================

function setFormInput() {
  if (
    validationInputs(INPUTS[0]) &&
    validationInputs(INPUTS[1]) &&
    validationInputs(INPUTS[2]) &&
    validationInputs(INPUTS[3]) &&
    validationInputs(INPUTS[4]) &&
    validationInputs(INPUTS[5])
  ) {

    let user = {
      name: INPUTS[0].value,
      email: INPUTS[1].value,
      phone: INPUTS[2].value,
      age: INPUTS[3].value,
      password: INPUTS[4].value,
      Repassword: INPUTS[5].value,
    };
    userList.push(user)
    console.log(userList);
    btnSubmit.removeAttribute("disabled");
  } else {
    btnSubmit.setAttribute("disabled", true);
  }
 
}

// ===================== clearForm =====================
function clearForm() {
  for (let i = 0; i < INPUTS.length; i++) {
    INPUTS[i].value = null;
    INPUTS[i].classList.remove("is-valid");
  }
}

// ===================== registerForm =====================
function validationInputs(element) {
  let input = element.value;
  const regex = {
    Name: /^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/,
    email:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    age: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/,
    password: /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/,
    Repassword: /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/,
  };

  if (regex[element.id].test(input)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    return true;
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    return false;
  }
}

// ======================= inputsLoopValidation ====================
function setInputsValidation() {
  for (let i = 0; i < INPUTS.length; i++) {
    INPUTS[i].addEventListener("input", function () {
      validationInputs(INPUTS[i]);
      if (INPUTS[4].value === INPUTS[5].value) {
        setFormInput();
      }
    });
  }
}
setInputsValidation();


$("aside i").on("click", function () {
  $(".outer-side").animate({ width: "toggle" }, 500, function () {
    $(".links li").animate({ top: 200 }, 500);
  });
});























