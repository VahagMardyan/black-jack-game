const table = Array.from(document.querySelectorAll('table'));
const result = document.getElementById('result');

const block1Arr = [];
const block2Arr = [];

let count1 = 0;
let count2 = 0;

const min = 1;
const max = 10000;

const isPrime = function (num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const ClickFunction1 = (event) => {
    if (count1 === 100) {
        return;
    }
    if (!event.target.innerText && event.target.className === 'td1') {
        event.target.innerText = Math.round(Math.random() * (max - min) + min);
        if (isPrime(Number(event.target.innerText))) {
            block1Arr.push(Number(event.target.innerText));
        }
        count1++;
    }
    if (count1 === 100 && count2 === 100) {
        resultFunction();
    }
}

const ClickFunction2 = (event) => {
    if (count2 === 100) {
        return;
    }
    if (!event.target.innerText && event.target.className === 'td2') {
        event.target.innerText = Math.round(Math.random() * (max - min) + min);
        if (isPrime(Number(event.target.innerText))) {
            block2Arr.push(Number(event.target.innerText));
        }
        count2++;
    }
    if (count1 === 100 && count2 === 100) {
        resultFunction();
    }
}

const resultFunction = () => {
    if (block1Arr.length > block2Arr.length) {
        result.value = `In ${document.querySelectorAll('h2')[0].innerText} there are more prime numers`;
    } else if (block2Arr.length > block1Arr.length) {
        result.value = `In ${document.querySelectorAll('h2')[1].innerText} there are more prime numers`;
    } else {
        result.value = 'Both blocks have equal numbers of prime numbers';
    }
    document.querySelector('.length1').innerText = `${document.querySelectorAll('h2')[0].innerText} has ${block1Arr.length} prime number${block1Arr.length > 1 ? 's' : ''}`;
    document.querySelector('.length2').innerText = `${document.querySelectorAll('h2')[1].innerText} has ${block2Arr.length} prime number${block2Arr.length > 1 ? 's' : ''}`;
}

table[0].addEventListener('click', ClickFunction1);
table[1].addEventListener('click', ClickFunction2);

document.querySelector('button').addEventListener('click', () => {
    const confirm = window.confirm(`Are you sure?`);
    if (confirm) {
        window.location.reload();
    }
});
document.querySelectorAll('button')[1].addEventListener('click', resultFunction);

