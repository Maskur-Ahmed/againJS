function Multi (one,two,three,four){
    let result = one * two * three * four;
    return result;
}

let result = Multi(27,39,20,38);
// console.log(result);
//--------------------------task one complete--------------------------;
//===================================================================================
function mulDev (number){
    if(number % 2 === 0){
        let even = number / 2;
        return even;
    }else{
        return number * 2;
    }
}
let check = 5;
let res = mulDev(check);

console.log(res);

//------------------------------------task two complete------------------------------------;
//========================================================================================

function avg (one,two,three,four){
    let sum = one + two + three + four;
    let avr = sum / 4;
    return avr
}

let ans = avg(4,6,7,8);
console.log(ans);

//------------------------------------task three complete-----------------------------------;
