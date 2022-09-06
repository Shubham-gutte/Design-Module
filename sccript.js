const navmenu = document.querySelector('.nav_menu');
let togglemenu = document.querySelector('#header_toggle');
let closemenu = document.querySelector('#header_close');

const hero = document.querySelector('.hero');
const btntop = document.getElementById('topup');

// toggle nav menu
togglemenu.addEventListener('click', () => {
  navmenu.classList.toggle('show');
});
closemenu.addEventListener('click', () => {
  navmenu.classList.remove('show');
});

//scroll to top

btntop.addEventListener('click', () => {
  hero.scrollIntoView({ behavior: 'smooth' });
});
