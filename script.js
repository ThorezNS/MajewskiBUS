const popupWindow = () => {
  const ticketsBtn = document.querySelector('.tickets-btn');
  const popupBtn = document.querySelector('.popup__button');
  const popup = document.querySelector('.popup');

  ticketsBtn.addEventListener('click', () => {
    popup.classList.add('popup-active');
  });

  popupBtn.addEventListener('click', () => {
    popup.classList.remove('popup-active');
  });
};

popupWindow();
