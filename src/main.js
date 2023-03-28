// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;
let form = document.querySelector('form');
let makeCoverButton = document.querySelector('.make-new-button');
let homeView = document.querySelector('.home-view');
let savedView = document.querySelector('.saved-view');
let savedCoversSection = document.querySelector('.saved-covers-section');
let randCoverButton = document.querySelector('.random-cover-button');
let saveCoverButton = document.querySelector('.save-cover-button');
let homeButton = document.querySelector('.home-button');
let viewSavedButton = document.querySelector('.view-saved-button');
let makeBookButton = document.querySelector('.create-new-book-button');
let coverInput = document.querySelector('#cover');
let titleInput = document.querySelector('#title');
let describe1 = document.querySelector('#descriptor1');
let describe2 = document.querySelector('#descriptor2');
let coverImage = document.querySelector('.cover-image');
let coverTitle = document.querySelector('.cover-title');
let tagline1 = document.querySelector('.tagline-1');
let tagline2 = document.querySelector('.tagline-2');

// savedView
//saved covers[i].coverImg

form.classList.add('hidden');
homeButton.classList.add('hidden');
savedView.classList.add('hidden');

// Add your event listeners here 👇
makeCoverButton.addEventListener('click', coverButtonClick);
homeButton.addEventListener('click', homeButtonClick);
viewSavedButton.addEventListener('click', viewSavedCovers);
makeBookButton.addEventListener('click', makeMyBookClick);
saveCoverButton.addEventListener('click', saveCover);

// Create your event handlers and other functions here 👇
function coverButtonClick() {
  form.classList.remove('hidden');
  homeView.classList.add('hidden');
  randCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  savedView.classList.add('hidden');
  
  coverInput.value = '';
  titleInput.value = '';
  describe1.value = '';
  describe2.value = '';
}

function homeButtonClick() {
  homeButton.classList.add('hidden');
  form.classList.add('hidden');
  homeView.classList.remove('hidden');
  randCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  savedView.classList.add('hidden');
}

function viewSavedCovers() {
  homeView.classList.add('hidden');
  randCoverButton.classList.add('hidden');
  makeCoverButton.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  form.classList.add('hidden');
  savedView.classList.remove('hidden');
  saveCoverButton.classList.add('hidden')
}

function makeMyBookClick(e) {
  e.preventDefault();
  makeBook();
}

function makeBook() {
  if (coverInput && titleInput && describe1 && describe2){
    let newBook = createCover(coverInput.value, titleInput.value, describe1.value, describe2.value);

    covers.push(coverInput.value);
    titles.push(titleInput.value);
    descriptors.push(describe1.value, describe2.value);

    form.classList.add('hidden');
    homeView.classList.remove('hidden');
    saveCoverButton.classList.remove('hidden');
    savedView.classList.add('hidden');

    coverImage.src = coverInput.value;
    coverTitle.innerHTML = titleInput.value;
    tagline1.innerHTML = describe1.value;
    tagline2.innerHTML = describe2.value;

    return newBook;

  } else {
    return;
}

}

function saveCover() {
  let book = makeBook();
  savedCovers.push(book);
  homeView.classList.add('hidden');
  savedView.classList.remove('hidden');
  //copy homeview?
  let newBookDiv = document.createElement('section');
  let newImg = document.createElement('img')
  let newTitle = document.createElement('h2')
  let newTagline = document.createElement('h3')
  newBookDiv.classList.add('mini-cover')
  newImg.src = book.coverImg
  newImg.classList.add('mini-cover')
  newTitle.innerHTML = book.title
  newTitle.classList.add('cover-title')
  newTagline.innerHTML = `The Tale of ${book.tagline1} and ${book.tagline2}`
  newTagline.classList.add('tagline')
  newBookDiv.append(newImg, newTitle, newTagline)
  savedCoversSection.append(newBookDiv)
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
