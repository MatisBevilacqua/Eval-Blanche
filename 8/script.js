let question = prompt('Ecriver votre text : ');

function getNumberText(number){
    return number.split(/\b\w+\b/).length-1;
}

console.log(getNumberText(question));