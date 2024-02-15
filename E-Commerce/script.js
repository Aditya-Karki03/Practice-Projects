const navArrow=document.querySelector('.bx-right-arrow-alt');
const navLinks=document.querySelector('.links');
const menu=document.querySelector('.bx-menu');
menu.addEventListener('click',()=>{
   navLinks.style.right='0px'
})
navArrow.addEventListener('click',()=>{
    navLinks.style.right='-400px'
})


//Listing all the clothes displayed on the webpage
const clothes=document.querySelectorAll('.image-holder');
console.log(clothes);

//Whenever clicked on each individual clothes it should move to different screen
clothes.forEach((cloth)=>{
    cloth.addEventListener('click',(e)=>{
        const img=cloth.firstElementChild.innerHTML;
        const url = `sProduct.html?img=${encodeURIComponent(img)}`;
        window.location.href=url;
    })
})

function individualProductDisplayer(){

}