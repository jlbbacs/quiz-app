import React from 'react';
import './quiz.css';
import { useState } from 'react';
import {data} from '../../assets/Data';



const Quiz = () => {

    let [index,setIndex] = useState(0) 
    let [question,setQuestion]  = useState(data[index])
    let [lock,setLock] = useState(false)

    const checkAnswer = (e,answer) => {
        if(lock===false){
            if(question.answer === answer){
                e.target.classList.add("correct");
                setLock(true);
            }
            else {
                e.target.classList.add("wrong");
                setLock(true);
            }
        }
        
       
    }

  return (
    <div className='container'>
        <h1>Quiz app</h1> 
        <hr />
        <h2>{index + 1}. {question.question}</h2>
         <ul>
            <li onClick={(e)=>{checkAnswer(e,1)}}>{question.option1}</li>
            <li onClick={(e)=>{checkAnswer(e,2)}}>{question.option2}</li>
            <li onClick={(e)=>{checkAnswer(e,3)}}>{question.option3}</li>
            <li onClick={(e)=>{checkAnswer(e,4)}}>{question.option4}</li>
         </ul>
         <button>Next</button>
         <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default Quiz
