import works from './works.js';

const main = document.querySelector('main');

function createPage() {
    
    const slideShowContainer = document.createElement('div');
    slideShowContainer.className = `slideshow-container`;
    
    const dotBlock = document.createElement('div');
    dotBlock.className=`dots-block`;
    dotBlock.style.textAlign = 'center';

    works.map((work, i) => {
        const mySlidesFade = document.createElement('div');
        mySlidesFade.classList.add('my-slides', 'fade');

        const dot = document.createElement('span');
        dot.className = `dot`;
        dot.addEventListener('click', () => {
            currentSlide(i + 1);
        });

        mySlidesFade.innerHTML = `
        <h3>${work.workName}</h3>
        <p>${work.description}</p>
        <i>Slide ${i + 1}/${works.length}</i>
        <img height='50%' width='80%' src="${work.url}" draggable="false" alt=${work.description}>
        `;

        dotBlock.append(dot);
        slideShowContainer.append(mySlidesFade);
        slideShowContainer.append(dotBlock);
    });

    // // adds play, pause and reset slide buttons

    const btnBLock = document.createElement('div');
    btnBLock.className = 'buttons-block'
    slideShowContainer.prepend(btnBLock);

    const startBtn = document.createElement('button');
    startBtn.className = `start-button`;
    startBtn.innerHTML = `&#9654;`;
    // startBtn.title = `Play (Enter)`;
    startBtn.title = `Play (Alt+S)`;
    startBtn.addEventListener('click', startSlideShow);

    const stopBtn = document.createElement('button');
    stopBtn.className = `stop-button`;
    stopBtn.innerHTML = ` &#124; &#124; `;
    stopBtn.title = `Pause (Alt+P)`;
    stopBtn.addEventListener('click', stopSlideShow);

    const resetBtn = document.createElement('button');
    resetBtn.className = `reset-button`;
    resetBtn.innerHTML = `reset slide show`;
    resetBtn.title = `Switch the first slide (Alt+R)`;
    resetBtn.addEventListener('click', resetSlide);

    btnBLock.append(startBtn, stopBtn, resetBtn);

    //adds previous/next buttons

    const prevBtn = document.createElement('button');
    prevBtn.className = 'prev';
    prevBtn.innerHTML = `&#10094;`;
    prevBtn.title = `Previous Slide(ArrowLeft)`;
    prevBtn.addEventListener('click', () => plusSlides(-1));

    const nextBtn = document.createElement('button');
    nextBtn.className = 'next';
    nextBtn.innerHTML = '&#10095;';
    nextBtn.title = `Next Slide(ArrowRight)`;
    nextBtn.addEventListener('click', () => plusSlides(1));

    slideShowContainer.append(prevBtn, nextBtn);

    main.append(slideShowContainer);

}

createPage();

let slideIndex = 1;

// // creates message box

function createMessage(message) {

    const messageSection = document.createElement('section');
    main.prepend(messageSection);

    const messageBox = document.createElement('div');
    messageBox.className = 'message-box disappear';

    const span = document.createElement('span');
    span.innerText = message;

    messageBox.append(span);

    messageSection.append(messageBox);

    setTimeout(() => {
        main.removeChild(messageSection);
    }, 4000);

}

// // Switches to the first slide

function resetSlide() {

    createMessage(`switched to the first slide`);

    slideIndex = 1;

    const slides = document.getElementsByClassName('my-slides');
    const dots = document.getElementsByClassName('dot');

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[0].style.display = 'block';
    dots[0].className += ' active';
}

// // starts to play the slide-show

let interval;

function startSlideShow() {

    createMessage(`Slide-Show Started (Press "Alt+P" for pause the slide-show)`);

    interval = setInterval(() => {
        plusSlides(1);
    }, 3000);

}

// // stops the slide-show

function stopSlideShow() {

    createMessage(`Slide-Show Paused (Press "Alt+S" for play the slide-show)`);

    clearInterval(interval);
}

slideShow(slideIndex);

function plusSlides(n) {

    slideShow(slideIndex += n);

}

function currentSlide(n) {

    slideShow(slideIndex = n);

}

function slideShow(n) {

    const slides = document.getElementsByClassName('my-slides');
    const dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';

};

document.addEventListener('keyup', (event) => {

    event.key === `ArrowRight` ? plusSlides(1) : event.key === `ArrowLeft` ? plusSlides(-1) : null;
    event.altKey && event.key === 's' ? startSlideShow() : event.altKey && event.key === 'p' ? stopSlideShow() : null;
    event.altKey && event.key === 'r' ? resetSlide() : null;

});