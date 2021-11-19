import { home } from './home.js';
import { menu } from './menu.js';
import { contact } from './contact.js';
import './style.css';

const body = document.querySelector('body');

//create and append nav bar
const navbar = document.createElement('nav');
navbar.setAttribute("class", "navbar");
body.appendChild(navbar);

//create and append contents div
const contents = document.createElement('div');
contents.setAttribute("id", "contents");
body.appendChild(contents);

//createNavTabs();
const homeTab = document.createElement('div');
homeTab.setAttribute("class", "navlink");
homeTab.textContent = "Home";

const menuTab = document.createElement('div');
menuTab.setAttribute("class", "navlink");
menuTab.textContent = "Menu";

const contactTab = document.createElement('div');
contactTab.setAttribute("class", "navlink");
contactTab.textContent = "Contact";

//addListeners();
homeTab.addEventListener("click", () => {
    deleteChildren(contents);
    home(contents);
})

menuTab.addEventListener("click", () => {
    deleteChildren(contents);
    menu(contents);
})

contactTab.addEventListener("click", () => {
    deleteChildren(contents);
    contact(contents);
})
//appendTabs();
navbar.appendChild(homeTab);
navbar.appendChild(menuTab);
navbar.appendChild(contactTab);

function deleteChildren(parentElement) {
    parentElement.innerHTML = "";
}

//default contents is home
home(contents);