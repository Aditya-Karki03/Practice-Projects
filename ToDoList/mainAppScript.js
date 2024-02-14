const listItems=document.getElementsByClassName('list-items')[0];
const bigContainer=document.querySelector('.main-container');
const TodoItem=document.querySelector('.itemName');
const ul=document.querySelector('.todoLists');


let iterator=1;
const add_button=document.getElementsByTagName('button')[0]

add_button.addEventListener('click',()=>{
    const input=document.querySelector('.input-button').firstElementChild;
    // console.log(input.value);
    const InpValue=input.value;
    inputChanger(InpValue);
})

const inputChanger=(InpValue)=>{
    
    if(!InpValue)    alert('Please enter a value');
    else {
        console.log(InpValue)
        const li=document.createElement('li');
    li.classList.add('items-list')
    li.innerHTML=`<div class="tick">
    <input type="checkbox"/> <label class="itemName">${InpValue}</label>
  </div>
  <div class="box">
    <i class="bx bx-edit"></i><i class="bx bxs-trash"></i>
  </div>`;
  ul.appendChild(li);
    }
   const editBtn=document.querySelector('.bx-edit');
}



function newElement(){
    const input=document.createElement('input');
    input.setAttribute('type','text');
    return input;
}

function innerHTMLchanger(iterator,TodoItem,input){
    TodoItem.innerHTML=input;
}
// let inputAdded=false;
bigContainer.addEventListener('click',(e)=>{
    // if(e.target.)
    if(e.target.classList.contains('bxs-trash')){
        const addedList=e.target.closest('.items-list');
        if(addedList){
            addedList.remove();
        }
    }
    else if (e.target.classList.contains('tick') || e.target.closest('.tick')) {
        const tickElement=e.target.closest('.tick');
        // e.target.closest('.tick').classList.toggle('checked');
        if(tickElement){
            tickElement.classList.toggle('checked');
            const inputElement=tickElement.querySelector('input');
            if(inputElement){
                inputElement.checked=tickElement.classList.contains('checked');
            }
        }
    }
    const EditButt=e.target.classList.contains('bx-edit')
    let editedValue;
    if(e.target.classList.contains('bx-edit')){
        // const inputEle=newElement();
        // EditButt.appendChild(inputEle);
        const addedList=e.target.closest('.items-list');
        let inputAdded=false;
        if(!inputAdded){
            let curInnerHTML=addedList.firstElementChild.lastElementChild.innerHTML;
            if(curInnerHTML!=='<input type="text"/>'){
            const InpVal=addedList.firstElementChild.lastElementChild.innerHTML;
            addedList.firstElementChild.lastElementChild.innerHTML=`<input class='inp' type="text" value="${InpVal}"/>`;
            const input2=document.querySelector('.inp');
            input2.addEventListener('change',(e)=>{
                editedValue=input2.value;
                inputEditor(editedValue)
                // console.log(editedValue)
        })
            console.log(addedList.firstElementChild.lastElementChild.innerHTML.value);
            inputAdded=true;
            }    
        }
       

    }
})
const inputEditor=(edVal)=>{
    const li=document.querySelector('.itemName');
    li.innerHTML=edVal;
}
