/*

* return  হলো জাভাস্ক্রিপ্টের একটি কীওয়ার্ড যা সাধারণত ফাংশনে ব্যবহার করা হয়।
* যখন ওই ফাংশনের ডাটা কে আমরা অন্য কাজে ব্যবহার করতে চাইবো,তখন return ব্যবহার করতে হবে।

*/

function myFunc (number){
    let result = number * 2;
    return result;   
}

let outPut = myFunc(20);

console.log('-------------------')
console.log(outPut);