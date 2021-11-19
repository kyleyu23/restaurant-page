function contact(parentElement) {
    //create a div
    const test = document.createElement('div');
    test.textContent = "welcome to contact"

    parentElement.appendChild(test);
}

export { contact };