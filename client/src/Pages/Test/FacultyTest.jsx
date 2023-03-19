import React, { useState } from 'react'
import Paper from '../../Components/Form/Paper'
import ViewPaper from '../../Components/List/ViewPaper'

function FacultyTest() {

  const [toggle, setToggle] = useState(false)

  function handleToggle() {
    setToggle(!toggle)
  }

  return (
    <div>
      <div className='p-10 flex text-white font-semibold'>
        <button onClick={handleToggle} className='ml-auto mr-24 bg-indigo-500 p-6 rounded-2xl'>
          Create Paper
        </button>
        <button onClick={handleToggle} className='mr-auto ml-24 bg-indigo-500 p-6 rounded-2xl'>
          View Papers
        </button>
      </div>
      <div className=' shadow-md shadow-indigo-900 p-[2px]'></div>
      <div>
        {toggle? <Paper/>: <ViewPaper/>}
      </div>
    </div>
  )
}

export default FacultyTest