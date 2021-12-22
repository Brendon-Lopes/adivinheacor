const rgbColor = document.getElementById('rgb-color');
const ballsContainer = document.getElementById('balls-container');
const ballsList = document.querySelectorAll('.ball');
const answer = document.querySelector('#answer');
const restartBtn = document.getElementById('reset-game');
const score = document.getElementById('score');
let scoreCounter = 0;
let round = true;

function genRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `(${r}, ${g}, ${b})`
}

function colorBalls() {
  let answer = Math.floor(Math.random() * 6);

  for (let i of ballsList) {
    i.style.backgroundColor = `rgb${genRandomColor()}`;
  }

  ballsList[answer].style.backgroundColor = `rgb${rgbColor.innerText}`;
}

rgbColor.innerText = genRandomColor();

colorBalls();

ballsContainer.addEventListener('click', (event) => {
  if (event.target.style.backgroundColor === `rgb${rgbColor.innerText}` && round === true) {
    scoreCounter += 3;
    score.innerText = `Placar: ${scoreCounter}`
    answer.innerText = 'Acertou!';
    round = false;
  } else if (round === true){
    answer.innerText = 'Errou! Tente novamente!';
  }
});

restartBtn.addEventListener('click', () => {
  rgbColor.innerText = genRandomColor();
  colorBalls();
  answer.innerText = 'Escolha uma cor';
  round = true;
});
