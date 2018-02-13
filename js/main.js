let el = document.querySelector("a");
let form  = document.getElementsByTagName('form')[0];
let email = document.getElementById('email');
let button = document.getElementById('theButton');

el.addEventListener("mouseover", ()=> {
  el.innerHTML = 'CLICK ME';

  setTimeout(() => {
    el.innerHTML = 'Head TO BLOGS';
  }, 2000);
}, false);


// email.addEventListener("input", event => {
//   if (email.validity.valid) {
//     error.innerHTML = "";
//   }
// }, false);
// form.addEventListener("submit", event => {
//   if (!email.validity.valid) {
//     error.innerHTML = "I expect an e-mail";
//     event.preventDefault();
//   }
// }, false);

let buttonClick = () => {
  value = button.form.name.value;
  // Stores there name in local storage
  localStorage.setItem(`username: `, `${value}`);
}