import axios from 'axios';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Exam() {

    const location = useLocation();
    const paperId = new URLSearchParams(location.search).get('id')
    const paperName = new URLSearchParams(location.search).get('name')

    useEffect(()=> {
      async function getQuestions(){
        try {
          const response = await axios.get('http://localhost:5000/api/v1/getquestions')
        } catch (error) {
          console.error(error);
          alert('Failed to Fetch Paper')
        }
      }
      getQuestions();
    }, [])


  return (
    <div>
      Exam Page
    </div>
  )
}

export default Exam
