var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var massageError = document.getElementById("massage-error");
var submitError = document.getElementById("submit-error");


function validateName() {
    var name = document.getElementById("contact-name").value;

    if(name.length == 0) {
        name.innerHTML  = 'Name is requried';
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        name.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone () {
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0) {
        phoneError.innerHTML = 'Phone no is requried';
        return false;
    }
    if(phone.length !== 10) {
        phoneError.innerHTML = 'Phone no should be 10 digits'
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'only digits please';
        return false;
    }

   phoneError.innerHTML =  '<i class="fa-solid fa-circle-check"></i>';
   return true;
} 

function validateEmail () {
    var email = document.getElementById('contact-email').value;
    if(email.length == 0) {
        emailError.innerHTML = 'email is requried';
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
      emailError.innerHTML = 'invalid email';
      return false;
    }

    emailError.innerHTML =  '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMassage () {
    var massage = document.getElementById('contact-massage').value;
    var requried = 30;
    var left = requried - massage.length;

    if(left > 0) {
      massageError.innerHTML = left + 'more characters requried';
      return false;
    }

    massageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}

function  validateForm() {
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMassage()){
        submitError.style.display = 'block';
        submitError.innerHTML = "please fixed the error";
        setTimeout(function(){submitError.style.display = 'none'}, 3000)
        return false;
    }
}