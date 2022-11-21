let question = prompt('Votre age : ');
let years = 100;

function putAge(){
    let finalYears = years - question;
    console.log('Vous aurez 100 ans dans : ' + finalYears);
}

putAge();