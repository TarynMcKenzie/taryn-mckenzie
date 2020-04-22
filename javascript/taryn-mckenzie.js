"use strict";


function projectCards(project) { //put the coffees into a table

    var html = '<div class="card-body" id="project-body">'; // create the card body tags
    html += '<div class="card-img">' + project.img + '</div>'; // get the project image
    html += '<div class="card-title" >' + project.title + '</div>'; // get project title
    html += '</div>'; // end table row

    return html; //return the div
}

function renderProjectCards(projects) { //loops through projects, add each project to html
    var html = '';
    for(var i = 0; i <= projects.length - 1; i++) {
        html += projectCards(projects[i]);
    }
    return html;
}


var projects = [ // An array of projects
    {id: 1, title: 'Coffee Project', img:'<img src="img/Doge.jpg" class="image"  alt="">'},
    {id: 2, title: 'Movies Application', img:'<img src="img/Doge.jpg" class="image" alt="">'},
    {id: 3, title: 'AdLister', img:'<img src="img/Doge.jpg" class="image" alt="">'},
    {id: 4, title: 'Capstone', img:'<img src="img/Doge.jpg" class="image" alt="">'},
    {id: 5, title: 'Tamagotchi RPG', img:'<img src="img/Doge.jpg" class="image" alt="">'},
    {id: 6, title: 'Fortune Teller', img:'<img src="img/Doge.jpg" class="image" alt="">'},
    {id: 7, title: 'Calculator', img:'<img src="img/Doge.jpg" class="image" alt="">'},
    {id: 8, title: 'Konami Code', img:'<img src="img/Doge.jpg" class="image" alt="">'},
];

var portfolioProjects = document.querySelector('#project-cards'); // get the id for the card div
portfolioProjects.innerHTML = renderProjectCards(projects); // place cards into queried div