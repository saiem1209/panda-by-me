const loginBtn = document.getElementById("h-login-btn");

loginBtn.addEventListener('click', function(e){
    e.preventDefault()
    window.location.href=('./login.html');
})

const registrationBtn = document.getElementById("h-registration-btn");

registrationBtn.addEventListener('click', function(e){
    e.preventDefault()
    window.location.href=('./registration.html');
})