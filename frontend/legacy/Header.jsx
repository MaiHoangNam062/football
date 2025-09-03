// t nghi nen doi cai nay thanh navbar cho no conventional :))))
// nhma nnay la dc roi

import React from "react";
import logo from "../assets/images/logo.png";
import { Navbar } from "../src/components/Navbar";

const Header = () => {
  return (
    <header className="text-zinc-500 p-8 shadow-md flex flex-row items-center">
      <img src={logo} alt="Logo" className="h-10 w-auto" />
      <h1 className="ml-4 text-xl font-semibold">Football Market</h1>

      <Navbar />
    </header>
  );
};

export default Header;
