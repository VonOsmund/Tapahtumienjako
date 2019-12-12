'use strict';

// haetaan olemassa olevia html elementtejä
// haetaan div elementti, jonka sisään haetaan tapahtumat
const events = document.querySelector('.events');

// Luodaan tapahtuma kortit
const createEventCards = (events) => {
  events.forEach((event) => {

    // Luodaan sisältö DOM metodeilla
    // Luodaan div elementti ja lisätään luokat
    const eventCard = document.createElement('div');
    eventCard.classList.add('event', 'card');
    events.appendChild(eventCard);

    // Luodaan elementti kuvalle
    const eventHeader = document.createElement('div');
    eventHeader.classList.add('eventHeader');
    eventHeader.style.backgroundImage = "url('')";
    eventCard.appendChild(eventHeader);

    // Luodaan elementti tapahtuman sisällölle
    const eventContent = document.createElement('div');
    eventContent.classList.add('eventContent');
    eventCard.appendChild(eventContent);

    // Luodaan uusi elementti eventContentiin
    const eventInfo = document.createElement('div');
    eventInfo.classList.add('eventInfo');
    eventContent.appendChild(eventInfo);

    // Luodaan otsikko ja teksti elementit eventInfoon
    const eventName = document.createElement('h3');
    eventName.classList.add('eventName');
    eventInfo.appendChild(eventName);
    eventName.innerHTML = event.Name;

    const eventLocation = document.createElement('h4');
    eventLocation.classList.add('eventLocation');
    eventInfo.appendChild(eventLocation);
    eventLocation.innerHTML = event.Location;

    const eventDate = document.createElement('h4');
    eventDate.classList.add('eventDate');
    eventInfo.appendChild(eventDate);
    eventDate.innerHTML = event.StartDate;

    const eventTime = document.createElement('h4');
    eventTime.classList.add('eventTime');
    eventInfo.appendChild(eventTime);
    eventTime.innerHTML = event.StartTime;

    const eventType = document.createElement('h5');
    eventType.classList.add('eventType');
    eventInfo.appendChild(eventType);

    const eventPrice = document.createElement('h5');
    eventPrice.classList.add('eventPrice');
    eventInfo.appendChild(eventPrice);
    eventPrice.innerHTML = event.Price;

    const eventDescription = document.createElement('p');
    eventDescription.classList.add('eventDescription');
    eventInfo.appendChild(eventDescription);
    eventDescription.innerHTML = event.Summary;

    // Luodaan napit tapahtumaan
    const eventButtons = document.createElement('div');
    eventButtons.classList.add('eventButtons');
    eventContent.appendChild(eventButtons);

    const interestedButton = document.createElement('div');
    interestedButton.classList.add('eventButton');
    interestedButton.innerHTML = 'Kiinnostunut';
    eventButtons.appendChild(interestedButton);

    const attendButton = document.createElement('div');
    attendButton.classList.add('eventButton');
    attendButton.innerHTML = 'Osallistuu';
    eventButtons.appendChild(attendButton);
  });
};