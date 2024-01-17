const inputBar=document.querySelector('form input[type="text"]');
const submit=document.querySelector('#sub');
const imageContainer=document.querySelector('.img-container');
const mainContainer=document.querySelector('.main-container');
let title;
// const images=document.querySelectorAll('img');
// const labels=document.querySelectorAll('label');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    title=inputBar.value;
    searchImages(title);
    
})

async function searchImages(name){
    const accessKey='3dcRud0fvwd548TKUuh3yvmgJEO2J88FoYgD64Y_EWA';
    let URL=`https://api.unsplash.com/search/photos?query=${name}&client_id=${accessKey}`;
    const request=new Request(URL);
    const response=await fetch(request);
    const imgObjText=await response.text();
    const imgObj=JSON.parse(imgObjText);
    console.log(imgObj);
    const size=imgObj.results.length;
    imageChanger.innerHTML='';
    removeChildrenOfDiv(imgObj,size);
    // imageChanger(imgObj,size);
    // labelChanger(imgObj,size);

    
}
let img;
let div;
function imageChanger(Obj,images){
    for(let i=0;i<images;i++){
        div=document.createElement('div');
        div.setAttribute('class','img')
        div.innerHTML=`<img
        src='${Obj.results[i].urls["raw"]}'
        alt='${Obj.results[i].alt_description}'
      /><p>${Obj.results[i].alt_description}</p>`;
        imageContainer.appendChild(div);
    }

}
function removeChildrenOfDiv(imgObj, size) {
    if (imageContainer.children.length == 0) {
        imageChanger(imgObj, size);
        labelChanger(imgObj, size);
        buttonCreator();
    } else {
        while (imageContainer.firstChild) {
            imageContainer.removeChild(imageContainer.firstChild);
        }
        imageChanger(imgObj, size);
        labelChanger(imgObj, size);
        buttonCreator();
    }
}

function buttonCreator(){
    const btn=document.createElement('button');
    btn.classList.add('button')
    btn.innerHTML=`Show more`;
    mainContainer.appendChild(btn);
}

// function removeChildrenOfDiv(imgObj, size) {
//     imageContainer.innerHTML = ''; // Set innerHTML to an empty string, removing all child elements
//     imageChanger(imgObj, size);
//     labelChanger(imgObj, size);
// }





