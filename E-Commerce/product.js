const navArrow=document.querySelector('.bx-right-arrow-alt');
const navLinks=document.querySelector('.links');
const menu=document.querySelector('.bx-menu');
menu.addEventListener('click',()=>{
   navLinks.style.right='0px'
})
navArrow.addEventListener('click',()=>{
    navLinks.style.right='-400px'
})


const mainCloth=document.querySelector('.main-clothes');

const urlParams = new URLSearchParams(window.location.search);
const imgSrc = urlParams.get('img');
// console.log("Image Source:", imgSrc); // Log the image source

// Display the image

mainCloth.innerHTML = `${imgSrc}`;

const clothOpts=document.querySelectorAll('.multiCloth');
clothOpts.forEach((clothOpt)=>{
    clothOpt.addEventListener('click',()=>{
        console.log(clothOpt.src.indexOf('I'))
        const source=clothOpt.src.slice(22);
        // console.log(source);
       mainCloth.innerHTML.replace('./ImagesLogos/products/f3.jpg',source);
    })
})
