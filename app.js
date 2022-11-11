// Select all slides
const slides = document.querySelectorAll(".slide");
const percentages = document.querySelectorAll(".percentSlide");

// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

percentages.forEach((percent, indx) => {
  percent.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

const moveSlideRight = () => {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });

  percentages.forEach((percent, indx) => {
    percent.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
}

// add event listener
nextSlide.addEventListener("click", function () {
  //call move slide right
  moveSlideRight();
  clearInterval(interval);
});

// select prev slide button
const prevSlide = document.querySelector(".btn-prev");

const moveSlideLeft = () => {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });

  percentages.forEach((percent, indx) => {
    percent.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
}

// add event listener
prevSlide.addEventListener("click", function () {
  moveSlideLeft();
  clearInterval(interval);
});

const interval = setInterval(moveSlideRight, 3000)


