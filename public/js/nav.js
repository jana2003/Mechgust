const navToggler = document.querySelector('.nav-toggler');

const navContainer = document.querySelector('.nav-container');

navToggler.addEventListener('click', () => {
	navContainer.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
});
