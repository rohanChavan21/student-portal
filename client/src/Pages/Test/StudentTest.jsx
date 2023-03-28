import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function StudentTest() {

  const [papers, setPapers] = useState([])
  const [selectedOption, setSelectedOption] = useState(null)
  const [selectedPaperName, setSelectedPaperName] = useState('')
  const [duration, setDuration] = useState(0);

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

  function handleSelectionChange(event) {
    const { value, selectedIndex } = event.target;
    setSelectedOption(value);
    setSelectedPaperName(papers[selectedIndex - 1]?.NAME || '');
    setDuration(papers[selectedIndex-1].DURATION_MINUTES || 0);
  }

  function handleExamAttempt(){
    if(selectedOption){
      navigate(`/exam?id=${selectedOption}&name=${selectedPaperName}&duration=${duration}`)
    } else{
      alert('Please Select a paper to attempt')
    }
  }

  return (
    <div className='flex'>
      <div className='mx-auto grid grid-cols-1 p-10 mt-24 text-lg'>
        <div className='justify-center p-5 text-2xl font-semibold border-4 border-amber-100 rounded-[2rem] shadow-md shadow-indigo-500'>
          <select value={selectedOption} className='p-2 border border-amber-200 rounded-[1rem]' onChange={handleSelectionChange}>
          <option value="">Select Paper ----------</option>
            {papers && papers.sort((a, b) => a.ID - b.ID).map((item)=>{
              return (
                <option key={item.ID} value={item.ID}>{item.NAME}</option>
              )
            })}
          </select>
        </div>
        <div className='justify-center mx-auto'>
            <button onClick={handleExamAttempt} className='bg-indigo-600 p-8 rounded-2xl text-white font-semibold text-xl my-20'>Attempt Paper</button>
        </div>
      </div>
    </div>
  )
}

export default StudentTest