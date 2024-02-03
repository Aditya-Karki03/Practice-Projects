const questions=document.getElementById('number');
const category=document.querySelector('select[name="trivia_category"]');
const difficulty=document.querySelector('select[name="trivia_difficulty"]');
// const type=document.querySelector('select[name="trivia_type"]')
const btn=document.querySelector('.btn');
const inputs=document.querySelector('.inputs');
const mainContainer=document.querySelector('.main-container');

const handleClick=(e)=>{

    console.log(e)
    e.preventDefault();
    mainContainer.innerHTML='';
    const Quest=questions.value;
    const Cate=category.value;
    const Diff=difficulty.value;
    // const Type=type.value;
    
    if(!InputValidator(Quest)){
        alert('Please enter valid number of questions');
       return;
        
    }
    urlGenerator(Quest,Cate,Diff);
    questions.value='';
    category.value='any';
    difficulty.value='any';
    // type.value='any';
}
btn.addEventListener('click', handleClick)

const InputValidator=(numberOfQuestions)=>{
    if(numberOfQuestions>0) return true;
    else return false;
}
const urlGenerator=(Quest,Cate,Diff,Type)=>{
    let url=`https://opentdb.com/api.php?amount=${Quest}&type=multiple`;
    if(Cate!=='any')    url=`https://opentdb.com/api.php?amount=${Quest}&category=${Cate}&type=multiple`;
    else    url=`https://opentdb.com/api.php?amount=${Quest}`;
    if(Diff!=='any' && Cate!=='any')  url=`https://opentdb.com/api.php?amount=${Quest}&category=${Cate}&difficulty=${Diff}&type=multiple`;
    else if(Diff!=='any' && Cate==='any')   url=`https://opentdb.com/api.php?amount=${Quest}&difficulty=${Diff}&type=multiple`;  
    else if(Diff==='any' && Cate!=='any')   url=`https://opentdb.com/api.php?amount=${Quest}&category=${Cate}&type=multiple`;
    if( Diff!=='any' && Cate!=='any')    url=`https://opentdb.com/api.php?amount=${Quest}&category=${Cate}&difficulty=${Diff}&type=multiple`;
    
    else if( Diff==='any' && Cate!=='any')   url=`https://opentdb.com/api.php?amount=${Quest}&category=${Cate}&type=multiple`;
    else if( Diff!=='any' && Cate==='any')   url=`https://opentdb.com/api.php?amount=${Quest}&type=multiple`;
    // else    url=`https://opentdb.com/api.php?amount=${Quest}&category=${Cate}&difficulty=${Diff}`;
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

    const correctAnswer=[];

    
    //let i=0;
     values.map((value)=>{
         const div=document.createElement('div');
         div.classList.add('question');

         const ans=document.createElement('div');
         ans.classList.add('ans');
         
         const h2=document.createElement('h2');
         h2.textContent=value['question'];
         div.appendChild(h2);
    
         correctAnswer.push(value.correct_answer);
         const totalAnswers=[...value.incorrect_answers,value.correct_answer];


         const shuffledAnswers=shuffleArray(totalAnswers);


         for(let j=0;j<shuffledAnswers.length;j++){
             const label=document.createElement('label');
             label.classList.add('label');
             
             label.innerHTML=`<input type="radio" name="${value['question']}"  value="${shuffledAnswers[j]}" />
             ${shuffledAnswers[j]}`;
             
             ans.appendChild(label);
             
         }
         
        
         mainContainer.appendChild(div);
         mainContainer.appendChild(ans);
    }
    )
    const submitBtn=document.createElement('button');
    submitBtn.textContent='Submit'
    submitBtn.addEventListener('click',()=>{
       answerChecker(correctAnswer)
    })
    if(mainContainer.lastElementChild!=='button'){
       
         mainContainer.appendChild(submitBtn)
    }

    const answerChecker=(correctAnswer)=>{
        const inps=document.querySelectorAll('input[type="radio"]');
        // console.log(inps);
        for(let i=0,j=0;i<inps.length;i+=4,j++){
            // console.log(inps[i].checked);
            // console.log(inps[i+1].checked);
            // console.log(inps[i+2].checked);
            // console.log(inps[i+3].checked);
            // console.log(inps[i].value)
            // console.log(inps[i+1].value);
            // console.log(inps[i+2].value);
            // console.log(inps[i+3].value);

            console.log(correctAnswer[j]);
            
            
            if(inps[i].checked && correctAnswer[j]==inps[i].value) inps[i].parentElement.classList.add('right');   
            else if(inps[i].checked){
                inps[i].parentElement.classList.add('wrong');
            }
            // else inps[i].parentElement.classList.add('wrong');

            if(inps[i+1].checked && correctAnswer[j]==inps[i+1].value)    inps[i+1].parentElement.classList.add('right');
            else if(inps[i+1].checked){
                inps[i+1].parentElement.classList.add('wrong');
            }
            // else inps[i+1].style.backgroundColor='red';

            if(inps[i+2].checked && correctAnswer[j]==inps[i+2].value)    inps[i+2].parentElement.classList.add('right');
            else if(inps[i+2].checked){
                inps[i+2].parentElement.classList.add('wrong');
            }
            // else inps[i+2].style.backgroundColor='red';

            if(inps[i+3].checked && correctAnswer[j]==inps[i+3].value)    inps[i+3].parentElement.classList.add('right');
            else if(inps[i+3].checked){
                inps[i+3].parentElement.classList.add('wrong');
            }
            // else inps[i+3].style.backgroundColor='red';
        }
    }




    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }


}






const xhr=new XMLHttpRequest();
