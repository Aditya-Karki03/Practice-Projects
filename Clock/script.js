const second=document.querySelector('.sec');
const min=document.querySelector('.min');
const hrs=document.querySelector('.hour');

let i=1;

const setDate=()=>{
    const date=new Date();
    const seconds=date.getSeconds();
    
    
    // console.log(seconds)
    const secondsInDegrees=Math.floor(((seconds/60)*360)+90);
    second.style.transform=`rotate(${secondsInDegrees}deg)`
   

    const minutes=date.getMinutes();
    console.log(minutes)
    const MinutesinDegrees=Math.floor(((minutes/60)*360)+90)
    min.style.transform=`rotate(${MinutesinDegrees}deg)`

    const hour=date.getHours();
    
    const totalMinutes = hour * 60 + minutes; // Total minutes since midnight
const hourFraction = totalMinutes / (12 * 60); // Fraction of the hour completed
const hourInDegrees = Math.floor(((hourFraction) * 360) + 90); // Calculate rotation angle

hrs.style.transform = `rotate(${hourInDegrees}deg)`; // Apply rotation

}

setInterval(setDate,1000)

