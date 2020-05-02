"use strict";


// LOAD DOM
$(document).ready(function () { //Run jQuery after document loads

//-----------------------------------------
//--------SHOW PROJECTS FUNCTION-----------
//-----------------------------------------
    // TODO: Create a function that structures the project cards onto the page
    function projectCards(projects) {

        $.each(projects, function (index, currentProject) { // Select the projects input --> Iterate through each project

            let html = '<div class="container card-body">'
                    html += '<div class="card-title">'+ currentProject.title+ '</div>'
                    html += '<div class="card-img"><div class="overlay-effect"></div>' + currentProject.img + '</div>'
                    html += '<p class="card-date"><em>'+ currentProject.date+ '</em></p>'
                    html += '<div class="card-overlay">'
                         html += '<h4 class="card-title">'+ currentProject.title+ '</h4>'
                    html += '</div>'
                html += '</div>'
                html+= '</div>';

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
            date: 'February 2020',
            desc: 'This is the project description.'
        },
        {
            id: 2,
            title: 'Movies Application',
            img: '<img src="img/brooke-lark-W1B2LpQOBxA-unsplash.jpg" class="image" alt="">',
            date: 'March 2020',
            desc: 'This is the project description.'
        },
        {
            id: 3,
            title: 'AdLister',
            img: '<img src="img/giorgio-trovato-v_bri4iVuiM-unsplash.jpg" class="image" alt="">',
            date: 'May 2020',
            desc: 'This is the project description.'
        },
        {
            id: 4,
            title: 'Capstone',
            img: '<img src="img/tyler-lastovich-e31ANd1PXUw-unsplash.jpg" class="image" alt="">',
            date: 'May 2020',
            desc: 'This is the project description.'
        },
        {
            id: 5,
            title: 'Tamagotchi RPG',
            img: '<img src="img/giorgio-trovato-v_bri4iVuiM-unsplash.jpg" class="image" alt="">',
            date: 'April 2020',
            desc: 'This is the project description.'
        },
        {
            id: 6,
            title: 'Fortune Teller',
            img: '<img src="img/giorgio-trovato-v_bri4iVuiM-unsplash.jpg" class="image" alt="">',
            date: 'February 2020',
            desc: 'This is the project description.'
        },
        {
            id: 7,
            title: 'Weather Map API',
            img: '<img src="img/ben-kolde-Ajcipx1VDXI-unsplash.jpg" class="image" alt="">',
            date: 'March 2020',
            desc: 'This is the project description.'
        },
    ];

    // TODO: Call the function to put the project objects onto the page
    projectCards(projects);


//-----------------------------------------
//-------DESCRIPTION VIEW FUNCTIONS--------
//-----------------------------------------
//
// // Display modal on click
//     $('.image').on("click", "img", function() {// when an image is clicked
//
//         $('.modal').css('display', 'block'); // SHOW the modal view
//
//     });
//
// // Hide modal on click
//     $('.close-btn').on("click", "div", function() { // when an image is clicked
//
//         $('.modal').css('display', 'none'); // SHOW the modal view
//
//     });

});// ready()