import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Auth/Login'
import SignUp from './Pages/Auth/SignUp'
import Courses from './Pages/Courses/Courses'
import Exam from './Pages/Exam/Exam'
import SetExam from './Pages/Exam/SetExam'
import ViewExam from './Pages/Exam/ViewExam'
import Home from './Pages/Home/Home'
import Results from './Pages/Results/Results'
import Tests from './Pages/Test/Tests'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} exact path='/'/>
        <Route element={<Login/>} exact path='/login'/>
        <Route element={<SignUp/>} exact path='/signup'/>
        <Route element={<Courses/>} exact path='/course'/>
        <Route element={<Tests/>} exact path='/test'/>
        <Route element={<Results/>} exact path='/results'/>
        <Route element={<Exam/>} exact path='/exam/:paperId'/>
        <Route element={<SetExam/>} exact path='/setexam'/>
        <Route element={<ViewExam/>} exact path='/viewexam'/>
      </Routes>
    </BrowserRouter>
  )
}


export default App