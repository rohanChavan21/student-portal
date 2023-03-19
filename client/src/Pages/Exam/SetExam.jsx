import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Question from '../../Components/Form/Question';
import ViewExam from './ViewExam';

function SetExam() {

    const location = useLocation();
    const paperId = new URLSearchParams(location.search).get('id')
    const paperName = new URLSearchParams(location.search).get('name')
    const [toggle, setToggle] = useState(false)

  function handleToggle() {
    setToggle(!toggle)
  }

    useEffect(()=>{
        async function getQuestions(){

        }
    }, [])

  return (
    <div>
      <div className='p-10 flex text-white font-semibold'>
        <button onClick={handleToggle} className='ml-auto mr-24 bg-indigo-500 p-6 rounded-2xl'>
          Add Question
        </button>
        <button onClick={handleToggle} className='mr-auto ml-24 bg-indigo-500 p-6 rounded-2xl'>
          View Questions
        </button>
      </div>
      <div className=' shadow-md shadow-indigo-900 p-[2px]'></div>
      <div>
        {toggle? <Question paperId={paperId}/> :<ViewExam/> }
      </div>
    </div>
  )
}

export default SetExam
