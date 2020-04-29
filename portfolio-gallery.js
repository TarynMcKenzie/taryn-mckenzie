"use strict";


// LOAD DOM
$(document).ready(function () { //Run jQuery after document loads

//-----------------------------------------
//--------SHOW PROJECTS FUNCTION-----------
//-----------------------------------------
    // TODO: Create a function that structures the project cards onto the page
    function projectCards(projects) {

        $.each(projects, function (index, currentProject) { // Select the projects input --> Iterate through each project

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

//-----------------------------------------
//-----------PROJECTS TO SHOW--------------
//-----------------------------------------
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

    // TODO: Call the function to put the project objects onto the page
    projectCards(projects);

//-----------------------------------------
//-----------MODAL FUNCTIONS---------------
//-----------------------------------------

// Display modal on click
    $('.image').click(function () { // when an image is clicked

        $('.modal').css('display', 'block'); // SHOW the modal view

    });

// Hide modal on click
    $('.close-btn').click(function () { // when an image is clicked

        $('.modal').css('display', 'none'); // SHOW the modal view

    });

});// ready()