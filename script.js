function checkFormValidity() {
    const email = document.getElementById("email");
    const country = document.getElementById("country");
    const zip = document.getElementById("zip");
    const password = document.getElementById("password")
    const confirmPassword = document.getElementById("password-confirm")
    if (!email.checkValidity()) {
      email.classList.add('invalid');
      email.classList.remove('valid');
    }
    else if (email.checkValidity()) {
        email.classList.add('valid');
        email.classList.remove('invalid');
    }
    if (!country.checkValidity()) {
        country.classList.add('invalid');
        country.classList.remove('valid');
    }
    else if (country.checkValidity()) {
        country.classList.add('valid');
        country.classList.remove('invalid');
    }
    if (!zip.checkValidity()) {
        zip.classList.add('invalid');
        zip.classList.remove('valid');
    }
    else if (zip.checkValidity()) {
        zip.classList.add('valid');
        zip.classList.remove('invalid');
    }
    if (!password.checkValidity()) {
        password.classList.add('invalid');
        password.classList.remove('valid');
    }
    else if (password.checkValidity()) {
        password.classList.add('valid');
        password.classList.remove('invalid');
    }

    if(confirmPassword.value != password.value){
        confirmPassword.classList.remove('valid')
        confirmPassword.classList.add('invalid')
        confirmPassword.setCustomValidity('The passwords do not match!')
    }
    else{
        confirmPassword.classList.remove('invalid')
        confirmPassword.classList.add('valid')
    }
}
const confirmPassword = document.getElementById("password-confirm")
confirmPassword.addEventListener('input', checkFormValidity)
document.addEventListener('click', checkFormValidity)