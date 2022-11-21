function getMoyenne()
{  
    let arr = [20, 30, 50];
    let n = arr.length;
    let s = 0;
    for(i=0; i<n; i++){
        s += arr[i];
    }
    let result = s / n;
    console.log(result);
}

getMoyenne();
