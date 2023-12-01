const button = document.querySelector('.material-symbols-outlined');
const verticalBar = document.querySelector('.links');

button.addEventListener('click', (event) => {
    // Stop the event propagation
    event.stopPropagation();
    
    verticalBar.style.transform = 'translate(0,0)';
});
 
const body=document.body;
body.addEventListener('click', (event) => {
    const width=270;
    const verticalCoordinatesOrXcoordinate=event.clientX;
    console.log(verticalCoordinatesOrXcoordinate);
    if(verticalCoordinatesOrXcoordinate>width){
        verticalBar.style.transform = 'translate(-100%,0)';
    }
    
});
