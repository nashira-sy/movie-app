import React from 'react'

// src/components/header/index.tsx

import { Link } from 'react-router-dom';
import { useToken } from '../../hooks/useToken';

const Header = () => {
  const{logout} = useToken();
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <nav className="flex space-x-4">
        <Link to="/" className="text-lg font-bold hover:text-gray-300 transition-colors">HOME</Link>
        <Link to="/categories" className="text-lg hover:text-gray-300 transition-colors">CATEGORIES</Link>
      </nav>
       <div className="flex items-center space-x-4">
        <button
          onClick={logout}
          className=" px-3 py-1 rounded hover:text-gray-300 transition-colors"
        >
          Logout
        </button>
        <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-xl font-bold">
          A
        </div>
      </div>
    </header>
  )
};


export default Header;