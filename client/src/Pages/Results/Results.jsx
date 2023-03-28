import React, {useState, useEffect} from 'react'
import { redirect } from 'react-router-dom'
import PleaseLogin from '../Auth/PleaseLogIn'
import FacultyResult from './FacultyResult'
import StudentResult from './StudentResult'

function Results() {
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
    {login ? (role==='faculty'?<FacultyResult/>:<StudentResult/>): <PleaseLogin/>}
    
        
    </div>
  )
}

export default Results