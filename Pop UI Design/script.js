// const button=document.querySelector('button');
// const popUp=document.querySelector('.pop-up');
// const backGround=document.body;
// button.addEventListener('click',()=>{
//     popUp.style.visibility='visible';
//     backGround.style.background='black';
// })
// backGround.addEventListener('click',()=>{
//     popUp.style.visibility='hidden';
// })
const button=document.querySelector('button');
button.addEventListener('click',()=>{
    buttonToggle();
})

const backGroundHolder=document.querySelector('.pop-up-background');
backGroundHolder.addEventListener('click',()=>{
    buttonToggle();
})
const buttonToggle=()=>{
    const classListInBody=document.body.classList;
    if(classListInBody.contains('open')){
        classListInBody.remove('open');
        classListInBody.add('closed');
    }
    else{
        classListInBody.remove('closed');
        classListInBody.add('open');
    }
}