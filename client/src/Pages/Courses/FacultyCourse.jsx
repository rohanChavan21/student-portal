import React, { useState } from 'react'
import Course from '../../Components/Form/Course'
import ViewCourse from '../../Components/List/ViewCourse'

function FacultyCourse() {

  const [toggle, setToggle] = useState(false)

  function handleToggle() {
    setToggle(!toggle)
  }

  return (
    <div>
      <div className='p-10 flex text-white font-semibold'>
        <button onClick={handleToggle} className='ml-auto mr-24 bg-indigo-500 p-6 rounded-2xl'>
          Create Course
        </button>
        <button onClick={handleToggle} className='mr-auto ml-24 bg-indigo-500 p-6 rounded-2xl'>
          View Courses
        </button>
      </div>
      <div className=' shadow-md shadow-indigo-900 p-[2px]'></div>
      <div>
        {toggle? <Course/>: <ViewCourse/>}
      </div>
    </div>
  )

}

export default FacultyCourse
