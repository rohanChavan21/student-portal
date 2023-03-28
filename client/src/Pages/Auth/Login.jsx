import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { redirect, useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        "email": '',
        "password": '',
      })

      function handleChangeS(e){
        const newFormData={...formData}
        newFormData[e.target.id]=e.target.value
        setFormData(newFormData)
      }

      async function handleSubmit(e){
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/v1/verifyuser', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                console.log(response)
                // const token = response.data.token
                const user = response.data.user
                const role = user.user_role
                try {
                  role === 'student' ? localStorage.setItem('student', role) : localStorage.setItem('faculty', role);
                  localStorage.setItem('user', user)
                } catch (error) {
                  alert(error)
                }
                alert(response.data.msg)
                redirect('/')
                window.location.reload()
            })
        } catch (error) {
            console.error(error)
            alert("failed to login please try again")
        }
      }
    
      useEffect(()=>{
        if(localStorage.getItem('login')){
            navigate('/')
        }
      }, [])

  return (
    <div className="flex flex-col gap-10 justify-center items-center mx-auto max-w-500">
      <h2 className="mb-20 mt-20 font-semibold text-3xl">Login</h2>
      <form onSubmit={handleSubmit} className='p-10'>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="w-full px-10 py-2 mb-10 rounded-md border border-gray-300 outline-none"
          placeholder="Enter email address"
          autoComplete='off'
          onChange={handleChangeS}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="w-full px-10 py-2 rounded-md border border-gray-300 outline-none"
          placeholder="Enter password"
          autoComplete='off'
          onChange={handleChangeS}
        />
        <div className=' flex items-center mx-auto p-4'>
        <button
          type="submit"
          className="bg-blue-600 my-10 text-white text-lg px-10 py-2 rounded-md border-none outline-none cursor-pointer"
        >
          Log In
        </button>
        </div>
      </form>
    </div>
  )
}

export default Login

