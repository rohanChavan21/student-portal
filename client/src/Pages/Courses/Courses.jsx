import React, {useState, useEffect} from 'react'
import { redirect } from 'react-router-dom'
import PleaseLogin from '../Auth/PleaseLogIn'
import FacultyCourse from './FacultyCourse'
import StudentCourse from './StudentCourse'

function Courses() {
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
    // const user = localStorage.getItem('user')? localStorage.getItem('user') : false
    // user === false ? setLogin(false) : setLogin(true)
    // setRole(user.user_role)
  }, [role, login])
  return (
    <div>
    {login ? (role==='faculty'?<FacultyCourse/>:<StudentCourse/>): <PleaseLogin/>}
    
        
    </div>
  )
}

export default Courses