import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Auth/Login'
import SignUp from './Pages/Auth/SignUp'
import Courses from './Pages/Courses/Courses'
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
      </Routes>
    </BrowserRouter>
  )
}


export default App