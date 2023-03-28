// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;
let form = document.querySelector('form');
let makeCoverButton = document.querySelector('.make-new-button');
let homeView = document.querySelector('.home-view');
let randCoverButton = document.querySelector('.random-cover-button');
let saveCoverButton = document.querySelector('.save-cover-button');
let homeButton = document.querySelector('.home-button');
let viewSavedButton = document.querySelector('.view-saved-button');
let makeBookButton = document.querySelector('.create-new-book-button');
let coverInput = document.querySelector('#cover');
let titleInput = document.querySelector('#title');
let describe1 = document.querySelector('#descriptor1');
let describe2 = document.querySelector('#descriptor2');

form.classList.add('hidden');
homeButton.classList.add('hidden');

// Add your event listeners here 👇
makeCoverButton.addEventListener('click', coverButtonClick);
homeButton.addEventListener('click', homeButtonClick);
viewSavedButton.addEventListener('click', viewSavedCovers);
makeBookButton.addEventListener('click', makeMyBook)

// Create your event handlers and other functions here 👇
function coverButtonClick() {
  form.classList.remove('hidden');
  homeView.classList.add('hidden');
  randCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
}

function homeButtonClick() {
  homeButton.classList.add('hidden');
  form.classList.add('hidden');
  homeView.classList.remove('hidden');
  randCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
}

function viewSavedCovers() {
  homeView.classList.add('hidden');
  randCoverButton.classList.add('hidden');
  makeCoverButton.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  form.classList.add('hidden');
}

function makeMyBook(e) {
  e.preventDefault();
  if (coverInput && titleInput && describe1 && describe2){
    createCover(coverInput.value, titleInput.value, describe1.value, describe2.value);

    coverInput.value = '';
    titleInput.value = '';
    describe1.value = '';
    describe2.value = '';

  } else {
    return;
  }
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

