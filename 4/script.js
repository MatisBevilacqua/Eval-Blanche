let n = 9;
let arr = [];
const init = 0;

while (n <= 30) {
    n++;
    if(n%2 ===0){
        arr.push(n);
    }
}

const addition = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    init
);

console.log(arr);
console.log(addition);