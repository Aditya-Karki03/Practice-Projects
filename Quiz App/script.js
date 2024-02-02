const questions=document.getElementById('number');
const category=document.querySelector('select[name="trivia_category"]');
const difficulty=document.querySelector('select[name="trivia_difficulty"]');
const type=document.querySelector('select[name="trivia_type"]')
const btn=document.querySelector('.btn');
const inputs=document.querySelector('.inputs');

const handleClick=(e)=>{
    console.log(e)
    e.preventDefault();
    const Quest=questions.value;
    const Cate=category.value;
    const Diff=difficulty.value;
    const Type=type.value;
    
    if(!InputValidator(Quest)){
        alert('Please enter valid number of questions');
       return;
        
    }
    urlGenerator(Quest,Cate,Diff,Type)
    
}
btn.addEventListener('click', handleClick)

const InputValidator=(numberOfQuestions)=>{
    if(numberOfQuestions>0) return true;
    else return false;
}
const urlGenerator=(Quest,Cate,Diff,Type)=>{
    let url=`https://opentdb.com/api.php?amount=${Quest}`;
    if(Cate!=='any')    url=`https://opentdb.com/api.php?amount=${Quest}&category=${Cate}`;
    if(Diff!=='any')  url=`https://opentdb.com/api.php?amount=${Quest}&category=${Cate}&difficulty=${Diff}`;
    if(Type!=='any')    url=`https://opentdb.com/api.php?amount=${Quest}&category=${Cate}&difficulty=${Diff}&type=${Type}`;
    console.log(url)
    URLUse(url);
}

const URLUse=(url)=>{
    const xhr=new XMLHttpRequest();
    xhr.open('GET',url);

    xhr.onreadystatechange=function(){
        if(xhr.readyState===4){
            const result=JSON.parse(this.responseText);
            // console.log(result);
            resultDisplayer(result);
        }
    }
    xhr.send();
    // console.log(result)
    
}

const resultDisplayer=(res)=>{
    // console.log(res.results[0]);
    const values=res.results;
    // console.log(typeof(values))
    values.forEach(value=>{
        console.log(value)
    })
    values.map((value)=>{
        const h2=document.createElement('h2');
        h2.textContent=value['question'];
        const totalAnswers=[...value.correct_answer,...value.correct_answer];
        let arrayofUniqueIndex=[];
        arrayofUniqueIndex.length=4;
        for(let i=0;i<arrayofUniqueIndex.length;i++){
            const num=Math.floor(Math.random()*4);
            
            if(arrayofUniqueIndex.length>0){
                if(arrayofUniqueIndex[0]!==num && arrayofUniqueIndex[1]!==num && arrayofUniqueIndex[2]!==num && arrayofUniqueIndex[3]!==num){
                    arrayofUniqueIndex.push(num);
                }
            }
            else{
                arrayofUniqueIndex.push(num);
            }
            
        }
        for(let j=0;j<arrayofUniqueIndex.length;j++){
            const label=document.createElement('label');
            const index=arrayofUniqueIndex[j];
            label.innerHTML=`<input type="radio" name="option" value="option_1" />
            ${totalAnswers[index]}`;
            h2.appendChild(label);
        }

    }
    )
    // values.forEach((value))
}

// inputs.addEventListener('change',(e)=>{
//     console.log(e.target.value);
//     let TotalQuestions=10;
//     let category='any';
//     let difficulty='any';
//     let type='any'
//     if(e.target.id==='number')  TotalQuestions=e.target.value;
//     if(TotalQuestions<1) questions.value=1;
//     else if(e.target.name==='trivia_category')  category=e.target.value;
//     else if(e.target.name==='trivia_difficulty')    difficulty=e.target.value;
//     else if(e.target.name==='trivia_type')  type=e.target.value;

//     urlGenerator(TotalQuestions,category,difficulty,type)
// })





// questions.addEventListener('change',(e)=>{
//     TotalQuestions=e.target.value;

//     urlGenerator(TotalQuestions)
// })




const xhr=new XMLHttpRequest();
