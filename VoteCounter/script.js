const firstCand=document.getElementById('1');
const secondCand=document.getElementById('2');
const thirdCand=document.getElementById('3');
const finish=document.getElementById('finish');

let count1=0;
let count2=0;
let count3=0;

const map=new Map();
map.set('firstCand',count1);
map.set('secondCand',count2);
map.set('thirdCand',count3);

function valueUpdater(whichCand, counterValue){
    if(whichCand=='firstCand'){
        map.set('firstCand',counterValue);
    }
    if(whichCand=='secondCand'){
        map.set('secondCand',counterValue);
    }
    if(whichCand=='thirdCand'){
        map.set('thirdCand',counterValue);
    }
}

firstCand.addEventListener('click',()=>{
    
    count1=count1+1;
    valueUpdater('firstCand',count1);
})
secondCand.addEventListener('click',()=>{
    
    count2=count2+1;
    valueUpdater('secondCand',count2);
})
thirdCand.addEventListener('click',()=>{
   
    count3=count3+1;
    valueUpdater('thirdCand',count3);
})
finish.addEventListener('click',()=>{
    for (const [i,j] of map) {
        alert(`Candidate with name ${i} has got ${j} votes`);
    }
})