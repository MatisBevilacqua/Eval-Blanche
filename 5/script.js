let question1 = prompt('Prix dans votre devise');
let question2 = prompt('Taux de changes')

function changeMoney(putmoney, getmoney){
    return putmoney * getmoney; 
}

console.log('Voci votre prix en euros : ' + changeMoney(question1, question2));


