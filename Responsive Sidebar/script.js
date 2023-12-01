const toggleButton=document.querySelector('.bx-menu');
toggleButton.addEventListener('click',()=>{
    const width=widthGetter();
    if(width==='260px'){
        widthSetter();
    }
    else{
        anotherWidthSetter();
    }
})

// const widthGetter=document.querySelector('.menus');
function widthGetter(){
    const getter=document.querySelector('.menus');
    const computedStyles=window.getComputedStyle(getter);
    const width=computedStyles.width;
    return width;
}
function widthSetter(){
    const setter=document.querySelector('.menus');
    setter.style.width='56px';
    setter.style.transition='0.35s';
}
function anotherWidthSetter(){
    const setter=document.querySelector('.menus');
    setter.style.width='260px';
    setter.style.transition='0.35s';
}