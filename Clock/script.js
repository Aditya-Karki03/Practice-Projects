const second=document.querySelector('.sec');
const min=document.querySelector('.min');
const hrs=document.querySelector('.hour');

let i=1;

const setDate=()=>{
    const date=new Date();
    const seconds=date.getSeconds();
    
    
    console.log(seconds)
    const secondsInDegrees=Math.floor(((seconds/60)*360)+90);
    second.style.transform=`rotate(${secondsInDegrees}deg)`
   

    const minutes=date.getMinutes();
    const MinutesinDegrees=Math.floor(((minutes/60)*360)+90)
    min.style.transform=`rotate(${MinutesinDegrees}deg)`

    const hour=date.getHours();
    const hourInDegrees=Math.floor(((hour/(12))*360)+90)
    hrs.style.transform=`rotate(${hourInDegrees}deg)`
}

setInterval(setDate,1000)

