import React, {useState} from 'react'
import axios from 'axios';

function Paper() {
    const [formData, setFormData] = useState({
        "name": '',
        "course_id": '',
        "duration": ''
    })

    async function handleSubmit(){
        try {
            const response = await axios.post('http://localhost:5000/api/v1/createquestionpaper', formData,
            {
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            console.log(response)
            alert('Paper Added Successfully')
        } catch (error) {
            console.error(error)
            alert('Failed to Add Paper')
        }
    }

    function handleChange(e){
        const newFormData={...formData}
        newFormData[e.target.id]=e.target.value
        setFormData(newFormData)
      }

  return (
    <div>
        <form className="flex flex-col max-w-xl px-16 mx-auto my-20 shadow-md shadow-indigo-600 border border-indigo-300 pt-8 pb-16" onSubmit={handleSubmit}>
      <h2 className="text-center mb-12 text-4xl font-semibold font-mono">Add Paper</h2>
      <div className='grid grid-cols-1'>
      <div className='grid m-4 grid-cols-2'>
      <label htmlFor="name" className="mb-2">Paper Name:</label>
      <input type="text" id="name" name="name" placeholder="Paper Name" onChange={handleChange} className="mb-4 border p-2 m-1 border-indigo-300 shadow-md shadow-indigo-400 py-2" required />
      </div>
      <div className='grid m-4 grid-cols-2'>
      <label htmlFor="course_id" className="mb-2">Course ID:</label>
      <input type="number" id="course_id" name="course_id" placeholder="Course ID" onChange={handleChange} className="mb-4 border p-2 m-1 border-indigo-300 shadow-md shadow-indigo-400 py-2" required />
      </div>
      <div className='grid m-4 grid-cols-2'>
      <label htmlFor="duration" className="mb-2">Duration:</label>
      <input type="number" id="duration" name="duration" placeholder="Duration in Minutes" onChange={handleChange} className="mb-4 border p-2 m-1 border-indigo-300 shadow-md shadow-indigo-400 py-2" required />
      </div>
        </div>
      <button type="submit" className="bg-blue-500 text-white font-semibold text-xl py-2 rounded-md border-none cursor-pointer w-full">Add Paper</button>
    </form>
    </div>
  )
}

export default Paper
