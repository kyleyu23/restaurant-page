import { appendHome } from './home.js';
import { appendMenu } from './menu.js';
import { appendContact } from './contact.js';
import './style.css';

const body = document.querySelector('body');
let currentTab = '';

//create and append nav bar
const navbar = document.createElement('nav');
navbar.classList.add("navbar");
body.appendChild(navbar);

//create and append contents div
const contents = document.createElement('div');
contents.id = "contents";
body.appendChild(contents);

//createNavTabs();
const homeTab = document.createElement('a');
homeTab.href = "#";
homeTab.classList.add("navlink");
homeTab.textContent = "Home";

const menuTab = document.createElement('a');
menuTab.href = "#";
menuTab.classList.add("navlink");
menuTab.textContent = "Menu";

const contactTab = document.createElement('a');
contactTab.href = "#";
contactTab.classList.add("navlink");
contactTab.textContent = "Contact";

//addListeners();
homeTab.addEventListener("click", (event) => {

    if (currentTab === event.target.textContent) {
        return;
    }
    currentTab = event.target.textContent;
    deleteChildren(contents);
    appendHome(contents);
})

menuTab.addEventListener("click", (event) => {
    if (currentTab === event.target.textContent) {
        return;
    }
    currentTab = event.target.textContent;
    deleteChildren(contents);
    appendMenu(contents);
})

contactTab.addEventListener("click", (event) => {
    if (currentTab === event.target.textContent) {
        return;
    }
    currentTab = event.target.textContent;
    deleteChildren(contents);
    appendContact(contents);
})
//appendTabs();
navbar.appendChild(homeTab);
navbar.appendChild(menuTab);
navbar.appendChild(contactTab);

function deleteChildren(parentElement) {
    parentElement.innerHTML = "";
}

//default tab is home
if (currentTab === '') {
    appendHome(contents);
}