// let char='abcdefghijklmnopqrstuvwxyz';
// const SpecialChar="!@#$%^&*()";
// const num="0123456789";
// let min=0;
// let max;
// const NumBtn=document.querySelector('#numbers');
// const CharBtn=document.querySelector('#characters');




// NumBtn.addEventListener('click',(e)=>{
  
//     if(e.target.checked===true){
       
//         char+=num;
//         max=char.length;

//     }
//     if(e.target.checked===false){
//         char=char.replace('0123456789','');
//         max=char.length;
       
//     }
   
// })
// console.log(max);

let char = 'abcdefghijklmnopqrstuvwxyz';
const SpecialChar = "!@#$%^&*()";
const num = "0123456789";
let min = 0;
let max;

const NumBtn = document.querySelector('#numbers');
const CharBtn = document.querySelector('#characters');

function generator() {
  // Use the updated max value here
  console.log(max);
  // Other generator logic
}

NumBtn.addEventListener('click', (e) => {
  if (e.target.checked === true) {
    char += num;
    max = char.length;
    generator(); // Call the generator function to use the updated max value
  }
  if (e.target.checked === false) {
    char = char.replace('0123456789', '');
    max = char.length;
    generator(); // Call the generator function to use the updated max value
  }
});

// Other event listener and code