const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

let index = 0;

function showSlide(i){
    slides.style.transform = `translateX(-${i * 100}%)`;
}

function nextSlide(){
    index++;

    if(index >= images.length){
        index = 0;
    }

    showSlide(index);
}

function prevSlide(){
    index--;

    if(index < 0){
        index = images.length - 1;
    }

    showSlide(index);
}

document.querySelector(".next").addEventListener("click", () => {
    nextSlide();
    restartAuto();
});

document.querySelector(".prev").addEventListener("click", () => {
    prevSlide();
    restartAuto();
});

let auto = setInterval(nextSlide, 3000);

function restartAuto(){
    clearInterval(auto);
    auto = setInterval(nextSlide, 3000);
}