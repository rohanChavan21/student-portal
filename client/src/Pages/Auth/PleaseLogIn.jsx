import React from "react"
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css"

const PleaseLogin = () => {

    const navigate = useNavigate()

  return (
    <div className="container h-screen flex flex-col items-center justify-center  max-w-full bg-gray-100">
      <h1 className="text-center text-3xl font-medium text-gray-700 mb-6">
        Please Log In
      </h1>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg py-4 px-8 transition-all duration-300"
        onClick={() => {
          navigate('/')
        }}
      >
        Log In
      </button>
    </div>
  );
};

export default PleaseLogin;