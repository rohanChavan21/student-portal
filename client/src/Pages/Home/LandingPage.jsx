import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/57c6b79629687fde090a0fdd/1642086080177-SN767WSSNHJXRIET4WQ6/Dschool_Mockups_HI-RES.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'Roboto, sans-serif',
        margin: 0,
        padding: 0,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1 className='text-5xl text-center mb-20 justify-center'>Welcome</h1>
      <p className='text-lg text-center mb-16'>Please login or sign up to continue</p>
      <div className='flex'>
      <Link to={'/login'}>
      <button className='bg-blue-500 ml-auto mr-10 p-5 text-white font-semibold text-xl py-2 rounded-md border-none cursor-pointer w-full'>
        Login
      </button>
      </Link>
      <Link to={'/signup'}>
      <button className='bg-blue-500 mr-auto ml-10 p-5 text-white font-semibold text-xl py-2 rounded-md border-none cursor-pointer w-full'>
        Sign up
      </button>
      </Link>
    </div>
    </div>
  );
};

export default LandingPage;