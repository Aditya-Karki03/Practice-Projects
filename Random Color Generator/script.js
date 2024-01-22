const inputs=document.querySelectorAll('input[type="range"]');
// const red=document.querySelector('input[name="Red"]');
// const green=document.querySelector('input[name="Green"]')
// const blue=document.querySelector('input[name="Blue"]');

const create=document.querySelector('.create');
const copy=document.querySelector('.copy');
const right=document.querySelector('.right-container');
const left=document.querySelector('.left-container');

const clip=document.querySelector('.clip');
const hex=document.querySelector('.hex');


const header=document.querySelector('.right-header');
const leftHeader=document.querySelector('.left-header');
// console.log(inputs);
let value1=0;
let value2=0;
let value3=0;
let code='#';



inputs.forEach((input)=>{
    input.addEventListener('input',(e)=>{
        if(e.target.name==='Red'){
            value1=input.value;
            header.innerHTML=`rgb(${value1},${value2},${value3})`;
        }
        else if(e.target.name==='Green'){
            value2=input.value;
            header.innerHTML=`rgb(${value1},${value2},${value3})`;
        }
        else if(e.target.name==='Green'){
            value2=input.value;
            header.innerHTML=`rgb(${value1},${value2},${value3})`;
        }
        else if(e.target.name==='Blue'){
            value3=input.value;
            header.innerHTML=`rgb(${value1},${value2},${value3})`;
        }
    })
})

create.addEventListener('click',()=>{
    right.style.backgroundColor=`rgb(${value1},${value2},${value3})`;
})
copy.addEventListener('click',()=>{
    window.navigator.clipboard.writeText(`rgb(${value1},${value2},${value3})`)
})

hex.addEventListener('click',()=>{
    code='#';
    const string='0123456789ABCDEF';
    for(let i=0;i<6;i++){
        let index=Math.floor(Math.random()*16);
        code+=string[index];
    }
    leftHeader.innerHTML=code;
    left.style.backgroundColor=code;
})
clip.addEventListener('click',()=>{
    window.navigator.clipboard.writeText(code)
})