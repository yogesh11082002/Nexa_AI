// // import React from 'react'
// // import { assets } from '../assets/assets'
// // import { useNavigate } from 'react-router-dom'
// // import { ArrowRight } from 'lucide-react';

// // const Navbar = () => {
// //     const navigate = useNavigate();
// //   return (
// //     <div className='fixed z-5 w-full  backdrop-blur-2xl  flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32 -mt-10 '>
// //       <img onClick={()=>navigate('/')} src={assets.mylogo} alt="logo" className='w-32 sm:w-44 cursor-pointer'  />
// //       <button onClick={() => navigate('/ai')} className='flex items-center gap-2 rounded-full text-sm  cursor-pointer bg-primary text-white px-10 py-2.5'  >Get started <ArrowRight className='w-4 h-4'/></button>
// //     </div>
// //   )
// // }

// // export default Navbar
// import React from "react";
// import { assets } from "../assets/assets";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
// } from "@clerk/clerk-react";

// const Navbar = () => {
//   const navigate = useNavigate();
//   return (
//     <div className=" z-50 w-full  flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32 -mt-6 sm:-mt-12">
//       {/* Logo */}
//       <img
//         onClick={() => navigate("/")}
//         src={assets.mylogo}
//         alt="logo"
//         className="w-32 sm:w-44 cursor-pointer"
//       />

//       {/* Right Side */}
//       <div className="flex items-center gap-4">
//         {/* If user is NOT signed in → Show Sign In button */}
//         <SignedOut>
//           <SignInButton mode="modal">
//             <button className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-6 py-2.5">
//               Get started <ArrowRight className="w-4 h-4" />
//             </button>
//           </SignInButton>
//         </SignedOut>

//         {/* If user IS signed in → Show User profile + direct link to AI */}
//         <SignedIn>
//           <button
//             onClick={() => navigate("/ai")}
//             className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-6 py-2.5"
//           >
//             Dashboard <ArrowRight className="w-4 h-4" />
//           </button>
//           <UserButton />
//         </SignedIn>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { motion } from "framer-motion";
import gsap from "gsap";

const Navbar = () => {
  const navigate = useNavigate();
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  // Animate on mount
  useEffect(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
    ref={navRef}
    initial={{ opacity: 0, y: -60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="nav-wrapper fixed z-50 w-full backdrop-blur-2xl py-3  -mt-5 sm:-mt-15 "
  >
    <motion.div
      ref={navRef}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full  flex justify-between items-center px-4 sm:px-20 xl:px-32 transition-all duration-300 ${
        scrolled
          ? "py-4  bg-white/80 backdrop-blur-lg shadow-md"
          : "py-4 sm:py-6 bg-transparent"
      }`}
    >
      {/* Logo */}
      <motion.img
        onClick={() => navigate("/")}
        src={assets.mylogo}
        alt="logo"
        className="w-38 sm:w-40 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      />

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* If user is NOT signed in → Show Sign In button */}
        <SignedOut>
          <SignInButton mode="modal">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-6 py-2.5 "
            >
              Get started <ArrowRight className="w-4 h-4" />
            </motion.button>
          </SignInButton>
        </SignedOut>

        {/* If user IS signed in → Show User profile + direct link to AI */}
        <SignedIn>
          <motion.button
            onClick={() => navigate("/ai")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-6 py-2.5"
          >
            Dashboard <ArrowRight className="w-4 h-4" />
          </motion.button>
          <UserButton />
        </SignedIn>
      </div>
    </motion.div>
    </motion.div>
  );
};

export default Navbar;
