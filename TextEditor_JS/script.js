const inp=document.querySelector('#input-field');
// const inp=inp.value;
const buttons=document.querySelectorAll('.btn');

buttons.forEach((button)=>{
    button.addEventListener('click',(event)=>{
       if( event.target.className==='btn uppercase'){
         inp.style.textTransform='uppercase';
       }
       if( event.target.className==='btn lowercase'){
        inp.style.textTransform='lowercase';
      }
      if( event.target.className==='btn capitalize'){
        inp.style.textTransform='capitalize';
      }
      if( event.target.className==='btn bold'){
        inp.style.fontWeight='bold';
      }
      if( event.target.className==='btn italic'){
        inp.style.fontStyle='italic';
      }
      if( event.target.className==='btn underline'){
        inp.style.textDecoration='underline';
      }
    })
})