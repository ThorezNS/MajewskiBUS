const domElements = {
  ticketsBtn: document.querySelector('.tickets-btn'),
  popupBtn: document.querySelector('.popup__button'),
  popup: document.querySelector('.popup'),
};

const fetchJson = (path, callback) => {
  fetch(path)
    .then((response) => response.json())
    .then((data) => callback(data));
};

const popupWindow = () => {
  domElements.ticketsBtn.addEventListener('click', () => {
    domElements.popup.classList.add('popup-active');
  });

  domElements.popupBtn.addEventListener('click', () => {
    domElements.popup.classList.remove('popup-active');
  });
};

const theTextOfThePopup = (data) => {
  data.forEach((section) => {
    const title = document.createElement('h2');
    title.className = 'popup__title';
    title.innerText = section.title;
    domElements.popup.appendChild(title);

    section.body.forEach((body) => {
      const paragraph = document.createElement('p');
      paragraph.innerText = body.paragraph;
      domElements.popup.appendChild(paragraph);

      body.bullet.forEach((bullet) => {
        const bulletElement = document.createElement('span');
        bulletElement.className = 'popup__bullet';
        bulletElement.innerText = bullet;
        paragraph.appendChild(bulletElement);
      });
    });
  });
};

popupWindow();
fetchJson('./data/theTextOfThePopup.json', theTextOfThePopup);
