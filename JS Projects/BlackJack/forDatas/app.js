// let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, `J`, `Q`, `K`, `A`]
// let bigBox = document.querySelector(`.a`)
// let bigBox2 = document.querySelector(`.b`)
// let child1 = Array.from(document.querySelectorAll(`.a1`))
// let child2 = Array.from(document.querySelectorAll(`.b1`))
// let point1 = document.querySelector(`span`)
// let pointDig=Number(point1.innerText)
// let num 

// function randCard() {
//     for (let i = 0; i < child2.length; i++) {
//         let randDig = Math.round(Math.random() * 12)
//         child2[i].innerText = cards[randDig]
//     }
// }
// randCard()
// for (let el of child1) {
//     el.addEventListener(`click`,(event) => {
//         console.log(el)
       
//      let randDig = Math.round(Math.random() * 12)
//       el.innerText = cards[randDig]
//       num = cards[randDig]
        
//       let str = +point1.innerText
//     if (el.innerText == "J" || el.innerText == "K" || el.innerText == "Q") {
//         str += 10
//         point1.innerText = str

//     }else {
//         str += +el.innerText
//         point1.innerText = str
//     }
// event.target.style.backgroundColor = `white`
// })
// }

////////////////////////////////////////////////////////////

// const gamer1Cards = Array.from(document.querySelectorAll('.gamer1 div'));
// const gamer2Cards = Array.from(document.querySelectorAll('.gamer2 div'));
// const gamer1Btn = document.querySelector('.gamer1 button');
// const gamer2Btn = document.querySelector('.gamer2 button');

// const point1 = document.querySelector('.gamer1 p span');
// const point2 = document.querySelector('.gamer2 p span');
// const result = document.querySelector('#result');
// let gameOver = false;
// let currentPlayer = 'gamer1';

// const cards = [
//   { name: 2, value: 2, mast: 'heard', url: ('./cards/2.jpg') }, { name: 3, value: 3, mast: 'heard', url: ('./cards/3.jpg') }, { name: 4, value: 4, mast: 'heard', url: ('./cards/4.jpg') },
//   { name: 5, value: 5, mast: 'heard', url: ('./cards/5.jpg') }, { name: 6, value: 6, mast: 'heard', url: ('./cards/6.jpg') }, { name: 7, value: 7, mast: 'heard', url: ('./cards/7.jpg') },
//   { name: 8, value: 8, mast: 'heard', url: ('./cards/8.jpg') }, { name: 9, value: 9, mast: 'heard', url: ('./cards/9.jpg') }, { name: 10, value: 10, mast: 'heard', url: ('./cards/10.jpg') },
//   { name: 'J', value: 10, mast: 'heard', url: ('./cards/J.jpg') }, { name: 'Q', value: 10, mast: 'heard', url: ('./cards/Q.jpg') }, { name: 'K', value: 10, mast: 'heard', url: ('./cards/K.jpg') },
//   { name: 'A', value: undefined, mast: 'heard', url: ('./cards/A.jpg') },
// ];

// let score1 = 0;
// let score2 = 0;

// gamer1Cards.forEach((el) => {
// result.value = `${currentPlayer}'s turn`;
//   el.addEventListener('click', () => {
//     if (currentPlayer !== 'gamer1' || gameOver) {
//       return;
//     }
//     if (!el.innerText) {
//       let randomNum = Math.floor(Math.random() * cards.length);
//       el.style.backgroundImage = `url(${cards[randomNum].url})`;
//       el.style.backgroundSize = '100px';
//       if (randomNum === 12) {
//         let value;
//         while (true) {
//           value = +prompt('Choose the Ace value: 1 or 11');
//           if (value === 1 || value === 11) {
//             break;
//           } else {
//             alert('You can choose only 1 or 11');
//           }
//         }
//         cards[12].value = value;
//       }

//       score1 += cards[randomNum].value || 0;
//       point1.innerText = score1;

//       if (score1 > 21) {
//         result.value = 'Game Over - Gamer 2 Wins';
//         gameOver = true;
//         return;
//       } else if (score1 === 21 || score2 === 21) {
//         result.value = `BlackJack ${currentPlayer} WON!`;
//         gameOver = true;
//         return;
//       } else {
//         currentPlayer = 'gamer2';
//         result.value = `${currentPlayer}'s turn`;
//       }
//     }
//   });
// });

// gamer2Cards.forEach((el) => {
//   el.addEventListener('click', () => {
//     if (currentPlayer !== 'gamer2' || gameOver) {
//       result.value = `${currentPlayer}'s turn`;
//       return;
//     }
//     if (!el.innerText) {
//       let randomNum = Math.floor(Math.random() * cards.length);
//       el.style.backgroundImage = `url(${cards[randomNum].url})`;
//       el.style.backgroundSize = '100px';
//       if (randomNum === 12) {
//         let value;
//         while (true) {
//           value = +prompt('Choose the Ace value: 1 or 11');
//           if (value === 1 || value === 11) {
//             break;
//           } else {
//             alert('You can choose only 1 or 11');
//           }
//         }
//         cards[12].value = value;
//       }
//       score2 += cards[randomNum].value || 0;
//       point2.innerText = score2;

//       if (score2 > 21) {
//         result.value = 'Game Over - Gamer 1 Wins';
//         gameOver = true;
//         return;
//       } else if (score1 === 21 || score2 === 21) {
//         result.value = `BlackJack ${currentPlayer} WON!`;
//         gameOver = true;
//         return;
//       } else {
//         currentPlayer = 'gamer1';
//         result.value = `${currentPlayer}'s turn`;
//       }
//     }
//   });
// });

// const endGame = (loser, winner) => {
//   result.value = `Game Over - ${loser} Loses`;
//   gameOver = true;
//   currentPlayer = winner;
//   gamer1Btn.disabled = true;
//   gamer2Btn.disabled = true;

//   if (score1 > 21 || (score2 <= 21 && score2 > score1)) {
//     result.value = 'Game Over - Gamer 2 Wins';
//     return;
//   } else if (score1 === score2) {
//     result.value = `Game Over - It's a tie!`;
//     return;
//   } else {
//     result.value = 'Game Over - Gamer 1 Wins';
//     return;
//   }
// };

// gamer1Btn.addEventListener('click', () => {
//   if (currentPlayer !== 'gamer1' || gameOver) {
//     return;
//   }
//   endGame('Gamer 1', 'gamer2');
// });

// gamer2Btn.addEventListener('click', () => {
//   if (currentPlayer !== 'gamer2' || gameOver) {
//     return;
//   }
//   endGame('Gamer 2', 'gamer1');
// });
