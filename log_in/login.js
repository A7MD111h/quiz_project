
// Validating register form


function register() {
  let username = document.getElementById("firstName");
  let email = document.getElementById("email");
  let confirmEmail = document.getElementById("confirmEmail");
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirmPassword");
  let position = document.getElementById("position");
  
  
  let regexName = /^[A-Za-z]+$/;
  let passwordRegex =
    /^(?=.*[A-Z])(?=.*\d{1,})(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,32}$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let userData = {};
  signUp = true;
  //checking firstname
  if (!regexName.test(firstName.value)) {
    console.log("First name and last name should contain only letters.");
    alertWrong(
      firstName,
      "First name and last name should contain only letters"
    );
    signUp = false;
  }

  // check email
  if (!emailRegex.test(email.value)) {
    console.log("Invalid email format.");
    alertWrong(email, "Invalid email format");
    signUp = false;
  }

  //check email
  if (email.value !== confirmEmail.value || confirmEmail.value.trim() == "") {
    console.log("Emails do not match.");
    alertWrong(confirmEmail, "Emails do not match");
    signUp = false;
  }

  if (!passwordRegex.test(password.value)) {
    console.log(
      "Needs to start with a capital letter, contain at least a number, special character, and be 8 to 32 long."
    );
    alertWrong(
      password,
      "Needs to start with a capital letter, contain at least a number, special character, and be 8 to 32 long."
    );
    signUp = false;
  }

  if (
    password.value !== confirmPassword.value ||
    confirmEmail.value.trim() == ""
  ) {
    console.log("Passwords do not match.");
    alertWrong(confirmPassword, "Passwords do not match");
    signUp = false;
  }

  if (signUp) {
    userData.username = username.value ,
    userData.password = password.value;
    userData.email = email.value;
    userData.position = position.value;
  }
  let preData = JSON.parse(
    localStorage.userData ? localStorage.userData : "[]"
  );
  preData.push(userData);

  localStorage.setItem("userData", JSON.stringify(preData));
  localStorage.setItem("isLogedIn", "true");
  localStorage.emailInUse = email.value;
    console.log(localStorage.userData);
  return signUp;

  //   function LocalStore(UserName, Email, Password) {
  //     RestoreData();
  //     userinfo.push(UserName);
  //     // userinfo.push(FirstName);
  //     userinfo.push(Email);
  //     userinfo.push(Password);
  //     let userinfoList = JSON.stringify(userinfo);
  //     localStorage.setItem("UsersData", userinfoList);
  //   }
}

function alertWrong(obj, msg) {
  obj.classList.add("wrong");
  obj.setAttribute("placeholder", msg);
  obj.value = "";
}
function alertWrong2(e, errMas) {
    removeError(e);
    let warningElement = document.createElement("section");
    warningElement.className = "alert";
    warningElement.innerHTML = `<i class="material-symbols-outlined">error</i>&nbsp${errMas}`;
    e.parentElement.prepend(warningElement);
  }

  function removeError(ele) {
    let deletedElem = ele.parentElement.querySelector(".alert");
    if (deletedElem != null) deletedElem.remove();
    return false;
  }

let buttonsignUp2 = document.querySelector("#submitup");

buttonsignUp2.addEventListener("click", (event) => {
  event.preventDefault();
  if (!register()) {
    console.log("Login failed.");
  } else {
    console.log("login succes");
    window.location.href = "../index.html";
  }
});

// LOGIN FUNCTION
function login() {
  let email = document.getElementById("emailIn");
  let password = document.getElementById("passwordIn");

  let storedUserData = JSON.parse(
    localStorage.userData ? localStorage.userData : "[]"
  );
  if (storedUserData.length > 0) {
    let emailINDB = storedUserData.filter(
      (e) => e.email === email.value);
      if (emailINDB.length > 0) {
        emailINDB = emailINDB[0]
        console.log(emailINDB)
        if(emailINDB.password === password.value){
            console.log(emailINDB)
            localStorage.emailInUse = email.value;
            localStorage.isLogedIn = "true";
            return true;
        }
        else{
            alertWrong(password,"Invalid password.");
            return false
        }
    } else {
      alertWrong(email,"Invalid Email.");
      return false;
    }
  } else {
    alertWrong(email,"No user data found. Please register first.");
    return false;
  }
}

// login btn navgate to homepage

let buttonlogin = document.querySelector("#submitin");

buttonlogin.addEventListener("click", (event) => {
  event.preventDefault();
  if (!login()) {
    console.log("Login failed.");
  } else {
    console.log("login succes");

    window.location.href = "../index.html";
  }
});
