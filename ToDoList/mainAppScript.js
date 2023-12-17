const listItems=document.getElementsByClassName('list-items')[0];
const bigContainer=document.querySelector('.main-container');
const TodoItem=document.querySelector('.itemName');
// if(TodoItem.innerHTML==='Work Out'){
//     listItems.style.visibility='hidden'
// }
// console.log(TodoItem.innerHTML);
// const text=TodoItem.nextElementSibling.textContent;
// console.log(text);
// console.log(listItems);
let iterator=1;
const add_button=document.getElementsByTagName('button')[0]
add_button.addEventListener('click',()=>{
    // alert('addButton is clicked');
    // bigContainer.;
    // console.log(bigContainer);
    const input=document.getElementsByClassName('input-button')[0].firstElementChild.value;
    // console.log(input);
    TodoItem.innerHTML=input;
    innerHTMLchanger(iterator,TodoItem,input)
    document.getElementsByClassName('input-button')[0].firstElementChild.value=' ';
    iterator++;
    const clonedItems=listItems.cloneNode(true);
    clonedItems.classList.remove('hidden');
    bigContainer.appendChild(clonedItems);
})

function innerHTMLchanger(iterator,TodoItem,input){
    TodoItem.innerHTML=input;
 
}