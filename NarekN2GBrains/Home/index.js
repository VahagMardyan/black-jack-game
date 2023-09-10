const main = document.querySelector('main');

const cratingMain = () => {

    for (let i = 0; i < 6; i++) {
        const card = document.createElement('div');
        card.className = 'homeCard';

        const leftSide = document.createElement('div');
        leftSide.className = 'leftSide';

        const rightSide = document.createElement('div');
        rightSide.className = 'rightSide';
        if (i > 0) {
            const hr = document.createElement('hr');
            main.appendChild(hr);
        }

        main.appendChild(card);

        card.appendChild(leftSide);

        card.appendChild(rightSide);

    }

}

cratingMain();