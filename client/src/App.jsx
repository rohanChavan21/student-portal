import React, { useEffect, useState } from 'react'
import { BrowserRouter, redirect, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Auth/Login'
import SignUp from './Pages/Auth/SignUp'
import Courses from './Pages/Courses/Courses'
import Exam from './Pages/Exam/Exam'
import SetExam from './Pages/Exam/SetExam'
import ViewExam from './Pages/Exam/ViewExam'
import Home from './Pages/Home/Home'
import LandingPage from './Pages/Home/LandingPage'
import Results from './Pages/Results/Results'
import Tests from './Pages/Test/Tests'

function App() {

  const [role, setRole] = useState('')
  const [login, setLogin] = useState(false)

  useEffect(()=>{
    if(!localStorage.getItem('user')){
      redirect('/login')
    }

    const user = localStorage.getItem('user')? localStorage.getItem('user') : false
    user === false ? setLogin(false) : setLogin(true)
    console.log(user.user_role)
    setRole(user.user_role)
  }, [role, login])

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={login ?<Home/>: <Login/>} exact path='/'/>
        <Route element={<Login/>} exact path='/login'/>
        <Route element={<SignUp/>} exact path='/signup'/>
        <Route element={<Courses/>} exact path='/course'/>
        <Route element={<Tests/>} exact path='/test'/>
        <Route element={<Results/>} exact path='/results'/>
        <Route element={<Exam/>} exact path='/exam'/>
        <Route element={<SetExam/>} exact path='/setexam'/>
        <Route element={<ViewExam/>} exact path='/viewexam'/>
      </Routes>
    </BrowserRouter>
  )
}


export default App