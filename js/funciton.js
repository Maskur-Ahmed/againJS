function myFunc (){
    console.log('kire');
    console.log('kmn achis');
    console.log('khawa korchis');

}

// myFunc()

function sum (a,b){
    let result =console.log(a + b);
    return result;

}

// sum(10,40)

function macherTorkari (mach,sobji,mosla){
    console.log('tel gorom kor');
    console.log('moshla de');
    console.log('shaksobji de');
    console.log(mach + ' de');
    return `${mach} macher torkari ready`;
}

// let torkari = macherTorkari("ilish","alu","holud");

// console.log(torkari)
// ---------------------------------------;
//-------------------peramiter------------;
//user jokhon kono value dibe,tokhon sei value er man borgo kore dekhono hobe:
function dubbleIt (num){
 let dubbled = num * 2;
 console.log(dubbled);
}

dubbleIt(16);

function difference (num1,num2){
    let dif = num1 - num2;
    console.log(dif)
}

difference(20,10);

let fatherAge = 50;
let myAge = 21;
difference(fatherAge,myAge);
