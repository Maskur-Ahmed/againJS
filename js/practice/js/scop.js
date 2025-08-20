// ---------- Global Scope ----------
let globalVar = "আমি global scope থেকে এসেছি";

function showGlobal() {
    console.log("showGlobal() ->", globalVar); 
}
showGlobal();
console.log("Outside ->", globalVar); 



// ---------- Local (Function) Scope ----------
function localScope() {
    let localVar = "আমি শুধু ফাংশনের ভেতরে আছি";
    console.log("localScope() ->", localVar); 
}
localScope();

// console.log(localVar); // ❌ Error হবে, কারণ বাইরে থেকে এক্সেস করা যাবে না



// ---------- Block Scope ----------
{
    let blockVar = "আমি শুধু এই ব্লকের ভেতরে আছি";
    console.log("Inside block ->", blockVar);
}
// console.log(blockVar); // ❌ Error হবে, কারণ ব্লকের বাইরে নেই

{
    var notBlockVar = "আমি var দিয়ে বানানো, বাইরে গিয়েও বাঁচবো";
}
console.log("Outside block ->", notBlockVar); // ✅ কাজ করবে



// ---------- Lexical Scope ----------
function outerFunc() {
    let outerVar = "আমি outerFunc এর ভ্যারিয়েবল";

    function innerFunc() {
        console.log("innerFunc() ->", outerVar); 
    }

    innerFunc();
}
outerFunc();
