//create event cards
const createEventCards = (events) => {
    // clear ul
    const content = document.getElementById('events');
    content.innerHTML = '<ul></ul>';
    events.forEach((event) => {
        // create li with DOM methods
        console.log(event);
        const img = document.createElement('img');
        img.src = url + '/' + event.Image;
        img.alt = event.Name;
        img.classList.add('resp');

        const figure = document.createElement('figure').appendChild(img);

        const h2 = document.createElement('h2');
        h2.innerHTML = event.Name;

        const p1 = document.createElement('p');
        p1.innerHTML = `Sijainti: ${event.Location}`;

        const p2 = document.createElement('p');
        p2.innerHTML = `Päivä: ${event.StartDate}`;

        const p3 = document.createElement('p');
        p3.innerHTML = `Aika: ${event.StartTime}`;

        const p4 = document.createElement('p');
        p4.innerHTML = `Osallistujia: ${event.Attendees}`;

        const p5 = document.createElement('p');
        p5.innerHTML = `Kiinnostuneita: ${event.Interested}`;

        const p6 = document.createElement('p');
        p6.innerHTML = `Tapahtuman luoja: ${event.Owner}`;

        const p7 = document.createElement('p');
        p7.innerHTML = `Kuvaus: ${event.Summary}`;

        const p8 = document.createElement('p');
        p8.innerHTML = `Hinta: ${event.Price}`;
    });
};
createEventCards();