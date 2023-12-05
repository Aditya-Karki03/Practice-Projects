const buttons=document.querySelectorAll('.butt');
const body=document.querySelector('body');
buttons.forEach((button)=>{
    button.addEventListener('click',(event)=>{
        if(event.target.className==='gray butt'){
                body.style.background='gray';
        }
        if(event.target.className==='white butt'){
            body.style.background='white';
       }
       if(event.target.className==='blue butt'){
        body.style.background='blue';
   }
   if(event.target.className==='yellow butt'){
    body.style.background='yellow';
}
    })
})