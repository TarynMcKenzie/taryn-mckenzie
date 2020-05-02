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
                    html += '<p class="card-date"><em>'+ currentProject.date+ '</em></p>'
                    html += '<div class="card-img"><div class="overlay-effect"></div>' + currentProject.img + '</div>'
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
            img: '<img src="img/giorgio-trovato-v_bri4iVuiM-unsplash.jpg" class="image"  alt="">',
            date: 'February 2020',
            desc: 'This is the project description.'
        },
        {
            id: 2,
            title: 'Movies Application',
            img: '<img src="img/giorgio-trovato-v_bri4iVuiM-unsplash.jpg" class="image" alt="">',
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
            img: '<img src="img/giorgio-trovato-v_bri4iVuiM-unsplash.jpg" class="image" alt="">',
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
            img: '<img src="img/giorgio-trovato-v_bri4iVuiM-unsplash.jpg" class="image" alt="">',
            date: 'March 2020',
            desc: 'This is the project description.'
        },
    ];

    // TODO: Call the function to put the project objects onto the page
    projectCards(projects);


//-----------------------------------------
//-------DESCRIPTION VIEW FUNCTIONS--------
//-----------------------------------------

// Expand element on click
    let clicks = 0;


    $('.card-body').on({
        mouseenter: function(e){
            console.log(e) // What element is being clicked? What can I target.
            $(e.target).css({'opacity': '0'});//change card-overlay opacity ( HIDE CARD)
        },
        mouseleave: function(e){
            console.log(e) // What element is being clicked? What can I target.
            $(e.target).css({'opacity': '1'}); //change card-overlay opacity ( SHOW CARD)
        },
        click: function(e){
            if (clicks % 2 === 0) { // if the element is even
                console.log(e) // What element is being clicked? What can I target.
                $(e.delegateTarget).css({'width': '50%'}); // What is the parent element? select it --> change width
                $(e.target).off('mouseenter');// turn off hover
                $(e.target).off('mouseleave');// turn off hover
            } else { // if the element is odd
                $(e.delegateTarget).css({'width': '25%'}); // select parent element of clicked --> revert width back to original setting
            }

            ++clicks; // increment click count
        }
    });


});// ready()