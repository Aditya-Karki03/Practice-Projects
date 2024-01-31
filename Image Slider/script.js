const slider=document.querySelector('.slider');
const dotContainer=document.querySelector('.dots-container');

async function fetchListOfImages(){
    try {
        const response=await fetch(`https://picsum.photos/v2/list?page=1&limit=10`,{method:"GET"})
        const imagesList=await response.json();
        if(imagesList && imagesList.length>0)   displayImages(imagesList);

    } catch (error) {
        console.log(error);
    }
}
fetchListOfImages();

function displayImages(getImagesList){
    slider.innerHTML=getImagesList.map((item)=> 
    `<div class='slid'>
        <img src="${item.download_url}" alt="${item.id}" />
    </div>`
    ).join('')

    dotContainer.innerHTML=getImagesList.map((item,index)=>(`<span class="dot" data-slide="${index}"></span>`)).join(' ')
}