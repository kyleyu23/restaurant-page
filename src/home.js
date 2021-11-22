function appendHome(parentElement) {
    //create and append...

    //shop name
    const shopTitle = document.createElement('h1');
    shopTitle.textContent = "Kyle's Ramen Shop";
    shopTitle.classList.add("card");
    parentElement.appendChild(shopTitle);
    //quote
    const quote = document.createElement('div');
    quote.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente accusantium ad sit similique expedita autem impedit porro molestias eius voluptatem.";
    quote.classList.add("card");
    quote.id = "quote"
    parentElement.appendChild(quote);
    //hours
    const hoursContainer = document.createElement('div');
    const hours = document.createElement('h2');
    hoursContainer.classList.add("card");
    hours.textContent = "Hours"
    hoursContainer.appendChild(hours);
    const WEEKDAY_HOURS = "12pm - 10pm";
    const WEEKEND_HOURS = "12pm - 2am";


    const sunday = document.createElement('p');
    sunday.textContent = `Sunday: ${WEEKDAY_HOURS}`;
    hoursContainer.appendChild(sunday);

    const saturday = document.createElement('p');
    saturday.textContent = `Saturday: ${WEEKEND_HOURS}`;
    hoursContainer.appendChild(saturday);

    const friday = document.createElement('p');
    friday.textContent = `Friday: ${WEEKEND_HOURS}`;
    hoursContainer.appendChild(friday);

    const thursday = document.createElement('p');
    thursday.textContent = `Thursday: ${WEEKDAY_HOURS}`;
    hoursContainer.appendChild(thursday);

    const wednesday = document.createElement('p');
    wednesday.textContent = `Wednesday: ${WEEKDAY_HOURS}`;
    hoursContainer.appendChild(wednesday);

    const tuesday = document.createElement('p');
    tuesday.textContent = `Tuesday: ${WEEKDAY_HOURS}`;
    hoursContainer.appendChild(tuesday);

    const monday = document.createElement('p');
    monday.textContent = `Monday: ${WEEKDAY_HOURS}`;
    hoursContainer.appendChild(monday);



    parentElement.appendChild(hoursContainer);

    //location
    const locationContainer = document.createElement('div');
    locationContainer.classList.add("card");

    const location = document.createElement('h2');
    location.textContent = "Location";
    locationContainer.appendChild(location);

    const address = document.createElement('p');
    address.textContent = "456 Archer Avenue, Chicago, Illinois";
    locationContainer.appendChild(address);
    parentElement.appendChild(locationContainer);

}

export { appendHome };