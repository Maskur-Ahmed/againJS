let showIt = document.querySelector('#btn');
let inputV = document.querySelector('#inp');
let dekano = document.querySelector('#dekano');
let inputS = document.querySelector('.inputS')
let show = document.querySelector('.show');
// ------------------------------------------------;
let red = document.querySelector('.btn1');
let blue = document.querySelector('.btn2');
let green = document.querySelector('.btn3');
let purple = document.querySelector('.btn4');

//------------------color btn----------------------;

show.style = "display:none";

showIt.addEventListener('click',()=>{
    dekano.innerHTML=inputV.value;
    inputV.value = ''
    if(inputV == inputV){
        inputS.style = 'display:none'
        show.style = 'display:block'
    }
})
//-----------color btn part------------

red.addEventListener('click',()=>{
    dekano.style = 'color:red'
});
blue.addEventListener('click',()=>{
    dekano.style = 'color:blue'
});

green.addEventListener('click',()=>{
    dekano.style = 'color:green'
});

purple.addEventListener('click',()=>{
    dekano.style = 'color:purple'
});

//-----------color btn close------------//
let incr = document.querySelector('#plus');
let decr = document.getElementById('minus');
let showInc = document.getElementById('showInc');

let iValue = 1;
incr.addEventListener('click',()=>{
    showInc.innerHTML = iValue++
})

decr.addEventListener('click',()=>{
    if(iValue < 1 ){
        console.log("hi")
    }else{
        showInc.innerHTML = iValue--
    }
})