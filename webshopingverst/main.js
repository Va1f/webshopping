const button_nav = document.getElementById('btn-nav');
const form = document.querySelector('.container_sign_up');
const button_close = document.querySelector('.close-btn');
const maincontainer = document.querySelector('.containter-main');
const navcontainer = document.querySelector('.container-nav');

button_nav.addEventListener('click', (e) => {
    e.preventDefault();
    form.classList.add('active');
    maincontainer.classList.add('active');
    navcontainer.classList.add('active');
    
})


button_close.addEventListener('click', () => {
    form.classList.remove('active');
    maincontainer.classList.remove('active');
    navcontainer.classList.remove('active');
    
})






const input = document.querySelector('.password');
const showpass = document.querySelector('.show-pass');

showpass.addEventListener('click', () => {
    showpass.classList.toggle('active');
    if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text');
        input.focus();
    } else {
        input.setAttribute('type', 'password');
        input.focus();
    }
})



const btn_catalogue = document.getElementById("catalogue");
const elementCatalogue = document.getElementById("text-new-arrivals");
const elementFashion = document.getElementById("payday-img");
const btn_fashion = document.getElementById("fashion");
const btn_favourite = document.getElementById("favourite");
const btn_lifestyle = document.getElementById("lifestyle");
const elementfavourite = document.getElementById("text-favorite");
const elementlifestyle = document.getElementById("telephone-img")

btn_catalogue.addEventListener('click', () => {
    elementCatalogue.scrollIntoView();
});

btn_fashion.addEventListener('click', () => {
    elementFashion.scrollIntoView();
});

btn_favourite.addEventListener('click', () => {
    elementfavourite.scrollIntoView();
});

btn_lifestyle.addEventListener('click',() => {
    elementlifestyle.scrollIntoView();
});






