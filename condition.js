//let's recape our previous concepts:
//! variable :
//a variable is like a container where we can store many types of data ;
// we declair variable using the keywords: var let const ex:
var name = "maskur";
var age = 24;

//! data types :
//data types in js is the type of data where we can use this 

//! js arethmatical operation:
//* aditional:
var orrangePrice = 20;
var applePrice = 30;
var total = (orrangePrice + applePrice);

//* substraction :

var mangoPrice = 100;
var currentBlnc = 200;
var totalB = (currentBlnc - mangoPrice);

//* multiplication :

var oneMan = 10;
var tenMan = 100;
var totalMan = (oneMan * tenMan);

//* division :

var totlaAmm = 100;
var totalMan = 4;

var perMan = (4 / 100);

// string to number:
//if i want to make a stirng to Intnumber then i have to use:
var accountNum = '20043';
var convert = parseInt(accountNum);
console.log(convert);
console.log( typeof(convert));

// if i want to convert a number with flotiong point then i have to use :

var aName = "937303.9839";
var cVrt = parseFloat(aName);

console.log(cVrt);
console.log(typeof(cVrt));

//to fixed :if i want to take only 2 numbers after the floationg point then:

var changed = cVrt.toFixed(2);
var toNum = parseFloat(changed);
console.log(toNum);
console.log(typeof(toNum));