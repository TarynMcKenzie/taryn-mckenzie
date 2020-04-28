"use strict";


function projectCards(project) { //put the projects on the page!

    let html = '<div class="card-body" id="project-body">'; // create the card body
    html += '<div class="card-img">' + project.img + '</div>'; // get the project image
    html += '<div class="modal">' +
        '<div class="modal-content">' +
        '<div class="card-modal-img">' + project.img + '</div>' +
        '<div class="close-btn" ><span class="close-btn">&times;</span></div>' +
        '<div class="card-modal-title" >' + project.title + '</div>' +
        '<div class="card-modal-desc" >' + project.desc + '</div>' +
        '</div>' +
        '</div>'; // Project Modal to show on click of image
    html += '</div>'; // end table row

    return html; //return the div
}

function renderProjectCards(projects) { //loops through projects, add each project to html
    let html = '';
    for (let i = 0; i <= projects.length - 1; i++) {
        html += projectCards(projects[i]);
    }
    return html;
}


const projects = [ // An array of projects
    {
        id: 1,
        title: 'Coffee Project',
        img: '<img src="img/ben-kolde-Ajcipx1VDXI-unsplash.jpg" class="image"  alt="">',
        desc: 'This is the project description.'
    },
    {
        id: 2,
        title: 'Movies Application',
        img: '<img src="img/brooke-lark-W1B2LpQOBxA-unsplash.jpg" class="image" alt="">',
        desc: 'This is the project description.'
    },
    {
        id: 3,
        title: 'AdLister',
        img: '<img src="img/giorgio-trovato-v_bri4iVuiM-unsplash.jpg" class="image" alt="">',
        desc: 'This is the project description.'
    },
    {
        id: 4,
        title: 'Capstone',
        img: '<img src="img/tyler-lastovich-e31ANd1PXUw-unsplash.jpg" class="image" alt="">',
        desc: 'This is the project description.'
    },
    {
        id: 5,
        title: 'Tamagotchi RPG',
        img: '<img src="img/giorgio-trovato-v_bri4iVuiM-unsplash.jpg" class="image" alt="">',
        desc: 'This is the project description.'
    },
    {
        id: 6,
        title: 'Fortune Teller',
        img: '<img src="img/giorgio-trovato-v_bri4iVuiM-unsplash.jpg" class="image" alt="">',
        desc: 'This is the project description.'
    },
    {
        id: 7,
        title: 'Weather Map API',
        img: '<img src="img/ben-kolde-Ajcipx1VDXI-unsplash.jpg" class="image" alt="">',
        desc: 'This is the project description.'
    },
];


const codepenProjects = [ // An array of codepen projects
    {
        id: 1,
        title: 'Login Form',
        img: '<img src="img/codepen-form-login.png" class="image"  alt="Login form snapshot from Codepen">',
        url: '"https://codepen.io/tarynmckenzie/full/vYNxzjQ"',
        desc: 'This is the project description.'
    },
    {
        id: 2,
        title: 'Search Bar',
        img: '<img src="img/tyler-lastovich-e31ANd1PXUw-unsplash.jpg" class="image" alt="">',
        desc: 'This is the project description.'
    },
    {
        id: 3,
        title: 'Calculator',
        img: '<img src="img/ben-kolde-Ajcipx1VDXI-unsplash.jpg" class="image" alt="">',
        desc: 'This is the project description.'
    },
    {
        id: 4,
        title: 'Card',
        img: '<img src="img/tyler-lastovich-e31ANd1PXUw-unsplash.jpg" class="image" alt="">',
        desc: 'This is the project description.'
    },
];


const portfolioProjectsSection = document.querySelector('#project-cards'); // get the id for the card div
portfolioProjectsSection.innerHTML = renderProjectCards(projects); // place cards into queried div

const codepenProjectsSection = document.querySelector('#codepen-cards'); // get the id for the card div
codepenProjectsSection.innerHTML = renderProjectCards(codepenProjects); // place cards into queried div


//-----------MODAL FUNCTIONS----------------
let modalBtn = document.querySelector(".card-img") //get the card image
let modal = document.querySelector(".modal") // get the modal
let closeBtn = document.querySelector(".close-btn") // get the close icon

// Display modal on click
modalBtn.onclick = function () {
    modal.style.display = "block" // when an image is clicked --> change the display style to block
}
// Hide modal on click
closeBtn.onclick = function () {
    modal.style.display = "none" // When the modal is clicked --> change the display style to none
}
window.onclick = function (e) {
    if (e.target === modal) {   // check if the click action is within the modal
        modal.style.display = "none"// When the modal is clicked --> change the display style to none
    }
}