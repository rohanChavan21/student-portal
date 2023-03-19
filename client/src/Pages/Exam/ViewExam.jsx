import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function ViewExam() {

    const location = useLocation();
    const params = new URLSearchParams(location.search)
    const paperId = params.get('id')
    const paperName = params.get('name')

    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])

    useEffect(()=>{
        async function getQuestions(){
            try {
                const response = await axios.post('http://localhost:5000/api/v1/getquestions',
                { 
                    question_paper_id: paperId 
                },
                {
                    headers: {
                      'Content-Type': 'application/json'
                    }
                });
                setQuestions(response.data.questions);
                setAnswers(response.data.answers);
            } catch (error) {
                console.error(error)
                alert('Failed To fetch questions')
            }
        }
        getQuestions();
    },[])

  return (
    <div>
    <div className='p-6 justify-center text-center text-4xl my-10 font-semibold'>
      {paperName}
    </div>
    <div>
        {questions && questions.sort((a, b) => a.ID - b.ID).map((item)=>{
            console.log(item)
            return (
                <div className='' key={item.ID}>
                    <div>{item.QUESTION}</div>
                    <div className='grid grid-cols-2'>
                        <div className='p-6'></div>
                        <div>{item.OPTION_A}</div>
                        <div className='p-6'></div>
                        <div>{item.OPTION_B}</div>
                        <div className='p-6'></div>
                        <div>{item.OPTION_C}</div>
                        <div className='p-6'></div>
                        <div>{item.OPTION_D}</div>
                    </div>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default ViewExam
