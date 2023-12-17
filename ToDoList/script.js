const button=document.getElementsByClassName('button-holder')[0].firstElementChild;


button.addEventListener('click',()=>{
  
    const input=document.getElementsByTagName('input')[0].value;
   
        if(input=='Aditya'){
            window.location.href='http://127.0.0.1:5500/ToDoList/mainApp.html';
            
            alert(`Hi ${input.slice(0,3)} welcome to the To Do List App`);
        }
        else{
            alert(`${input} is unvalid username`);
        }
})

