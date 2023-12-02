const button=document.querySelector('button');
const popUp=document.querySelector('.pop-up');
const backGround=document.body;
button.addEventListener('click',()=>{
    popUp.style.visibility='visible';
    backGround.style.background='black';
})
// backGround.addEventListener('click',()=>{
//     popUp.style.visibility='hidden';
// })