const colors = ['#264653' , '#2a9d8f','#e9c46a','#f4a261','#e76f51','#114b5f','#88d498','#408F84','#3C154F'];

const btn = document.getElementById ('btn');
const color = document.querySelector ('.color');

btn.addEventListener("click" , function() {

  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
return Math.floor(Math.random()*colors.length);

};