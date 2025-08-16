let showIt = document.querySelector('#btn');
let inputV = document.querySelector('#inp');
let dekano = document.querySelector('#dekano');
let inputS = document.querySelector('.inputS')
let show = document.querySelector('.show');

show.style = "display:none";

showIt.addEventListener('click',()=>{
    dekano.innerHTML=inputV.value;
    inputV.value = ''
    if(inputV == inputV){
        inputS.style = 'display:none'
        show.style = 'display:block'
    }
})
