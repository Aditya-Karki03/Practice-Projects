const header=document.querySelector('.time h1');
const start=document.querySelector('.start');
const stop=document.querySelector('.stop');
const reset=document.querySelector('.reset');
const time=document.querySelector('.time');

let intervalId;
let milli=1;
let seconds=0;
let minutes=0;
let hour=0;
start.addEventListener('click',()=>{
    intervalId=setInterval(timer,120)
})
stop.addEventListener('click',()=>{
    clearInterval(intervalId);
})

reset.addEventListener('click',()=>{
    let intervalId;
    let milli=0;
    let seconds=0;
    let minutes=0;
    let hour=0;
    time.innerHTML=`<h1>0${hour}:0${minutes}:0${seconds}:0${milli}</h1> 1st`;
})



function timer(){
    if(seconds<=9){
        time.innerHTML=`<h1>0${hour}:0${minutes}:0${seconds}:0${milli}</h1> 1st`;
    }
    else if(seconds>=10){
        time.innerHTML=`<h1>0${hour}:0${minutes}:${seconds}:0${milli}</h1> 2nd`;
    }
    // time.innerHTML=`<h1>0${hour}:0${minutes}:0${seconds}:0${milli}</h1>`;
    milli++;
    if(milli>=10 && milli%10===0){
        // console.log(`0${hour}:0${minutes}:0${seconds}:${milli}`);
        // if(milli<9 || seconds<10){
        //     console.log(`0${hour}:0${minutes}:0${seconds}:0${milli}`);
        // }
        // else{
            
        // }
        // if(seconds<10){
        //     console.log(`0${hour}:0${minutes}:0${seconds}:0${milli}`);
        // }
        // else{
        //     console.log(`0${hour}:0${minutes}:${seconds}:${milli}`);
        // }
        
        milli=1;
        seconds+=1;
        // if(seconds<10){
        //     // console.log(`0${hour}:0${minutes}:0${seconds}:0${milli}`);
        //     time.innerHTML=`<h1>0${hour}:0${minutes}:0${seconds}:0${milli}</h1> inn`;
        // }
        // else if(seconds>9){
        //     // console.log(`0${hour}:0${minutes}:${seconds}:${milli}`);
        //       time.innerHTML=`<h1>0${hour}:0${minutes}:${seconds}:0${milli}</h1> inn1`;
        // }
        if(seconds>=60 && seconds%60===0)
            {   
                seconds=0;
                minutes+=1;
                if(minutes>=60 && minutes%60===0)
                {
                    hour+=1;
                }
            }
        }
    

 
}