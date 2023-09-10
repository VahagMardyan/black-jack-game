const header = document.querySelector('header');
const headdenHeader = document.querySelector('.header')
const main1 = document.querySelector('main');

let div;

let open = false;
let leftBarBtnHeight = 0

let line1, line2, line3, line4;

const leftBarAnim = () => {

    open = !open

    if (open) {

        line1.style.animationName = "lineHide"
        line1.style.animationDuration = '0.2s'

        line2.style.animationName = "lineRotate2"
        line2.style.animationDuration = '0.4s'

        line3.style.animationName = "lineRotate3"
        line3.style.animationDuration = '0.4s'


        line4.style.animationName = "lineHide"
        line4.style.animationDuration = '0.2s'

        div.style.top = 0 + 'px'
        // line2.style.animationName = 'rotating'
        // line3.style.animationName = 'rotating'

    } else {
        line1.style.animationName = "lineShow"
        line1.style.animationDuration = '0.5s'

        line2.style.animationName = "lineReRotate2"
        line2.style.animationDuration = '0.5s'

        line3.style.animationName = "lineReRotate3"
        line3.style.animationDuration = '0.5s'

        line4.style.animationName = "lineShow"
        line4.style.animationDuration = '0.5s'
        div.style.top = -div.offsetHeight - 70 + 'px'
    }
}

const creatingLeftBar = () => {
    div = document.createElement('div')
    div.id = 'leftBar'
    div.innerHTML = `
    <p class='width'><a href="../Home/">Home</a></p>
    <p class='width'><a href="../Team/team.html">Team</a></p>
    <p class='width'><a href="../Courses/courses.html">Courses</a></p>
    <p class="width"><a href="../Projects/project.html">Projects</a></p>
    <p class="width"><a href="../Careers/careers.html">Career</a></p>
    <p class='width'><a href="../Contacts/contact.html">Contact</a></p>
    <p class='width'><a href="../About/about.html">About</a></p>
    `

    div.style.width = 100 + '%'

    div.style.background = '#000837'
    div.style.position = 'absolute'
    div.style.zIndex = 800;
    headdenHeader.style.position = 'fixed'
    headdenHeader.style.width = 25 + '%'
    headdenHeader.style.zIndex = 2

    headdenHeader.appendChild(div)

    div.style.top = -div.offsetHeight - 70 + 'px'

}

function createHeader() {

    if (header.offsetWidth > 700) {
        header.innerHTML = `
    <nav>
        <ul>
            <li><a href="../Home/">Home</a></li>
            <li><a href="../Team/team.html">Team</a></li>
            <li><a href="../Courses/courses.html">Courses</a></li>
            <li><a href="../Projects/project.html">Projects</a></li>
            <li><a href="../Careers/careers.html">Career</a></li>
            <li><a href="../Contacts/contact.html">Contact</a></li>
            <li><a href="../About/about.html">About</a></li>
        </ul>
    </nav>
        `;
    } else {
        creatingLeftBar()

        header.innerHTML = `
        <div id='smallBar'>
            <div id='leftBarBtn'>
                <div class='line' id='line1'></div>
                <div class='line' id='line2'></div>
                <div class='line' id='line3'></div>
                <div class='line' id='line4'></div>
            </div>
        </div>
        `
        const leftBarBtn = document.querySelector('#leftBarBtn')
        const lines = Array.from(document.querySelectorAll('.line'))
        let btnHeight = leftBarBtn.offsetHeight / lines.length
        for (let i = 0; i < lines.length; i++) {
            lines[i].style.top = (i * btnHeight) + 2 * lines.length + 'px'
        }
        leftBarBtn.addEventListener('click', leftBarAnim)
    }

};

const footer = document.querySelector('footer');
function createFooter() {
    footer.innerHTML = `
    <p>&copy; 2023 N2G Brains. All rights reserved.</p>
    `;
};

createHeader();
createFooter();

line1 = document.querySelector('#line1');
line2 = document.querySelector('#line2');
line3 = document.querySelector('#line3');
line4 = document.querySelector('#line4');