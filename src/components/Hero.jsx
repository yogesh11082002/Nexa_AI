// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { assets } from "../assets/assets";

// const Hero = () => {

//   const navigate =useNavigate();

//   return (
//     <div className="px-4 sm:px-20 xl:px-32  relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen -mt-60 sm:-mt-35">
//       <div className="text-center mb-6">
//         <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto  leading-[1.2]">Create amazing content <br /> with <span className="text-primary">AI tools</span></h1>
//         <p className="mt-4 max-w-xs sm:max-w-lg  2xl:max-w-xl m-auto max-sm:text-xs text-gray-600">Transform your content creation with our suite of premium AI tools. Write articles, generate images, and enhance your workflow.</p>
//       </div>
//       <div className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs">
//         <button onClick={()=>navigate('/ai')} className="bg-primary text-white px-10 py-3  rounded-lg hover:scale-102 active:scale-95  transition cursor-pointer">Start creating now</button>
//         <button className="bg-white  px-10 py-3  rounded-lg border border-gray-300 hover:scale-102 active:scale-95  transition cursor-pointer">Watch demo</button>
//       </div>
//       <div className="flex items-center gap-4  mt-8  mx-auto  text-gray-600">
//         <img src={assets.user_group} alt="" className="h-8" /> Trusted by 10K+ People
//       </div>
//     </div>
//   );
// };

// export default Hero;

"use client";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import gsap from "gsap";

const Hero = () => {
  const navigate = useNavigate();
  const trustedRef = useRef(null);

  // Floating animation using GSAP
  useEffect(() => {
    if (trustedRef.current) {
      gsap.to(trustedRef.current, {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen -mt-25 sm:mt-8 ">
      
      {/* Heading + Subtext */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">
          Create amazing content <br /> with{" "}
          <span className="text-primary">AI tools</span>
        </h1>
        <motion.p
          className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Transform your content creation with our suite of premium AI tools.
          Write articles, generate images, and enhance your workflow.
        </motion.p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <button
          onClick={() => navigate("/ai")}
          className="bg-primary text-white px-10 py-3 rounded-lg hover:scale-105 active:scale-95 transition cursor-pointer"
        >
          Start creating now
        </button>
        <button className="bg-white px-10 py-3 rounded-lg border border-gray-300 hover:scale-105 active:scale-95 transition cursor-pointer">
          Watch demo
        </button>
      </motion.div>

      {/* Trusted Badge with GSAP floating */}
      <motion.div
        ref={trustedRef}
        className="flex items-center gap-4 mt-8 mx-auto text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <img src={assets.user_group} alt="" className="h-8" /> Trusted by 10K+
        People
      </motion.div>
    </div>
  );
};

export default Hero;
