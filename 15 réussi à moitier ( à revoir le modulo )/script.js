myAccount = 103;
accountF = 13400;
countMois = 0;
countM = 0;


while(myAccount < accountF){
    countMois++
    if(countMois === 60){
        countM++;
        myAccount+= 55;
        console.log('Mois numero ' + countM + ' Vous avez  ' + myAccount);
        countMois = 0;
    }
}