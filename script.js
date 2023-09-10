const gamer1Cards = Array.from(document.querySelectorAll('.a1'));
const gamer2Cards = Array.from(document.querySelectorAll('.b1'));
const gamer1Btn = document.querySelector('#btnG1');
const gamer2Btn = document.querySelector('#btnG2');

const point1 = document.querySelector('.gamer1 p span');
const point2 = document.querySelector('.gamer2 p span');
const result = document.querySelector('#result');

let gameOver = false;
let currentPlayer = 'gamer1';

const cards = [
  { name: 2, value: 2, mast: 'heart', url: './cards/2.jpg' },
  { name: 3, value: 3, mast: 'heart', url: './cards/3.jpg' },
  { name: 4, value: 4, mast: 'heart', url: './cards/4.jpg' },
  { name: 5, value: 5, mast: 'heart', url: './cards/5.jpg' },
  { name: 6, value: 6, mast: 'heart', url: './cards/6.jpg' },
  { name: 7, value: 7, mast: 'heart', url: './cards/7.jpg' },
  { name: 8, value: 8, mast: 'heart', url: './cards/8.jpg' },
  { name: 9, value: 9, mast: 'heart', url: './cards/9.jpg' },
  { name: 10, value: 10, mast: 'heart', url: './cards/10.jpg' },
  { name: 'J', value: 10, mast: 'heart', url: './cards/J.jpg' },
  { name: 'Q', value: 10, mast: 'heart', url: './cards/Q.jpg' },
  { name: 'K', value: 10, mast: 'heart', url: './cards/K.jpg' },
  { name: 'A', value: undefined, mast: 'heart', url: './cards/A.jpg' }
];

let score1 = 0;
let score2 = 0;
const url = window.getComputedStyle(gamer1Cards[0]).getPropertyValue('background-image');

const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
let count1 = 0;
let count2 = 0;
const local = window.localStorage;

function forCount1() {
  c1.innerText = count1;
}

function forCount2() {
  c2.innerText = count2;
}

function updateC1() {
  local.setItem('count1', count1);
}

function updateC2() {
  local.setItem('count2', count2);
}

function chekingWinner() {
  if (score1 >= 21 || score2 >= 21) {
    gameOver = true;
  }
  if (gameOver) {
    if (score1 > 21 && score2 > 21) {
      result.value = "Both players bust! It's a tie";
    } else if (score1 > 21) {
      result.value = 'Winner is gamer2';
      count2++;
      forCount2();
      updateC2();
    } else if (score2 > 21) {
      result.value = 'Winner is gamer1';
      count1++;
      forCount1();
      updateC1();
    } else if (score1 > score2) {
      result.value = 'Winner is gamer1';
      count1++;
      forCount1();
      updateC1();
    } else if (score1 === score2) {
      result.value = "It's a tie";
    } else {
      result.value = 'Winner is gamer2';
      count2++;
      forCount2();
      updateC2();
    }
  }
}

// result.value=`${currentPlayer}'s turn`;

function queue() {
  if(currentPlayer==='gamer1') {
    currentPlayer='gamer2';
    result.style.color='blue';
  } else {
    currentPlayer='gamer1';
    result.style.color='yellow';
  }
  result.value=`${currentPlayer}'s turn`
}

result.value = `${currentPlayer}'s turn`;

gamer1Cards.forEach((el, i) => {
  el.addEventListener('click', () => {
    if (currentPlayer !== 'gamer1' || gameOver) {
      return;
    }

    if (i !== 0) {
      const prevCard = gamer1Cards[i - 1];
      if (window.getComputedStyle(prevCard).getPropertyValue('background-image') === url) {
        result.value = ('Open previous card at first!!');
        result.style.color = 'red';
        return;
      }
    }
    result.style.color = 'black';
    if (!el.innerText) {
      let randomNum = Math.floor(Math.random() * cards.length);
      el.style.backgroundImage = `url(${cards[randomNum].url})`;
      el.style.backgroundSize = '100%';
      if (randomNum === 12) {
        let value;
        while (true) {
          value = +prompt('Choose the Ace value: 1 or 11');
          if (value === 1 || value === 11) {
            break;
          } else {
            alert('You can choose only 1 or 11');
          }
        }
        cards[12].value = value;
      }
      score1 += cards[randomNum].value;
      point1.innerText = score1;
      if (score1 > 21) {
        result.value = 'Game Over - Gamer 2 Wins';
        count2++;
        forCount2();
        updateC2();
        gameOver = true;
        return;
      } else if (score1 === 21) {
        result.value = 'BlackJack Gamer 1 WON!';
        count1++;
        forCount1();
        updateC1();
        gameOver = true;
        return;
      } else {
        queue();
      }
    }
  });
});

gamer2Cards.forEach((el, i) => {
  el.addEventListener('click', () => {
    if (currentPlayer !== 'gamer2' || gameOver) {
      return;
    }

    if (i !== 0) {
      const prevCard = gamer2Cards[i - 1];
      if (window.getComputedStyle(prevCard).getPropertyValue('background-image') === url) {
        result.value = ('Open preivous card at first!!');
        result.style.color = 'red';
        return;
      }
    }
    result.style.color = 'black';
    if (!el.innerText) {
      let randomNum = Math.floor(Math.random() * cards.length);
      el.style.backgroundImage = `url(${cards[randomNum].url})`;
      el.style.backgroundSize = '100%';
      if (randomNum === 12) {
        let value;
        while (true) {
          value = +prompt('Choose the Ace value: 1 or 11');
          if (value === 1 || value === 11) {
            break;
          } else {
            alert('You can choose only 1 or 11');
          }
        }
        cards[12].value = value;
      }
      score2 += cards[randomNum].value;
      point2.innerText = score2;

      if (score2 > 21) {
        result.value = 'Game Over - Gamer 1 Wins';
        count1++;
        forCount1();
        updateC1();
        gameOver = true;
        return;
      } else if (score2 === 21) {
        result.value = 'BlackJack Gamer 2 WON!';
        count2++;
        forCount2();
        updateC2();
        gameOver = true;
        return;
      } else {
        queue();
      }
    }
  });
});

if (local.getItem('count1')) {
  count1 = local.getItem('count1');
  c1.innerText = count1 || 0;
}
if (local.getItem('count2')) {
  count2 = local.getItem('count2');
  c2.innerText = count2 || 0;
}

function resetCount() {
  c1.innerText = 0;
  c2.innerText = 0;
  local.clear();
  location.reload();
}

document.querySelector('.reset').addEventListener('click', () => resetCount());
document.querySelector('.again').addEventListener('click', () => location.reload());

gamer1Btn.addEventListener('click', () => {
  if (currentPlayer !== 'gamer1' || gameOver) {
    return;
  }
  gameOver = true;
  gamer1Btn.disabled=true;
  gamer2Btn.disabled=true;
  result.value = 'Game Over - Gamer 2 Wins';
  count2++;
  forCount2();
  updateC2();
});

gamer2Btn.addEventListener('click', () => {
  if (currentPlayer !== 'gamer2' || gameOver) {
    return;
  }
  gamer1Btn.disabled=true;
  gamer2Btn.disabled=true;
  gameOver = true;
  result.value = 'Game Over - Gamer 1 Wins';
  count1++;
  forCount1();
  updateC1();
});

document.querySelectorAll('.btn')[0].addEventListener('click',queue);
document.querySelectorAll('.btn')[1].addEventListener('click',queue);

