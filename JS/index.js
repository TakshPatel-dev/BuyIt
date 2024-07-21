let eyeIcon = document.querySelector(`.fi`)
let signIn = document.querySelector(`.signIn`)
let passwordInput = document.getElementById(`passwordInput`)
let login = document.getElementById(`login`)
function validate(){
    document.location.href = "home.html"
}
eyeIcon.addEventListener(`click`,changeVisiility)
function changeVisiility(){
 eyeIcon.classList.contains(`fi-br-eye`) ? passwordInput.type = "text" : passwordInput.type = "password"
 if(eyeIcon.classList.contains(`fi-br-eye`)){
    eyeIcon.classList.replace(`fi-br-eye`,`fi-br-eye-crossed`)
 }else{
    eyeIcon.classList.replace(`fi-br-eye-crossed`,`fi-br-eye`)

 }
}
signIn.addEventListener(`click`,changeTxt)
function changeTxt(){
    if (login.textContent === `Login`){login.textContent =`Sign Up`;signIn.textContent = `login`}
    else{login.textContent = `Login`;signIn.textContent =`Sign Up`}
}
