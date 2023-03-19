import React, {useState, useEffect} from 'react'
import axios from 'axios';

function StudentCourse() {
  const [courses, setCourses] = useState([])

    useEffect(()=>{
      async function getCourses() {
        try {
          const response = await axios.get('http://localhost:5000/api/v1/getcourses')
          .then((response) => {
            console.log(response.data);
            let courses = response.data.courses;
            setCourses(courses);
          }).catch(error=>{
            console.error(error);
          });
    
    
        } catch (error) {
          console.error(error)
          alert('Failed To fetch papers')
        }
      }
      getCourses();
    }, [])

  return (
    <div>
      <div className='text-4xl mt-8 mb-15 text-center underline font-serif font-semibold'> Courses Enrolled </div>
      <div className='p-[2px] shadow-md shadow-indigo-600 mt-10 mb-15'></div>
      <div className='p-2'>
          <div className='grid grid-cols-3 mt-5 mb-10 gap-4 font-semibold text-xl rounded-xl'>
            <div className='justify-center text-center flex p-4 my-auto'>Course Name:</div>
            <div className='justify-center text-center flex p-4 my-auto'>Course Desctiption:</div>
            <div className='justify-center text-center flex p-4 my-auto'>Course Credits:</div>
          </div>
        {courses && courses.sort((a,b)=> a.ID - b.ID).map((item)=> {
          console.log(item)
          return (
          <div className='grid grid-cols-3 my-4 gap-4 border border-amber-400 shadow-sm font-semibold shadow-gray-400 rounded-xl' key={item.ID}>
            <div className='justify-center text-center flex p-4 my-auto'>{item.COURSE_NAME}</div>
            <div className='justify-center text-center flex p-4 my-auto'>{item.COURSE_DESC}</div>
            <div className='justify-center text-center flex p-4 my-auto'>{item.COURSE_CREDITS}</div>
          </div>
        )})}
      </div>
    </div>
  )
}

export default StudentCourse
