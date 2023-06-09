import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ViewPaper() {

  const [papers, setPapers] = useState([])
  const [paperId, setPaperId] = useState(null);
  const [paperName, setPaperName] = useState(null);

  const navigate = useNavigate();

  useEffect(()=>{
    async function getPapers() {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/getquestionpapers')
        .then((response) => {
          console.log(response.data);
          let papers = response.data.question_papers;
          setPapers(papers);
        }).catch(error=>{
          console.error(error);
        });
  
  
      } catch (error) {
        console.error(error)
        alert('Failed To fetch papers')
      }
    }
    getPapers();
  }, [])

  function handleSetPaper(id, name){
    setPaperId(id)
    setPaperName(name)
    navigate(`/setexam?id=${id}&name=${name}`)
  }

  function handleViewPaper(id, name){
    setPaperId(id)
    setPaperName(name)
    navigate(`/viewexam?id=${id}&name=${name}`)
  }

  return (
    <div className='p-2'>
        <div className='grid grid-cols-5 mt-5 mb-10 gap-4 font-semibold text-xl rounded-xl'>
          <div className='justify-center text-center flex p-4 my-auto'>Paper ID:</div>
          <div className='justify-center text-center flex p-4 my-auto'>Course Name:</div>
          <div className='justify-center text-center flex p-4 my-auto'>Duration</div>
          <div className='justify-center text-center flex p-4 my-auto bg-indigo-400 rounded-2xl text-white'>Edit</div>
          <div className='justify-center text-center flex p-4 my-auto bg-indigo-400 rounded-2xl text-white'>View</div>
        </div>
      {papers && papers.sort((a,b)=> a.ID - b.ID).map((item)=> {
        console.log(item)
        return (
        <div className='grid grid-cols-5 my-4 gap-4 border border-amber-400 shadow-sm font-semibold shadow-gray-400 rounded-xl' key={item.ID}>
          <div className='justify-center text-center flex p-4 my-auto'>{item.ID}</div>
          <div className='justify-center text-center flex p-4 my-auto'>{item.NAME}</div>
          <div className='justify-center text-center flex p-4 my-auto'>{item.DURATION_MINUTES}</div>
          <div className='justify-center text-center flex p-4 my-auto'><button onClick={()=>handleSetPaper(item.ID, item.NAME)} className='bg-indigo-600 p-3 rounded-2xl text-white'>Set/Edit Paper</button></div>
          <div className='justify-center text-center flex p-4 my-auto'><button onClick={()=>handleViewPaper(item.ID, item.NAME)} className='bg-indigo-600 p-3 rounded-2xl text-white'>View Paper</button></div>
        </div>
      )})}
    </div>
  )
}

export default ViewPaper
