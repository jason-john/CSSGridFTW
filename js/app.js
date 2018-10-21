console.log('in app js');
const navHamburger = document.querySelector('#navHamburger');
navHamburger.addEventListener('click', (event) => {
    //console.log(event);
     navHamburger.parentElement.classList.toggle('active');
})