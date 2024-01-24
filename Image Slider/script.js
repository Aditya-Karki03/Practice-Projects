const next=document.querySelector('.next');
const prev=document.querySelector('.prev');
const slider=document.querySelector('.slider');
const slids=document.querySelectorAll('.slid')
let i=0;
let k=0
next.addEventListener('click',()=>{
    image();
})

slids.forEach((slid) => {
    slid.addEventListener('click',(e)=>{
        alert('HI')
        e.target.classList.add('black')
    })
});

async function image(){

    imageloader(i);
    i++;
    
}
async function imageloader(i){
    const accessKey='3dcRud0fvwd548TKUuh3yvmgJEO2J88FoYgD64Y_EWA';
    const limit = 5;
    // const images=await fetch(`https://api.unsplash.com/search/photos?query=mountains&client_id=${accessKey}&per_page=${limit}`).then((res)=>res.json)
    // console.log(images);
    const request=new Request(`https://api.unsplash.com/search/photos?query=mountains&client_id=${accessKey}&per_page=${limit}`);
    const response=await fetch(request);
    const imgObjText=await response.text();
    const imgObj=JSON.parse(imgObjText);
    const images=imgObj.results;
    for(;k<limit;k++){
        const div=document.createElement('div');
        div.classList.add('slid');
        slider.appendChild(div);
       
    }
   
    for(let j=i;j<=i;j++){
        console.log(images[j]);
        
    }
    let inc=0;
    const slids=document.querySelectorAll('.slid')
    // slids.forEach((slid)=>{
        
    //     slid.addEventListener('click',(e)=>{
            
    //         e.target.classList.add('black');
    //         if(e.target.classList[1]==='black'){
    //             console.log('hi')
    //             e.target.classList.replace('black','white')
    //         }
    //     })
    //     inc++
    // })
    for(let k=0;k<slids.length;k++){
        slids[k].addEventListener('click',(e)=>{
            e.target.classList.add('black');
            if(k>0){
                for(let j=k+1;j<slids.length;j++){
                    if(slids[j].classList[1]==='black'){
                            slids[j].classList.replace('black','white');
                    }
                }
            }
            else if(k<slids.length-1){
                for(let j=k-1;j>=0;j--){
                    if(slids[j].classList[1]==='black'){
                        slids[j].classList.replace('black','white');
                }
                }
            }
        })
    }
}