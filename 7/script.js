let question = prompt('Ecrivez votr mot :');
function getReverse(myString){
    return myString.split('').reverse().join('');
}

console.log(' Votre mot inverser : ' + getReverse(question));
