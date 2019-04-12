let catPicture = document.getElementById('cat-picture');
let advice = document.getElementById('advice');

const randomCatPicture = fetch('https://api.thecatapi.com/v1/images/search')
  .then(res => res.json())
  .then(res => {
    catPicture.innerHTML = `<img src="${res[0].url}" alt=""/>`;
  });

const randomAdvice = fetch(`https://api.adviceslip.com/advice`)
  .then(res => res.json())
  .then(res => {
    advice.innerHTML = res.slip.advice;
  });
