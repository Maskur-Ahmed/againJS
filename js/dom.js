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