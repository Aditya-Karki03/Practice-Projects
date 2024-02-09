const navArrow=document.querySelector('.bx-right-arrow-alt');
const navLinks=document.querySelector('.links');
const menu=document.querySelector('.bx-menu');
menu.addEventListener('click',()=>{
   navLinks.style.right='0px'
})
navArrow.addEventListener('click',()=>{
    navLinks.style.right='-400px'
})