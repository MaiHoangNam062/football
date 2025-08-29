import React from "react";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="bg-[#454952] text-white p-8 shadow-md flex items-center">
      <img src={logo} alt="Logo" className="h-10 w-auto" />
      <h1 className="ml-4 text-xl font-semibold">Football Market</h1>

      <nav className="space-x-10 ml-auto">
        <a href="" className="hover:text-gray-300">Home</a>
        <a href="" className="hover:text-gray-300">Log In</a>
        <a href="" className="hover:text-gray-300">Sign Up</a>
        <a href="" className="hover:text-gray-300">About</a> 
      </nav>
    </header>
  );
};

export default Header;
