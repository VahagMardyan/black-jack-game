(function () {
  emailjs.init('FIND IT IN YOUR "https://www.emailjs.com/" account');
})();

const main = document.querySelector('main');
const section = document.createElement('section');
section.id = 'coursEmale';

let section1;

let index;
let inputName;
let inputMail;
let inputArea;
let submitBtn;

const courses = [
  {
    coursName: 'FrontEnD Development',
    coursDescription: 'Learn HTML, CSS, and JavaScript to build modern websites.',
  },
  {
    coursName: 'BackEnD Development',
    coursDescription: 'Learn Node JS and Pyton.',
  },
  {
    coursName: 'QA',
    coursDescription: 'Master QA techniques.',
  },
  {
    coursName: 'Graphic Design',
    coursDescription: 'PhotoShop, Ilustrator',
  },
  {
    coursName: 'Game Development',
    coursDescription: 'ifaskmfklsm'
  },
];

const sendingEmail = (event) => {
  event.preventDefault();

  if (inputName.value && inputMail.value && inputArea.value) {
    let parametrs = {
      coursName: courses[index]['coursName'],
      name: inputName.value,
      mail: inputMail.value,
      message: inputArea.value,
    };

    const serviceID = `YOUR SERVICE ID`;
    const templateID = `YOUR TEMPLATE ID`;

    emailjs.send(serviceID, templateID, parametrs)
      .then(
        () => {
          const sound = document.createElement('audio');
          sound.src = `../soundEffect/success.mp3`;
          sound.autoplay = true;
          inputArea.style.color = 'green';
          inputArea.value = `Dear ${inputName.value}, your message sent successfully`;
          inputName.value = ``;
          inputMail.value = ``;
        }
      )
      .catch(err => console.log(err));
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
}

const emailForm = (ev) => {

  main.style.justifyContent = 'space-evenly';
  index = ev.target.id;

  section.innerHTML = '';
  section.innerHTML = `
    <h2>${courses[index]['coursName']}</h2>

    <form action="">
      <label for="name">Name</label>
      <input id='name' type="text" placeholder="Input Your name:" autocomplete="off"> 
      <label for="email">Your Email</label>
      <input id='email' type="email" placeholder="Please enter a valid email:" autocomplete="off">
      <label for="message">Message</label>
      <textarea id='textArea' placeholder="Input your message:" type='text' autocomplete="off"></textarea>
      <button class='submitBtn' title="Send Email">Submit for ${courses[index]['coursName']} now</button>
    </form>
    `

  main.append(section);
  section1.style.left = '10%';
  inputName = document.querySelector('#name');
  inputMail = document.querySelector('#email');
  inputArea = document.querySelector('#textArea');
  submitBtn = document.querySelector('.submitBtn');

  submitBtn.addEventListener('click', sendingEmail);
}

const createOurCourses = () => {
  section1 = document.createElement('section');
  section1.id = "courses";

  section1.innerHTML = `<h2>Our Courses</h2>`;
  courses.map((course, ind) => {

    const div = document.createElement('div');
    div.className = "course-card";

    const h3 = document.createElement('h3');
    h3.innerText = course['coursName'];

    const p = document.createElement('p');
    p.innerText = course['coursDescription'];

    const button = document.createElement('button');
    button.className = "btn";
    button.id = `${ind}`;
    button.innerText = 'Encroll Now';
    button.addEventListener('click', emailForm);

    div.append(h3,p,button);

    section1.append(div);

  });

  main.append(section1);
  main.style.height = section1.offsetHeight + 'px';

};

createOurCourses();

