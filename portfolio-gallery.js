"use strict";


// LOAD DOM
$(document).ready(function () { //Run jQuery after document loads

    // TODO: Create a function that structures the project cards onto the page
    function projectCards(projects) {
        console.log(projects)
        $.each(projects, function (index, currentProject) { // Select the projects input --> Iterate through each project

            console.log(index + currentProject.img); // test

            let html = '<div class="card-body" id="project-body">'; // create the card body

            html += '<div class="card-img">' + currentProject.img + '</div>'; // get the project image
            html += '<div class="modal">' +
                    '<div class="modal-content">' +
                    '<div class="card-modal-img">' + currentProject.img + '</div>' +
                    '<div class="close-btn" ><span class="close-btn">&times;</span></div>' +
                    '<div class="card-modal-title" >' + currentProject.title + '</div>' +
                    '<div class="card-modal-desc" >' + currentProject.desc + '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';

            $('#project-cards').append(html);
        })

    }


    // TODO: Create an array of project objects
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

    // TODO: Create an array of codepen project objects
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

    // TODO: Call the function to put the project objects onto the page
    projectCards(projects);
    // projectCards(codepenProjects);

//-----------------------------------------
//-----------MODAL FUNCTIONS---------------
//-----------------------------------------

// Display modal on click
    $('.image').click(function () { // when an image is clicked

        $('.modal').css('display', 'block'); // SHOW the modal view

    });

// Hide modal on click
    $('.close-btn').click(function () { // when the close icon 'x' is clicked

        $('.close-btn').css('display', 'none'); // HIDE the modal view

    });

    $('body').click(function (event) { // when the window is clicked

        $('modal').css('display', 'none'); // HIDE the modal view

    });

});// ready()