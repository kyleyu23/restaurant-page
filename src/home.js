function home(parentElement) {
    //create a div
    const test = document.createElement('div');
    test.textContent = "welcome to home"

    parentElement.appendChild(test);
}

export { home };