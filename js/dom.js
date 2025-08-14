let kire = document.querySelector('.ki');
let btnOne = document.querySelector('#btn');
let h2 = document.querySelector('h2');
let btntwo = document.querySelector('#btn2');

btnOne.addEventListener('click',()=>{
    
    kire.style = 'color:green';
})


btntwo.addEventListener('click',()=>{
    h2.innerText = 'modhu modhu modhu';
    h2.style = "color:red"

})

//----------------- task 3 ----------------------

let div = document.querySelector('div');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let btn4 = document.querySelector('.btn4');

btn1.addEventListener('click',()=>{
    div.style = 'background-color:red';
    div.innerText = 'mui lal rong';
})

btn2.addEventListener('click',()=>{
    div.style = 'background-color:green';
    div.innerText = 'mui sobuj rong';
})

btn3.addEventListener('click',()=>{
    div.style = 'background-color:blue';
    div.innerText = 'mui nill rong';
})

btn4.addEventListener('click',()=>{
    div.style = 'background-color:yellow';
    div.innerText = 'mui holud rong';
})
