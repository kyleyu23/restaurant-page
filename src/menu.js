function menu(parentElement) {
    //create a div
    const test = document.createElement('div');
    test.textContent = "welcome to menu"

    parentElement.appendChild(test);
}

export { menu };