

// Manager Card
function cardManager(data) {
return `
    <div class="col s4 m4 l4 center-align">
        <div class="card orange accent-1">
            <div class="card-content">
                <span class="card-title">${data.name}</span>
                <p>Manager</p>
            </div>
            <div class="card-tabs blue-grey darken-1">
                <ul class="list">
                    <li class="item">ID: ${data.id}</li>
                    <li class="item">Email: ${data.email}</li>
                    <li class="item">Office number: ${data.officeNum}</li>
                </ul>
            </div>
        </div>
    </div>
    
    `
};

// Engineer Card
function cardEng(data) {
    return `
    <div class="col s4 m4 l4">
        <div class="card orange accent-1">
            <div class="card-content">
                <span class="card-title">${data.name}</span>
                <p>Engineer</p>
            </div>
            <div class="card-tabs blue-grey darken-1">
                <ul class="list">
                    <li class="item">ID: ${data.id}</li>
                    <li class="item">Email: ${data.email}</li>
                    <li class="item">GitHub Id: ${data.github}</a></li>
                </ul>
            </div>
        </div>
    </div>
    `
};

// Intern Card
function cardIntern(data) {
    return `
    <div class="col s4 m4 l4">
        <div class="card orange accent-1">
            <div class="card-content">
                <span class="card-title ">${data.name}</span>
                <p>Intern</pss=>
            </div>
            <div class="card-tabs blue-grey darken-1">
                <ul class="list">
                    <li class="item">ID: ${data.id}</li>
                    <li class="item">Email: ${data.email}</li>
                    <li class="item">School: ${data.school}</li>
                </ul>
            </div>
        </div>
    </div>
    `
};

// Create Card and append to html
const createCard = data => {
    const newCard = [];
    const newManagerCard =[];
    for(var i = 0; i <data.length; i++){
        const emp = data[i];
        const role = emp.getRole();

        if (role === "Manager") {
            const managerCard = cardManager(emp);
            newManagerCard.push(managerCard);
        }

        if (role === "Engineer") {
            const engCard = cardEng(emp);
            newCard.push(engCard);
        }

        if (role === "Intern") {
            const internCard = cardIntern(emp);
            newCard.push(internCard);
        }
    };
        
    const memberCards = newCard.join('')
    
    const generateTeamPage = teamPage(newManagerCard, memberCards);
    return generateTeamPage
};



// Base html
function teamPage(managerCard, memberCard) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="../dist/style.css">
    </head>
    <body>
        <header class = "center-align valign-wrapper orange lighten-3 text-deep-purple darken-4">
            <h1>Team Page</h1>
        </header>
        <main>
            <div class="container">
                <div class="row managerCards">
                    ${managerCard};
                </div>
                <div class="row teamCards">   
                    ${memberCard};
                </div>
            </div>
        </main>
        
    </body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    

    </html>
`
};

module.exports = createCard;
