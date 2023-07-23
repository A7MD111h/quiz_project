

// Validating register form
function register() 
{
    
    let firstName = document.getElementById('firstName').value;
    let email = document.getElementById('email').value;
    let confirmEmail = document.getElementById('confirmEmail').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let position = document.getElementById('position').value;

    let regexName = /^[A-Za-z]+$/;
    let passwordRegex = /^(?=.*[A-Z])(?=.*\d{2,})(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,32}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
    let userData = {
    FirstName: firstName,
    Email: email,
    Password: password,
    position: position
    };

     //checking firstname
    if (!regexName.test(firstName) ) {
        console.log('First name and last name should contain only letters.');
         return false;
    }
            
             
     // check email 
     if (!emailRegex.test(email)) {
         console.log('Invalid email format.');
        // document.getElementById('emailError').innerHTML='Invalid email format.';
         return false;
     }

      //check email
    if (email !== confirmEmail) {
        console.log('Emails do not match.');
       // document.getElementById('confirmEmailError').innerHTML='Invalid email format.';

        return false;
    }
 
           
            
    if (!passwordRegex.test(password)) {
         console.log('Password should start with a capital letter, contain at least two numbers, one special character, and be 8 to 32 characters long.');
        return false;
    }
 
    if (password !== confirmPassword) {
        console.log('Passwords do not match.');
        return false;
    }
 

    localStorage.setItem("userData",JSON.stringify(userData))
    alert('register succesful')
    return true;
}
   
    

let buttonsignUp2 = document.querySelector("#submitup");

buttonsignUp2.addEventListener('click', (event) => {
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
    let email = document.getElementById('emailIn').value;
    let password = document.getElementById('passwordIn').value;
   

    let storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData) {
        
        if (email === storedUserData.Email && password === storedUserData.Password) {
            // function myFunction() {
            //     window.location.href = "/index.html";
            //   }
            // alert('done')
            return true
        } else {
            alert('Invalid email or password.');
            return false
        }
    } else {
        alert('No user data found. Please register first.');
        return false
    }
    
}

// login btn navgate to homepage


let buttonlogin = document.querySelector("#submitin");

buttonlogin.addEventListener('click', (event) => {
    event.preventDefault();
    if (!login()) {
        
        console.log("Login failed.");
    } else {
        console.log("login succes");
        window.location.href = "../index.html";
    }
});


//let buttonlogin = document.querySelector("#submitin")
// buttonlogin.addEventListener('submit', (e)=> {
//     console.log('clicked ?');
//      e.preventDefault()
//     if (!login()){ 
//        //window.location.href = '/index.html'
//        alert('loooool')
//     }
//     else{
//         window.location.href = '../index.html'
//         console.log(`clicked`);
//     }
// })



