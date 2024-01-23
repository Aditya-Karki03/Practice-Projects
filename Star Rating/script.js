const stars=document.getElementsByTagName('i');
const value=document.querySelector('.value');

for(let i=0;i<stars.length;i++){
    stars[i].addEventListener('click',(e)=>{
       
        
        if(e.target.color===undefined){
            starIncrementer(i);
        }
        if(stars[i].style.color==='rgb(253, 184, 19)'){
           
            starDecrementer(i);
        }
       
        
        
        
    })
}

function starIncrementer(i){
    if(i>0){
        
       for(let j=i;j>=0;j--){
        stars[j].style.color='#FDB813'
       }
       value.textContent=i+1;
    }
    else if(i==0){
        stars[i].style.color='#FDB813'
        value.textContent='1'
    }
}

function starDecrementer(i){
    for(let j=i+1;j<stars.length;j++){
        stars[j].style.color='#000';
    }
}