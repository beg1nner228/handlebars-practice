// main.js
// 1. Импортируем стили. OK
import './style.css';
// 2. Импортируем JS/data.js (предполагаем, что этот файл вам нужен для логики)
import "./JS/data.js"; 
// 3. Импортируем Handlebars
// ИСПОЛЬЗУЕМ "import" вместо "require", чтобы избежать ошибки "require is not defined"
import Handlebars from 'handlebars'; 
// Если Vite выдаст ошибку, используйте: import Handlebars from 'handlebars/runtime';
import templateSource from './templates/template-1.hbs?raw'; 
// 5. Импортируем JSON.
import data from './data/data.json';


const btn = document.querySelector(".addNewUser")
console.log(data); // data уже является JS-объектом
const template = Handlebars.compile(templateSource);
document.querySelector("#app").innerHTML = template(data);

btn.addEventListener("click", onSubmitAddNewUser)


function onSubmitAddNewUser(user) {
  const userName = addUserName();
  const userAge = addUserAge();
  console.log(userName, userAge);
  pushUser(userName, userAge);
  if(userName === undefined || userAge === 0 || userAge === NaN || userName === " ") {
    return alert("Invalid value!")
  }
  document.querySelector("#app").innerHTML = template(data);
}
function addUserName() {
  const name = prompt("Enter your name: ")
  if(name.length < 2 || name.trim().length === 0) {
    alert("Your name must include min. 3 letters")
  } 
  return name;
}
function addUserAge() {
  const age = Number(prompt("Enter your age: "))
  if(isNaN(age)) {
    alert("Enter the correct age value")
  } 
  return age
}
function pushUser(name, age) {
  data.users.push(
    {
      name: name,
      age: age
    })
}