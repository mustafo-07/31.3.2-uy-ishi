let form = document.querySelector(".form");

let password1 = document.querySelector(".password1");
let password2 = document.querySelector(".password2");
let password1__span = document.querySelector(".password1__span");
let password2__span = document.querySelector(".password2__span");
let btn = document.querySelector(".btn");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (password1.value && password2.value) {
        if (password1.value === password2.value) {
            console.log('togri');
        } else {
            password2__span.textContent = "Confirm password is inorrect";
            password2__span.style.color = "red";
        }
    } else {
        if (!password1.value) {
            password1__span.textContent = "Son yozing";
            password1__span.style.color = "red";
        }
        if (!password2.value) {
            password2__span.textContent = "Son yozing";
            password2__span.style.color = "red";
        }
    }
});