
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

const dogLinkCreator = function(dogs) {
  let dogsArr = Object.keys(dogs);
  let completedArr = [];
  for(let i=0; i < dogsArr.length; i++) {
    let aTag = document.createElement('a');
    aTag.innerHTML = dogsArr[i];
    // debugger
    aTag.href = dogs[dogsArr[i]];
  
    // aTag.setAttribute('href', dogs[i]);
    let liTag = document.createElement('li');
    liTag.classList.add('dog-link');
    liTag.appendChild(aTag);
    completedArr.push(liTag);
  }
  // console.log(completedArr);
  return completedArr;
};

const attachDogLinks = function(){
  const dogLinks = dogLinkCreator(dogs);
  const ul = document.querySelector('.drop-down-dog-list');

  dogLinks.forEach(link => ul.appendChild(link));
}

attachDogLinks();


const handleLeave = function() {
  const dogList = document.querySelectorAll('.dog-link');
  dogList.forEach(li => li.classList.remove('open'));
};

const handleEnter = function() {
  const dogList = document.querySelectorAll('.dog-link');
  dogList.forEach(li => li.classList.add('open'));
};

const nav = document.querySelector('.drop-down-dog-nav');

nav.addEventListener('mouseenter', handleEnter);
nav.addEventListener('mouseleave', handleLeave);