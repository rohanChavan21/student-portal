import React, { useState,useEffect } from 'react'
import { redirect } from 'react-router-dom'
import PleaseLogin from '../Auth/PleaseLogIn'
import FacultyTest from './FacultyTest'
import StudentTest from './StudentTest'

function Tests() {


  const [role, setRole] = useState('')
  const [login, setLogin] = useState(false)

  useEffect(()=>{
    if(!localStorage.getItem('user')){
      redirect('/login')
    } else {
      setLogin(true)
    }
    let user_role = '';
    if(localStorage.getItem('student')){
      user_role = 'student';
      setRole('student')
    } else if(localStorage.getItem('faculty')){
      user_role = 'faculty';
      setRole('faculty')
    }
  }, [role, login])

  return (
    <div>
    {login ? (role==='faculty'? <FacultyTest/>: <StudentTest/>): <PleaseLogin/>}
         
    </div>
  )
}

export default Tests