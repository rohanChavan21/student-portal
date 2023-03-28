import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";

const Home = () => {

    const [role, setRole] = useState('')

  useEffect(()=>{
    if(!localStorage.getItem('user')){
      redirect('/login')
    }

    const user = localStorage.getItem('user') ? localStorage.getItem('user') : false
    setRole(user.user_role)
  }, [role])

  return (
    <div className="justify-center text-center ">
      <div className="block text-4xl font-serif font-bold tracking-tight text-gray-900 sm:text-6xl relative pt-64 pb-8">
        Welcome to the WCE Portal {role}
      </div>
      <p className="mt-6 text-lg leading-8 text-gray-600 pt-18 pb-0">
        Welcome to the exclusive student and teacher portal for WCE, Sangli
      </p>
      <p className="mt-6 text-lg text-gray-600">
        Here you have the convenience of giving online tests and get instant
        scores for your tests
      </p>
    </div>
  );
};

export default Home;
