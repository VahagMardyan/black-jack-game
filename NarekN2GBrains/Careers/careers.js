(function () {
    emailjs.init('FIND IT IN YOUR "https://www.emailjs.com/" account'); //mardyan2003@gmail.com will be send (change it after)
})();

const main = document.querySelector('main');
const section = document.createElement('section');
section.id = `forEmails`;

let container;

let index;
let inputName;
let inputMail;
let inputArea;
let applyButton;

const jobs = [
    {
        jobName: 'FrontEnd Developer',
        description: 'Working with our web-site'
    },
    {
        jobName: 'BackEnd Developer',
        description: 'Working with our web server'
    },
    {
        jobName: 'Graphic designer',
        description: 'Working with web design'
    },
    {
        jobName: 'HR specialist',
        description: 'Working with our personal'
    },
    {
        jobName: 'Project Manager',
        description: 'Leads our group'
    },
];

function sendingEmail(event) {
    event.preventDefault();
    if (inputName.value && inputMail.value && inputArea.value) {
        const parameters = {
            jobName: jobs[index]['jobName'],
            name: inputName.value,
            email: inputMail.value,
            message: inputArea.value,
        };
        const serviceID = `YOUR_SERVIDE_ID`; // change it for n2gbrain's email
        const templateID = `YOUR_TEMPLATE_ID`; // change it for n2gbrain's email
        emailjs.send(serviceID, templateID, parameters)
            .then(() => {
                const sound = document.createElement('audio');
                sound.src = `../soundEffect/success.mp3`;
                sound.autoplay = true;
                inputArea.style.color = 'green';
                inputArea.value = `Dear ${inputName.value}, your message sent successfully.Please send your resume to n2gbrains@gmail.com.`;
                inputName.value = ``;
                inputMail.value = ``;
            })
            .catch(error => console.log(error));
    } else {
        if (!inputName.value) {
            inputName.style.setProperty('--placeholder-color', 'black');
            inputName.placeholder = `Input your name:`;
            inputName.style.setProperty('--placeholder-color', 'red');
            inputName.placeholder = `Input your name:`;
        } else if (!inputMail.value) {
            inputMail.style.setProperty('--placeholder-color', 'red');
            inputMail.placeholder = `Input your mail:`;
        } else if (!inputArea.value) {
            inputArea.style.setProperty('--placeholder-color', 'red');
            inputArea.placeholder = `Input message:`;
        }
    }
};

function emailForm(event) {

    main.style.justifyContent = `space-evenly`;

    index = event.target.id;

    section.innerHTML = ``;

    section.innerHTML = `
    
    <h2>${jobs[index].jobName}</h2>
    <form action="">
    <label for="name">Name</label>
    <input id='name' type="text" placeholder="Input Your name:" autocomplete="off">
    <label for="email">Your Email</label>
    <input id='email' type="email" name="email" placeholder="Please enter a valid email:" autocomplete="off">
    <label for="message">Message</label>
    <textarea id='textArea' placeholder="Tell us about yourself:" type='text' autocomplete="off"></textarea>
    <button class='applyButton' title="Send Email">Send Vacancion for ${jobs[index].jobName}</button>
    </form>
    
    `;
    main.append(section);

    container.style.left = '10%';

    inputName = document.querySelector('#name');
    inputMail = document.querySelector('#email');
    inputArea = document.querySelector('#textArea');
    applyButton = document.querySelector('.applyButton');
    applyButton.addEventListener('click', sendingEmail);

};

function createJobs() {
    container = document.createElement('section');
    container.className = `container`;
    container.innerHTML = `<h2>We have vacancies for</h2>`;

    jobs.map((job, ind) => {

        const div = document.createElement('div');
        div.className = 'jobsBlock';

        const h3 = document.createElement('h3');
        h3.innerText = job.jobName;
        
        const p = document.createElement('p');
        p.innerText = job.description;
        
        const applyBtn = document.createElement('button');
        applyBtn.className = `btn`;
        applyBtn.id = `${ind}`;
        applyBtn.innerText = `Apply for this job`;
        applyBtn.addEventListener('click', emailForm);
        
        div.append(h3, p, applyBtn);

        container.append(div);
    });

    main.append(container);
    main.style.height = container.offsetHeight + 'px';

};

createJobs();
