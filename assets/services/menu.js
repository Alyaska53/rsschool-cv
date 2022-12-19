const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-toggle');
const [firstStick, secondStick, thirdStick] = document.querySelectorAll('.toggle-stick');

function changeMenuBtn() {
  firstStick.classList.toggle('first-transform');
  secondStick.classList.toggle('second-transform');
  thirdStick.classList.toggle('third-transform');
}

function toggleMenu() {
  changeMenuBtn();
  menu.classList.toggle('menu-open');
}

function isNav(target) {
  let element = target;

  while (element.parentNode) {
    if (element.tagName == 'NAV') return true;
    element = element.parentNode;
  }

  return false;
}

function closeMenu(event) {
  let target = event.target;
  let isOpen = menu.classList.contains('menu-open');

  if ((!isNav(target) || target.tagName === 'A') && isOpen) {
    toggleMenu();
  }
}

menuBtn.addEventListener('click', toggleMenu);
document.addEventListener('click', (event) => closeMenu(event));