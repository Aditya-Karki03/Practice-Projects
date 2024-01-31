// const buttons=document.querySelectorAll('.btn');
// const clap=document.querySelector('#clap');
// const hihat=document.querySelector('#hihat');
// const kick=document.querySelector('#kick');
// const openhat=document.querySelector('#openhat');
// const boom=document.querySelector('#boom');
// const ride=document.querySelector('#ride');
// const snare=document.querySelector('#snare');
// const tom=document.querySelector('#tom');
// const tink=document.querySelector('#tink');

// // const soundAdder=(valuesInsideNodes)=>{
// //     valuesInsideNodes.forEach((Node)=>{
// //         if(Node==='A')  
// //     })
// // }
// const soundAdder=(e)=>{
//     if(e.key==='a'|| e.key==='A'){
//         console.log(e);
//         clap.currentTime=0;
//         clap.play();
//     }
//     else if(e.key==='s' || e.key==='S'){
//         hihat.currentTime=0;
//         hihat.play();
//     }
//     else if(e.key==='d' || e.key==='D'){
//         kick.currentTime=0;
//         kick.play();
//     }
//     else if(e.key==='f' || e.key==='F'){
//         openhat.currentTime=0;
//         openhat.play();
//     }
//     else if(e.key==='g' || e.key==='G'){
//         boom.currentTime=0;
//         boom.play();
//     }
//     else if(e.key==='h' || e.key==='H'){
//         ride.currentTime=0;
//         ride.play();
//     }
//     else if(e.key==='j' || e.key==='J'){
//         snare.currentTime=0;
//         snare.play();
//     }
//     else if(e.key==='k' || e.key==='K'){
//         tom.currentTime=0;
//         tom.play();
//     }
//     else if(e.key==='l' || e.key==='L'){
//         tink.currentTime=0;
//         tink.play();
//     }
// }
// document.addEventListener('keydown', soundAdder);

// buttons.forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         let texts=e.target.childNodes;
//         // console.log(e.target.classList)

//          if(texts[1].textContent=='CLAP'){
//            texts[1].parentElement.classList.add('playing');
//             clap.currentTime=0;
//             clap.play();
//             // texts[1].parentElement.classList.remove('playing');
//         }

//         else if(texts[1].textContent=='HIHAT'){
//             hihat.currentTime=0;
//             hihat.play();
//         }
//         else if(texts[1].textContent=='KICK'){
//             kick.currentTime=0;
//             kick.play();
//         }
//         else if(texts[1].textContent=='OPENHAT'){
//             openhat.currentTime=0;
//             openhat.play();
//         }
//         else if(texts[1].textContent=='BOOM'){
//             boom.currentTime=0;
//             boom.play();
//         }
//         else if(texts[1].textContent=='RIDE'){
//             ride.currentTime=0;
//             ride.play();
//         }
//         else if(texts[1].textContent=='SNARE'){
//             snare.currentTime=0;
//             snare.play();
//         }
//         else if(texts[1].textContent=='TOM'){
//             tom.currentTime=0;
//             tom.play();
//         }
//         else if(texts[1].textContent=='TINK'){
//             tink.currentTime=0;
//             tink.play();
//         }
        

        
//     })
// })
// document.addEventListener('click',soundAdder)

//The above written code is kind of non-efficent code, written by me

//The below written code is understood/referenced from javascript30.com

document.addEventListener('keydown',(e)=>{
    // console.log(e.keyCode);
    const audio=document.querySelector(`audio[data-key='${e.keyCode}']`);
    if(!audio)  return;
    audio.currentTime=0;
    audio.play();

    const key=document.querySelector(`div[data-key='${e.keyCode}']`);
    key.classList.add('playing')
})

const buttons=document.querySelectorAll('.btn');


console.log(buttons);
buttons.forEach((button)=>{
    button.addEventListener('transitionend',(e)=>{
        if(e.propertyName!=='transform') return;
        button.classList.remove('playing')
        // this.classList.remove('playing');
    })
})


buttons.forEach((button)=>{
    button.addEventListener('click',e=>{
        const divWithKey = e.target.closest('.btn[data-key]');
        if(divWithKey){
            const value=divWithKey.getAttribute('data-key');
            divWithKey.classList.add('playing')
            // console.log(dataKey)
            const audio=document.querySelector(`audio[data-key='${value}']`)
                audio.currentTime=0;
                audio.play();
        }
       
       
})
        
       
    })
