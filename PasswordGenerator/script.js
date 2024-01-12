const SpecialChar="!@#$%^&*()";
const num="0123456789";
let char='abcdefghijklmnopqrstuvwxyz';

let min=0;

let max=25;
let password=new String();
let strValue=new String();

let input;

function generator(){
    password="";
    strValue=""
    for(let i=0;i<input;i++){
        
        let value=(Math.floor(Math.random()*(max-0+1)+0));
        strValue+=` ${value}`;
        password+=char[value];
       
    }
    console.log(password)
    console.log(strValue);
    charInput.value=password
   
}


const NumBtn=document.querySelector('#numbers');
const CharBtn=document.querySelector('#characters');
const charInput=document.querySelector('input[type="text"][readonly]');

const range=document.getElementById('range');
const rangeHolder=document.querySelector('span');
range.addEventListener('input',()=>{
    rangeHolder.textContent=range.value;
    input=range.value;
    generator();
})

NumBtn.addEventListener('click',(e)=>{
    // console.log(e.target.checked);
    if(e.target.checked===true){
       
        char+=num;
        max=(char.length)-1;
    //    console.log(max);
       generator();
    }
    if(e.target.checked===false){
        char=char.replace('0123456789','');
        max=(char.length)-1;
        
        generator();
    }
    // console.log(e);
})
CharBtn.addEventListener('click',(e)=>{
    // console.log(e.target.checked);
    if(e.target.checked===true){
        
        char+=SpecialChar;
        max=(char.length)-1;
        // console.log(max);
        generator();
        
    }
    if(e.target.checked===false){
        char=char.replace('!@#$%^&*()','');
        max=(char.length)-1;
        // console.log(max);
        generator();
    }

})
generator();



