// const input=document.querySelector('.input input[type="text"]');

// const one=document.querySelector('.one');
// const two=document.querySelector('.two');
// const three=document.querySelector('.three');
// const four=document.querySelector('.four');
// const five=document.querySelector('.five');
// const six=document.querySelector('.six');
// const seven=document.querySelector('.seven');
// const eight=document.querySelector('.eight');
// const nine=document.querySelector('.nine');
// const zero=document.querySelector('.zero');
// const clear=document.querySelector('.clear');
// const divide=document.querySelector('.divide');
// const mul=document.querySelector('.mul');
// const sub=document.querySelector('.sub');
// const add=document.querySelector('.add');
// const equals=document.querySelector('.equals');
// const dot=document.querySelector('.dot'); 
//  let finalNum=0;

// const mainPart=document.querySelector('.operators-nums');
// mainPart.addEventListener('click',(e)=>{
   
//     let num=Number(e.target.innerHTML);
//     console.log(num)
//     if(!isNaN(num)){
//         finalNum*=10+num;
//     }
//     console.log(finalNum)
//     // ValueHolder(e.target)
// })
// // one.addEventListener('click',()=>{
    
// //     ValueHolder(one.textContent);
// // })
// // two.addEventListener('click',()=>{
// //     ValueHolder(two.textContent);
// // })
// // three.addEventListener('click',()=>{
// //     ValueHolder(three.textContent);
// // })
// // four.addEventListener('click',()=>{
// //     ValueHolder(four.textContent);
// // })
// // five.addEventListener('click',()=>{
// //     ValueHolder(five.textContent);
// // })
// // six.addEventListener('click',()=>{
// //     ValueHolder(six.textContent);
// // })
// // seven.addEventListener('click',()=>{
// //     ValueHolder(seven.textContent);
// // })
// // eight.addEventListener('click',()=>{
// //     ValueHolder(eight.textContent);
// // })
// // nine.addEventListener('click',()=>{
// //     ValueHolder(nine.textContent);
// // })
// // zero.addEventListener('click',()=>{
// //     ValueHolder(zero.textContent);
// // })
// // clear.addEventListener('click',()=>{
// //     ValueHolder();
// // })
// // divide.addEventListener('click',()=>{
// //     ValueHolder();
// // })
// // mul.addEventListener('click',()=>{
// //     ValueHolder();
// // })
// // sub.addEventListener('click',()=>{
// //     ValueHolder();
// // })
// // add.addEventListener('click',()=>{
// //     ValueHolder();
// // })
// // equals.addEventListener('click',()=>{
// //     ValueHolder();
// // })



// function ValueHolder(value){
//     // let i=0;
//     // value=
//     // input.value=value;
//     i=i*10+value;

// }
// // console.log(i)
// // inputValue(i);
// // function inputValue(origVal){
// //     input.value=origVal;
// // }

const buttons=document.querySelectorAll('button');
const input=document.querySelector('.input input[type="text"]');

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        const btnVal=button.textContent;
        if(btnVal==='C'){
            clearResult();
        }
        else if(btnVal==='='){
            calculateRes()
        }
        else{
            appendValue(btnVal);
        }
    })
})

const appendValue=(btnVal)=>{
    input.value+=btnVal;
}

const calculateRes=()=>{
    input.value=eval(input.value)
}
const clearResult=()=>{
    input.value='';
}