const teamArr = [
    {
        name: 'Narek',
        Surname: 'Ghazaryan',
        imgURL: '',
        companies: ['AOD', 'Zaimix', 'BN Systems',
            'TeachMe', 'Think Engineering',
            'Smart Code', 'VirusLt', 'SFL',
            'DataArt', 'N2G Brains'
        ]
    },
    {
        name: 'Narek',
        Surname: 'Ghazaryan',
        imgURL: '',
        companies:[]
    },
    {
        name: 'Poxos',
        Surname: 'Poxosyan',
        imgURL: '',
        companies:[]
    },
    {
        name: 'Narek',
        Surname: 'Ghazaryan',
        imgURL: '',
        companies:[]
    },
    {
        name: 'Narek',
        Surname: 'Ghazaryan',
        imgURL: '',
        companies:[]
    },
    {
        name: 'Narek',
        Surname: 'Ghazaryan',
        imgURL: '',
        companies:[]
    },
];

const main=document.querySelector('main')

const team = document.createElement('section');
team.id='team';

main.append(team);

teamArr.map(el => {
    const block = document.createElement('div');
    block.classList.add('card');
    const list = document.createElement('ol');
    list.style.listStyleType = 'none';
    const companiesHeading = document.createElement('li');
    companiesHeading.textContent = 'Companies';
    companiesHeading.style.fontWeight = 'bold';
    list.append(companiesHeading);
        el.companies?.map(el => {
        const listItem = document.createElement('li');
        listItem.textContent = el;
        list.append(listItem);
    });
    block.innerHTML = `
        <img width="30%" height="30%" src="${el.imgURL}" draggable="false">
        <p>${el.name} ${el.Surname}</p>
    `;
    block.append(list);
    team.append(block);
});

