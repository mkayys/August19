
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
    // aTag.href = dogs[i];
    aTag.setAttribute('href', dogs[i]);
    let liTag = document.createElement('li');
    liTag.classList.add('dog-link');
    liTag.appendChild(aTag);
    completedArr.push(liTag);
  }
  // console.log(completedArr);
  return completedArr;
};

const attachDogLink = function(){

}

