import React from 'react';
import { useNavigate } from 'react-router';
import error from '../assets/error-404.png';


const Errorpage = () => {
     const navigate = useNavigate();
    return (
        
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-6">
      <div className="flex flex-col items-center">
        <img
          src={error}
          alt="404 Illustration"
          className="w-80 h-auto mb-6"
        />
        <h1 className="text-6xl font-extrabold text-blue-700 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          Oops, page not found!
        </h2>
        <p className="text-gray-500 mb-6 max-w-md">
          The page you are looking for is not available or has been moved.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="btn bg-blue-900 text-white rounded-sm py-2 px-6 my-3 text-lg hover:bg-blue-800 transition"
        >
          Go Back!
        </button>
      </div>
    </div>
    );
};

export default Errorpage;