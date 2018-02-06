let el = document.querySelector("a");

el.addEventListener("mouseover", ()=> {
  el.innerHTML = 'CLICK ME';

  setTimeout(() => {
    el.innerHTML = 'Head TO BLOGS';
  }, 2000);
}, false);


let form  = document.getElementsByTagName('form')[0];
let email = document.getElementById('email');

email.addEventListener("input", event => {
  if (email.validity.valid) {
    error.innerHTML = "";
  }
}, false);
form.addEventListener("submit", event => {
  if (!email.validity.valid) {
    error.innerHTML = "I expect an e-mail";
    event.preventDefault();
  }
}, false);