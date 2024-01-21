const buttons=document.querySelectorAll('i');
const first=document.querySelector('.first-question');
const second=document.querySelector('.second-question');
const third=document.querySelector('.third-question');
const fourth=document.querySelector('.fourth-question');
const firstDiv=document.querySelector('.first');
const secondDiv=document.querySelector('.second');
const thirdDiv=document.querySelector('.third');
const fourthDiv=document.querySelector('.fourth');
let ul,para,divNumber;




buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(button.parentElement.classList[0]==='first-question'){
            // checkforDoubleArrow();
            if(e.target.classList[1]=='bx-down-arrow-alt'){
                checkforDoubleArrow();
                                para='Accordion components are user interface (UI) elements commonly used in web development to organize and present content in a collapsible and expandable manner. They are often used to manage and display a list of items or sections where only one section is expanded (visible) at a time. The other sections are collapsed (hidden) and can be expanded by the user when needed.';
                                divNumber='one';
                                addPara(para,divNumber);
                                
                            }
            else if(e.target.classList[1]=='bx-up-arrow-alt'){
                    divNumber='one';
                    removePara(para,divNumber);
                            }                                  
        }
        if(button.parentElement.classList[0]==='second-question'){
            
            if(e.target.classList[1]=='bx-down-arrow-alt'){
                checkforDoubleArrow();
                para='Accordion components are user interface (UI) elements commonly used in web development to organize and present content in a collapsible and expandable manner. They are often used to manage and display a list of items or sections where only one section is expanded (visible) at a time. The other sections are collapsed (hidden) and can be expanded by the user when needed.';
                divNumber='two';
                addPara(para,divNumber);
                
            }
            else if(e.target.classList[1]=='bx-up-arrow-alt'){
                divNumber='two';
                removePara(para,divNumber);
             }
            
        }
        if(button.parentElement.classList[0]==='third-question'){
            
            if(e.target.classList[1]=='bx-down-arrow-alt'){
                checkforDoubleArrow();
                para='Accordion components are user interface (UI) elements commonly used in web development to organize and present content in a collapsible and expandable manner. They are often used to manage and display a list of items or sections where only one section is expanded (visible) at a time. The other sections are collapsed (hidden) and can be expanded by the user when needed.';
                divNumber='three';
                addPara(para,divNumber);
                
            }
            else if(e.target.classList[1]=='bx-up-arrow-alt'){
                divNumber='three';
                removePara(para,divNumber);
             }
            
        }
        if(button.parentElement.classList[0]==='fourth-question'){
            
            if(e.target.classList[1]=='bx-down-arrow-alt'){
                checkforDoubleArrow();
                para='Accordion components are user interface (UI) elements commonly used in web development to organize and present content in a collapsible and expandable manner. They are often used to manage and display a list of items or sections where only one section is expanded (visible) at a time. The other sections are collapsed (hidden) and can be expanded by the user when needed.';
                divNumber='four';
                addPara(para,divNumber);
                
            }
            else if(e.target.classList[1]=='bx-up-arrow-alt'){
                divNumber='four';
                removePara(para,divNumber);
             }
            
        }
    })
    
})

function checkforDoubleArrow(){
  
    for(let j=0;j<buttons.length;j++){
        let btn=buttons[j];
        // console.log(btn.classList[1])
        if(btn.classList[1]==='bx-up-arrow-alt'){
            if(j==0){
                console.log('firstDiv')
                divNumber='one';
                removePara(para,divNumber);
            }
            else if(j==1){
                console.log('SecondDiv')
                divNumber='two';
                removePara(para,divNumber);
            }
            else if(j==2){
                console.log('ThirdDiv')
                divNumber='three'
                removePara(para,divNumber);
            }
            else if(j==3){
                console.log('FourthDiv')
                divNumber='four'
                removePara(para,divNumber);
            }
        }
    }
}


function addPara(para1,divNum){
   
    ul=document.createElement('hr');
        ul.style.width='100%';
        ul.style.height='4px';
        ul.style.background='black';
        ul.style.margin='5px';
        para=document.createElement('p');
        para.style.padding='10px'
        para.textContent=para1;
        // console.log(para);
        if(divNum=='one'){
            
            firstDiv.appendChild(ul)
            firstDiv.appendChild(para);
            first.lastElementChild.classList.replace('bx-down-arrow-alt','bx-up-arrow-alt')
        }
        else if(divNum==='two'){
            secondDiv.appendChild(ul)
            secondDiv.appendChild(para);
            second.lastElementChild.classList.replace('bx-down-arrow-alt','bx-up-arrow-alt')
        }
        else if(divNum==='three'){
            thirdDiv.appendChild(ul)
            thirdDiv.appendChild(para);
            third.lastElementChild.classList.replace('bx-down-arrow-alt','bx-up-arrow-alt')
        }
        else if(divNum==='four'){
            fourthDiv.appendChild(ul)
            fourthDiv.appendChild(para);
            fourth.lastElementChild.classList.replace('bx-down-arrow-alt','bx-up-arrow-alt')
        }


}
function removePara(para,divNum){
    if(divNum==='one'){
        console.log('remove reached')
        console.log(firstDiv)
        firstDiv.innerHTML=`<h2>What are accordion components</h2>`
    // firstDiv.removeChild(ul);
    
    // firstDiv.removeChild(para);
   
    first.lastElementChild.classList.replace('bx-up-arrow-alt','bx-down-arrow-alt');
    }
    else if(divNum==='two'){
        // secondDiv.removeChild(ul);
        // secondDiv.removeChild(para);
        secondDiv.innerHTML=`<h2>What are they used for?</h2>`;
        second.lastElementChild.classList.replace('bx-up-arrow-alt','bx-down-arrow-alt');
    }
    else if(divNum==='three'){
        // thirdDiv.removeChild(ul);
        // thirdDiv.removeChild(para);
        thirdDiv.innerHTML=`<h2>Accordion as a musical instrument</h2>`;
        third.lastElementChild.classList.replace('bx-up-arrow-alt','bx-down-arrow-alt');
    }
    else if(divNum==='four'){
        // fourthDiv.removeChild(ul);
        // fourthDiv.removeChild(para);
        fourthDiv.innerHTML=`<h2>Can I create an accordion component with a different framework?</h2>`;
        fourth.lastElementChild.classList.replace('bx-up-arrow-alt','bx-down-arrow-alt');
    }
    
    

}




