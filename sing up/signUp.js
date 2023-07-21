const form = document.getElementById('registrationForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const dobInput = document.getElementById('dob');
const emailInput = document.getElementById('email');
const confirmEmailInput = document.getElementById('confirmEmail');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const mobileInput = document.getElementById('mobile');

let userData = {
    
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  validateForm();
});
function validateForm() {
    resetErrors();
    const firstNamePattern = /^[A-Za-z]+$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,32}$/;
    let valid = true;
    if (!firstNamePattern.test(firstNameInput.value)) {
      valid = false;
      displayError(firstNameInput, 'First name should contain only letters.');
    }
    if (!isValidDate(dobInput.value)) {
      valid = false;
      displayError(dobInput, 'Invalid date of birth format.');
    }
    if (!isValidEmail(emailInput.value)) {
      valid = false;
      displayError(emailInput, 'Invalid email format.');
    }
    if (emailInput.value !== confirmEmailInput.value) {
      valid = false;
      displayError(confirmEmailInput, 'Emails do not match.');
    }
    if (!passwordPattern.test(passwordInput.value)) {
      valid = false;
      displayError(passwordInput, 'Password should meet the requirements.');
    } else if (passwordInput.value !== confirmPasswordInput.value) {
      valid = false;
      displayError(confirmPasswordInput, 'Passwords do not match.');
    }
    if (mobileInput.value.length !== 10) {
      valid = false;
      displayError(mobileInput, 'Mobile number should be 10 digits.');
    }
    if (valid) {
      displaySuccessMessage('Registration successful!');
    }
  userData.FirstName = firstNameInput.value
      userData.LastName = lastNameInput.value
      userData.BirthDate = dobInput.value
      userData.Email = emailInput.value
      userData.Password = passwordInput.value
      userData.MobileNumber =mobileInput.value
  
  
    localStorage.setItem('userData',JSON.stringify(userData));
  }
  
      function isValidDate(dateString) {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(dateString)) return false;
  
        const date = new Date(dateString);
        return date instanceof Date && !isNaN(date);
      }
  
      function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      }
  
      function displayError(input, message) {
        const errorElement = document.getElementById(`${input.id}Error`);
        errorElement.textContent = message;
      }
  
      function resetErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(element => element.textContent = '');
      }
  
      function displaySuccessMessage(message) {
        const successElement = document.createElement('div');
        successElement.textContent = message;
        successElement.classList.add('success-message');
        form.appendChild(successElement);
      }