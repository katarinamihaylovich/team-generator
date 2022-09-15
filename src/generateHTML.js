const generateTeam = function(team) {
    let html = '';


    team.managers.forEach(function(manager) {
        html += `
        <article class="col-md-4">
            <div class="card shadow p-3 mb-5 bg-white rounded text-left">
                <div class="card-header" style="background-color: blue; color:aliceblue">
                    <h2>${manager.getName()}</h2>
                    <h3><span class="material-symbols-outlined">business_center</span> Manager</h3>
                </div>
                <div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}"> ${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                  </ul>
                </div>  
            </div>
        </article>
        `;
    });

    team.engineers.forEach(function(engineer) {
        html += `
        <article class="col-md-4">
            <div class="card shadow p-3 mb-5 bg-white rounded text-left">
                <div class="card-header" style="background-color: blue; color:aliceblue">
                    <h2>${engineer.getName()}</h2>
                    <h3><span class="material-symbols-outlined">build</span> Engineer</h3>
                </div>
                <div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}"> ${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://www.github.com/${engineer.getGit()}">${engineer.getGit()}</a></li>
                  </ul>
                </div>
            </div>
        </article>
        `;
    });

    team.interns.forEach(function(intern) {
        html += `
        <article class="col-md-4">
            <div class="card shadow p-3 mb-5 bg-white rounded text-left">
                <div class="card-header" style="background-color: blue; color:aliceblue">
                    <h2>${intern.getName()}</h2>
                    <h3><span class="material-symbols-outlined">school</span> Intern</h3>
                </div>
                <div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}"> ${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                  </ul>
                </div>
            </div>
        </article>
        `;
    });

    return html;
};

const generateHTML = function(team) {
    return `
    <!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

    <title>Team Generator</title>
  </head>
  <body>
    <header class="container-fluid text-center p-5" style="background-color: rgb(197, 55, 55); color: white">
        <h1>My Team</h1>
    </header>
    <main class="container text-center p-5">
        <section class="row">
            ${generateTeam(team)}
            
        </section>
    </main>

  </body>
</html>
    `;
}

module.exports = generateHTML;