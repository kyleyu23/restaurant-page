function appendMenu(parentElement) {
    //Menu
    const menu = document.createElement('h1');
    menu.textContent = "Menu";
    menu.classList.add("card");
    menu.id = "menu";
    parentElement.appendChild(menu);

    const ITEMS_TO_CREATE = 10;

    const items = createMenuItem(ITEMS_TO_CREATE);

    function createMenuItem(items) {
        let htmlElements = Array(0);
        for (let index = 0; index < items; index++) {
            const container = document.createElement("div");
            console.log(items.length);
            container.classList.add("card", "menu-item");
            const item = document.createElement("h2");
            item.textContent = `Item ${index}`;
            container.appendChild(item);

            const itemDescription = document.createElement("p");
            itemDescription.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo voluptates consectetur perferendis non, nulla alias, amet quas vero, cum explicabo modi sit voluptas blanditiis. Reiciendis deserunt praesentium recusandae aut consectetur, doloremque debitis aperiam quidem provident blanditiis ipsa, rem delectus iure.";
            container.appendChild(itemDescription);
            htmlElements.push(container);
        }
        return htmlElements;
    }

    for (let index = 0; index < items.length; index++) {
        parentElement.appendChild(items[index]);
    }

}

export { appendMenu };