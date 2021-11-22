function appendContact(parentElement) {
    //contact us
    const contactUs = document.createElement('h1');
    contactUs.textContent = "Contact Us";
    contactUs.classList.add("card");
    parentElement.appendChild(contactUs);
    //owner
    const ownerContainer = document.createElement('div');
    const name = document.createElement('h2');
    ownerContainer.classList.add("card");
    name.textContent = "ZED99"
    ownerContainer.appendChild(name);

    const title = document.createElement('p');
    title.textContent = 'Owner';
    ownerContainer.appendChild(title);

    const phone = document.createElement('p');
    phone.textContent = '123-456-7890';
    ownerContainer.appendChild(phone);

    const email = document.createElement('p');
    email.textContent = 'creative752@name.com';
    ownerContainer.appendChild(email);

    parentElement.appendChild(ownerContainer);
    //manager
    const managerContainer = document.createElement('div');
    const name2 = document.createElement('h2');
    managerContainer.classList.add("card");
    name2.textContent = "Qiyana"
    managerContainer.appendChild(name2);

    const title2 = document.createElement('p');
    title2.textContent = 'Manager';
    managerContainer.appendChild(title2);

    const phone2 = document.createElement('p');
    phone2.textContent = '123-456-7891';
    managerContainer.appendChild(phone2);

    const email2 = document.createElement('p');
    email2.textContent = 'creative751@name.com';
    managerContainer.appendChild(email2);

    parentElement.appendChild(managerContainer);

    //waiter
    const waiterContainer = document.createElement('div');
    const name3 = document.createElement('h2');
    waiterContainer.classList.add("card");
    name3.textContent = "Lucian"
    waiterContainer.appendChild(name3);

    const title3 = document.createElement('p');
    title3.textContent = 'Waiter';
    waiterContainer.appendChild(title3);

    const phone3 = document.createElement('p');
    phone3.textContent = '123-456-7892';
    waiterContainer.appendChild(phone3);

    const email3 = document.createElement('p');
    email3.textContent = 'creative750@name.com';
    waiterContainer.appendChild(email3);

    parentElement.appendChild(waiterContainer);
}

export { appendContact };