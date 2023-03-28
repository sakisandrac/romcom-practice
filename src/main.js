// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;
let form = document.querySelector('form');
let coverButton = document.querySelector('.make-new-button');
let homeView = document.querySelector('.home-view');
let randCoverButton = document.querySelector('.random-cover-button');
let saveCoverButton = document.querySelector('.save-cover-button');
let homeButton = document.querySelector('.home-button');

// Add your event listeners here 👇
coverButton.addEventListener('click', coverButtonClick);
homeButton.addEventListener('click', homeButtonClick);
form.classList.add('hidden');
homeButton.classList.add('hidden');


// Create your event handlers and other functions here 👇
function coverButtonClick() {
  form.classList.toggle('hidden');
  homeView.classList.toggle('hidden');
  randCoverButton.classList.toggle('hidden');
  saveCoverButton.classList.toggle('hidden');
  homeButton.classList.toggle('hidden');
}

function homeButtonClick() {
  homeButton.classList.toggle('hidden');
  form.classList.toggle('hidden');
  homeView.classList.toggle('hidden');
  randCoverButton.classList.toggle('hidden');
  saveCoverButton.classList.toggle('hidden');
}

// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}

