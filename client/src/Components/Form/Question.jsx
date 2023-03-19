import React, {useState} from 'react'
import axios from 'axios'

function Question(props) {
    const [formData, setFormData] = useState({
        "question": '',
        "option_a": '',
        "option_b": '',
        "option_c": '',
        "option_d": '',
        "answer": '',
        "question_paper_id": props.paperId
    })

    async function handleSubmit(){
        try {
          const response = await axios.post("http://localhost:5000/api/v1/createquestion",
          formData,
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
          )
          console.log(response)
          alert('Question Added Successfully')
        } catch (error) {
          console.error(error)
          alert('Failed to Add Question')
        }
    }

    function handleChange(e){
        const newFormData={...formData}
        newFormData[e.target.id]=e.target.value
        setFormData(newFormData)
      }

  return (
    <div>
      <form className="flex flex-col max-w-4xl px-16 mx-auto my-20 shadow-md shadow-indigo-600 border border-indigo-300 pt-8 pb-16" onSubmit={handleSubmit}>
      <h2 className="text-center mb-12 text-4xl font-semibold font-mono">Add Question</h2>
      <div className='grid grid-cols-1'>
      <div className='grid m-4 grid-cols-2'>
      <label htmlFor="question" className="mb-2">Question:</label>
      <textarea type="text" id="question" name="question" placeholder="Enter Question" onChange={handleChange} className="mb-4 border p-2 m-1 border-indigo-300 shadow-md shadow-indigo-400 py-2" required />
      </div>
      <div className='grid m-4 grid-cols-2'>
      <label htmlFor="option_a" className="mb-2">Option A:</label>
      <textarea type="text" id="option_a" name="option_a" placeholder="Enter Option A" onChange={handleChange} className="mb-4 border p-2 m-1 border-indigo-300 shadow-md shadow-indigo-400 py-2" required />
      </div>
      <div className='grid m-4 grid-cols-2'>
      <label htmlFor="option_b" className="mb-2">Option B:</label>
      <textarea id="option_a" name="option_a" placeholder="Enter Option B" onChange={handleChange} className="mb-4 py-2 border p-2 m-1 border-indigo-300 shadow-md shadow-indigo-400 resize-none" required></textarea>
      </div>
      <div className='grid m-4 grid-cols-2'>
      <label htmlFor="option_c" className="mb-2">Option C:</label>
      <textarea type="text" id="option_c" name="option_c" placeholder="Enter Option C" onChange={handleChange} className="mb-4 border p-2 m-1 border-indigo-300 shadow-md shadow-indigo-400 py-2" required />
      </div>
      <div className='grid m-4 grid-cols-2'>
      <label htmlFor="option_d" className="mb-2">Option D:</label>
      <textarea type="text" id="option_d" name="option_d" placeholder="Enter Option D" onChange={handleChange} className="mb-4 border p-2 m-1 border-indigo-300 shadow-md shadow-indigo-400 py-2" required />
      </div>
      <div className='grid m-4 grid-cols-2'>
      <label htmlFor="answer" className="mb-2">Answer:</label>
      <input type="text" id="answer" name="answer" placeholder="Enter Answer Option in lowercase" onChange={handleChange} className="mb-4 border p-2 m-1 border-indigo-300 shadow-md shadow-indigo-400 py-2" required />
      </div>
        </div>
      <button type="submit" className="bg-blue-500 text-white font-semibold text-xl py-2 rounded-md border-none cursor-pointer w-full">Add Question</button>
    </form>
    </div>
  )
}

export default Question
