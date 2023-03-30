
const subjects = ['science', 'technology', 'politics', 'art'];

let index = 0;
let isDeleting = false;
let textIndex = 0;

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
function type() {
    const text = subjects[index];

    if (isDeleting) {
        document.getElementById('typed-text').innerHTML = text.substring(0, textIndex) + '|';
        textIndex--;

        if (textIndex < 0) {
            isDeleting = false;
            setTimeout(type, 1000);
            return;
        }
    } else {
        document.getElementById('typed-text').innerHTML = text.substring(0, textIndex) + '|';
        textIndex++;

        if (textIndex > text.length) {
            isDeleting = true;
            textIndex--;
            setTimeout(type, 1000);
            return;
        }
    }

    setTimeout(type, 100);
    if (!isDeleting && textIndex == text.length) {
        setTimeout(() => {
            isDeleting = true;
        }, 1000);
    } else if (isDeleting && textIndex == 0) {
        index = (index + 1) % subjects.length;
        isDeleting = false;
    }
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("nav").classList.remove("hide");
    } else {
        document.querySelector("nav").classList.add("hide");
    }
    prevScrollpos = currentScrollPos;
}

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('mousemove', e => {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;

        e.target.style.setProperty('--x', `${x}px`);
        e.target.style.setProperty('--y', `${y}px`);
    });

    button.addEventListener('mouseleave', e => {
        e.target.style.setProperty('--x', 0);
        e.target.style.setProperty('--y', 0);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    type();
});


// SLIDER SLIDER SLIDER

const episodeSlider = document.querySelector('.episode-slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let scrollLeftValue = 0;

prevButton.addEventListener('click', () => {
  scrollLeftValue -= 300;
  episodeSlider.scrollTo({
    left: scrollLeftValue,
    behavior: 'smooth'
  });
});

nextButton.addEventListener('click', () => {
  scrollLeftValue += 300;
  episodeSlider.scrollTo({
    left: scrollLeftValue,
    behavior: 'smooth'
  });
});
