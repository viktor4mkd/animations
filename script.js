let textTag = document.querySelector('.section1 h1');
let text = textTag.textContent;

let splittedText = text.split('');

textTag.innerHTML = ('')

for (let i = 0; i < splittedText.length; i++) {
    if (splittedText[i] == " ") {
        splittedText[i] = "&nbsp;"
    }

    textTag.innerHTML += `<span>${splittedText[i]}</span>`
}
let spans = textTag.querySelectorAll('span');
let k = 0;
let interval = setInterval(() => {

    let singleSpan = spans[k];
    singleSpan.className = 'fadeMove';
    k++;

    if (k === spans.length) {
        clearInterval(interval);
    }
}, 50);

let border = document.querySelector('.border-line')
let animationwidth = 0;



window.onscroll = () => {
    if (this.oldscroll > this.scrollY) {

        animationwidth -= 2;
    } else {

        animationwidth += 2;
    }
    if (animationwidth >= 100) {
        animationwidth = 100;

    }

    if (animationwidth <= 0) {
        animationwidth = 0;

    }

    border.style.width = animationwidth + '%';

    this.oldscroll = this.scrollY;

    imageAnimation();
}

const imageAnimation = () => {
    let sectionForAnimation = document.querySelector('.section2 .images');
    let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.22;

    let leftImage = document.querySelector('.slideFromLeft');
    let rightImage = document.querySelector('.slideFromRight');


    if (sectionPosition < screenPosition) {
        leftImage.classList.add('animated');
        rightImage.classList.add('animated');
    }

} 
