import React, {useState} from 'react'
import axios from 'axios'

function Course() {
    const [formData, setFormData] = useState({
        "course_name": '',
        "course_description": '',
        "course_credits": ''
    })

    async function handleSubmit(){
        try {
          const response = await axios.post("http://localhost:5000/api/v1/createcourse",
          formData,
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
          )
          console.log(response)
          alert('Course Created Successfully')
        } catch (error) {
          console.error(error)
          alert('Failed to create course')
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
      <h2 className="text-center mb-12 text-4xl font-semibold font-mono">Add Course</h2>
      <div className='grid grid-cols-1'>
      {/* <div className='grid m-4 grid-cols-2'>
      <label htmlFor="course_id" className="mb-2">Course ID:</label>
      <input type="text" id="course_id" name="course_id" placeholder="Course ID" onChange={handleChange} className="mb-4 border p-2 m-1 border-indigo-300 shadow-md shadow-indigo-400 py-2" required />
      </div> */}
      <div className='grid m-4 grid-cols-2'>
      <label htmlFor="course_name" className="mb-2">Course Name:</label>
      <input type="text" id="course_name" name="course_name" placeholder="Course Name" onChange={handleChange} className="mb-4 border p-2 m-1 border-indigo-300 shadow-md shadow-indigo-400 py-2" required />
      </div>
      <div className='grid m-4 grid-cols-2'>
      <label htmlFor="course_description" className="mb-2">Course Description:</label>
      <textarea id="course_description" name="course_description" placeholder="Course Description" onChange={handleChange} className="mb-4 py-2 border p-2 m-1 border-indigo-300 shadow-md shadow-indigo-400 resize-none" required></textarea>
      </div>
      <div className='grid m-4 grid-cols-2'>
      <label htmlFor="course_credits" className="mb-2">Course Credits:</label>
      <input type="number" id="course_credits" name="course_credits" placeholder="Course Credits" onChange={handleChange} className="mb-4 border p-2 m-1 border-indigo-300 shadow-md shadow-indigo-400 py-2" required />
      </div>
        </div>
      <button type="submit" className="bg-blue-500 text-white font-semibold text-xl py-2 rounded-md border-none cursor-pointer w-full">Add Course</button>
    </form>
    </div>
  )
}

export default Course
