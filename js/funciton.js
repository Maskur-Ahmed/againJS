function myFunc() {
  console.log("kire");
  console.log("kmn achis");
  console.log("khawa korchis");
}

// myFunc()

function sum(a, b) {
  let result = console.log(a + b);
  return result;
}

// sum(10,40)

function macherTorkari(mach, sobji, mosla) {
  console.log("tel gorom kor");
  console.log("moshla de");
  console.log("shaksobji de");
  console.log(mach + " de");
  return `${mach} macher torkari ready`;
}

// let torkari = macherTorkari("ilish","alu","holud");

// console.log(torkari)
// ---------------------------------------;
//-------------------peramiter------------;
//* আমরা একটি ফাংশন ডিক্লিয়ার করার পর তার মদ্ধে পেরামিটার দিতে পারি। যেগুলো পরে আমরা যখন ফাংশন কল করবো তখন আলদা আলাদা মান দিয়ে আলাদা আলাদা কাজ করাতে পারি।
//* আমরা চাইলে আরগুমেন্ট এ একটি ভেরিএবলো দিতে পারি।
//user jokhon kono value dibe,tokhon sei value er man borgo kore dekhono hobe:
function dubbleIt(num) {
  let dubbled = num * 2;
  console.log(dubbled);
}

dubbleIt(16);

function difference(num1, num2) {
  let dif = num1 - num2;
  console.log(dif);
}

difference(20, 10);

let fatherAge = 50;
let myAge = 21;
difference(fatherAge, myAge);
//*---------------------------how function work-------------------;
//!when a function define with a name of difference,the function catch the value of the argument where its called.it will be a number or a variabe etc.
//!then when we call it will take the value of any variable ,function,number etc.

//--------------------------------function return-----------------------------------------;
function tenTimes (number){
    const result = number * 10;
    return result;
}

let result = tenTimes(5);

console.log(result);

let bonusMaskur = tenTimes(100);
console.log(bonusMaskur);

//*আমরা যখন কোন ফাংশন এর ভেতর return ব্যবহার করি তখন সেই ফাংশন তার ভেতরের কাজগুলোকে যেখানে কল করাহয়েছিল সেখানে পাঠিয়ে দেয়।
//*তাই চাইলে সেই ফাংশন কে আমরা বিভিন্ন যায়গায় ব্যবহার করতে পারি।

//---------------------------------------------------------------------------------------------------;

//--------------------------------------odd and even number difinder---------------------------------;
function oddEven (number){
  if(number % 2 ===0){
    return "it's a even number";
  }else if(number % 2 ===1){
    return "it's a odd number";
  }else{
    return "it's not a number";
  }
}

let ckNum = 51;
console.log(oddEven(ckNum));
//----------------------------------------------------------------------------------------------------;
//---------------------------------------dubble tripple-----------------------------------------------;

function dubbleTripple (num,dubble){
  if(dubble){
    let res = num * 2
    console.log(res)
  }else{
   let tr=  num * 3
   console.log(tr)
  }
  
}

dubbleTripple(5)

//---------------------------------------------------------------;
//--------------------------string legth--------------------------;

function strSize (str){
  let sSize = str.length
  if(sSize % 2 === 0){
    console.log("it's a even size")
  }else{
    console.log("it's a odd size");
  }
}
let maskur = 'Ahmed'
strSize(maskur);