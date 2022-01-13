//Мобильное меню
const toggleBtn = document.querySelector('.header__toggle-btn');
const mainMenu = document.querySelector('.header__main-menu nav>ul');

toggleBtn.addEventListener('click', function() {
  toggleBtn.classList.toggle('active');
  mainMenu.classList.toggle('active');
});

const subMenuBtn = document.querySelector('.header__main-menu nav>ul>li>span');

subMenuBtn.addEventListener('click', function() {
  subMenuBtn.classList.toggle('rotate');
  subMenuBtn.nextElementSibling.classList.toggle('active');
});


// Главное модальное окно с формой
const modalButtons = document.querySelectorAll('.trigger');
const modal = document.querySelector('.modal__item');
const overlay = document.querySelector('.vacancies-popup__overlay');
const closeButton = document.querySelector('.main-form__close');

modalButtons.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow='hidden';
  });
});

closeButton.addEventListener('click', function() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow='';
});

document.body.addEventListener('keyup',function (e) {
    var key = e.keyCode;
    if (key == 27) {
      modal.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow='';
    }
  },false
);

overlay.addEventListener('click', function () {
  modal.classList.remove('active');
  this.classList.remove('active');
  document.body.style.overflow='';
});
