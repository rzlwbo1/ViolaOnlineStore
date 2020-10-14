
const menuElement = document.querySelector('.menu');
const linksElement = document.querySelector('.links');

menuElement.addEventListener('click', openNav);

function openNav(e) {
    document.body.style.overflowY = 'hidden';
    linksElement.classList.toggle('show');
    if(linksElement.getAttribute('class') == 'links') {
        document.body.style.overflow = 'auto';
    }
}

console.log(linksElement.getAttribute('class'));




