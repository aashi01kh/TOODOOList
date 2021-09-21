/*var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, );*/

let i=0;
let j=3;

const dots = document.querySelectorAll(".dot-container button");

function next(){
  document.getElementById("content" + (i+1)).classList.remove("active");
  i=(j+i+1)%j;
  document.getElementById("content" +(i+1)).classList.add("active");
  indicator(i+1);
}
function prev(){
  document.getElementById("content" + (i+1)).classList.remove("active");
  i=(j+i-1)%j;
  document.getElementById("content" +(i+1)).classList.add("active");
}

function indicator(num){
  dots.forEach(function(dot){
    dot.style.backgroundColor="transparent";
  });
  document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor="red";

}



/*2nd*/



const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};








let cube = document.querySelector(".image-cube");
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");

let pos = 0 ;

btnNext.addEventListener("click",() => {
  pos -= 90;
  cube.style.transform = `rotateY(${pos}deg)`;
});

btnPrev.addEventListener("click",() => {
  pos += 90;
  cube.style.transform = `rotateY(${pos}deg)`;
});

