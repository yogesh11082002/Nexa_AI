// import React from 'react'
// import { assets } from '../assets/assets'
// import { useNavigate } from 'react-router-dom'
// import { ArrowRight } from 'lucide-react';

// const Navbar = () => {
//     const navigate = useNavigate();
//   return (
//     <div className='fixed z-5 w-full  backdrop-blur-2xl  flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32 -mt-10 '>
//       <img onClick={()=>navigate('/')} src={assets.mylogo} alt="logo" className='w-32 sm:w-44 cursor-pointer'  />
//       <button onClick={() => navigate('/ai')} className='flex items-center gap-2 rounded-full text-sm  cursor-pointer bg-primary text-white px-10 py-2.5'  >Get started <ArrowRight className='w-4 h-4'/></button>
//     </div>
//   )
// }

// export default Navbar
import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className=" z-50 w-full  flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32 -mt-6 sm:-mt-12">
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        src={assets.mylogo}
        alt="logo"
        className="w-32 sm:w-44 cursor-pointer"
      />

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* If user is NOT signed in → Show Sign In button */}
        <SignedOut>
          <SignInButton mode="modal">
            <button className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-6 py-2.5">
              Get started <ArrowRight className="w-4 h-4" />
            </button>
          </SignInButton>
        </SignedOut>

        {/* If user IS signed in → Show User profile + direct link to AI */}
        <SignedIn>
          <button
            onClick={() => navigate("/ai")}
            className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-6 py-2.5"
          >
            Dashboard <ArrowRight className="w-4 h-4" />
          </button>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
