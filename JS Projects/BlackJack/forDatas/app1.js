// const gamer1Cards = Array.from(document.querySelectorAll('.gamer1 div'));
// const gamer2Cards = Array.from(document.querySelectorAll('.gamer2 div'));
// const point1=document.querySelector('.gamer1 p span');

// const gamer1Btn = document.querySelector('.gamer1 button');
// const gamer2Btn = document.querySelector('.gamer2 button');
// const point2=document.querySelector('.gamer2 p span');

// const result=document.querySelector('#result');
// let gameOver=false;
// let currentPlayer='gamer1';

// const cards = [
//   {name: 2,value: 2,mast: 'heard'},{name: 3,value: 3,mast: 'heard'},{name: 4,value: 4,mast: 'heard'},
//   {name: 5,value: 5,mast: 'heard'},{name: 6,value: 6,mast: 'heard'},{name: 7,value: 7,mast: 'heard'},
//   {name: 8,value: 8,mast: 'heard'},{name: 9,value: 9,mast: 'heard'},{name: 10,value: 10,mast: 'heard'},
//   {name: 'J',value: 10,mast: 'heard'},{name: 'Q',value: 10,mast: 'heard'},{name: 'K',value: 10,mast: 'heard'},
//   {name: 'A',value: undefined,mast: 'heard'},
// ];

// let score1=0;
// let score2=0;

// gamer1Cards.map((el) => {
// result.value=`${currentPlayer}'s turn`
// el.addEventListener('click',()=>{
//   if(currentPlayer!=='gamer1' || gameOver){
//       return;
//     }
//   if(!el.innerText){
//     let randomNum=Math.floor(Math.random()*12);
//     el.innerText=cards[randomNum].name;
    
//     if(randomNum===12){
//       const value=+prompt('Choose the ace 1 or 11');
//       cards[12].value=value;
//     }
  
    
//     score1 += cards[randomNum].value || 0;
//     point1.innerText = score1;

//       if (score1 > 21) {
//         result.value = 'Game Over - Gamer 2 Wins';
//         gameOver = true;
//       } else if (score1 === 21 || score2 === 21) {
//         result.value = `BlackJack ${currentPlayer} WON!`;
//         gameOver = true;
//       } else {
//         currentPlayer = 'gamer2';
//         result.value = `${currentPlayer}'s turn`;
//       }
//     }
//   });
// });
  
// gamer2Cards.map((el) => {
//   el.addEventListener('click', (event) => {
//     if (currentPlayer !== 'gamer2' || gameOver) {
//       result.value = `${currentPlayer}'s turn`
//       return;
//     }
//     if (!el.innerText) {
//       let randomNum = Math.floor(Math.random() * 12);
//       el.innerText = cards[randomNum].name;

//       if(randomNum===12){
//         const value=+prompt('Choose the ace 1 or 11');
//         cards[12].value=value;
//       }
    

//       score2 += cards[randomNum].value || 0;
//       point2.innerText = score2;

//       if (score2 > 21) {
//         result.value = 'Game Over - Gamer 1 Wins';
//         gameOver = true;
//       } else if (score1 === 21 || score2 === 21) {
//         result.value = `BlackJack ${currentPlayer} WON!`;
//         gameOver = true;
//       } else {
//         currentPlayer = 'gamer1';
//         result.value = `${currentPlayer}'s turn`;
//       }
//     }
//   });
// });

// gamer1Btn.addEventListener('click', () => {
//   if (currentPlayer !== 'gamer1' || gameOver) {
//     return;
//   }
//   result.value = 'Game Over - Gamer 1 Loses';
//   gameOver = true;
//   currentPlayer = 'gamer2';
//   gamer1Btn.disabled = true;
//   gamer2Btn.disabled = false;

//   // Calculate the winner based on the scores
//   if (score1 > 21 || (score2 <= 21 && score2 > score1)) {
//     result.value = 'Game Over - Gamer 2 Wins';
//   } else if (score1 === score2) {
//     result.value = 'Game Over - It\'s a tie!';
//   } else {
//     result.value = 'Game Over - Gamer 1 Wins';
//   }
// });

// gamer2Btn.addEventListener('click', () => {
//   if (currentPlayer !== 'gamer2' || gameOver) {
//     return;
//   }
//   result.value = 'Game Over - Gamer 2 Loses';
//   gameOver = true;
//   currentPlayer = 'gamer1';
//   gamer2Btn.disabled = true;
//   gamer1Btn.disabled = false;

//   // Calculate the winner based on the scores
//   if (score2 > 21 || (score1 <= 21 && score1 > score2)) {
//     result.value = 'Game Over - Gamer 1 Wins';
//   } else if (score1 === score2) {
//     result.value = 'Game Over - It\'s a tie!';
//   } else {
//     result.value = 'Game Over - Gamer 2 Wins';
//   }
// });