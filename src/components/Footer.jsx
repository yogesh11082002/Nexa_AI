// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <footer class="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
//     <div class="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
//         <div class="md:max-w-96">
//             <img class=" w-34 -mt-12" src={assets.mylogo} alt="dummyLogoDark"/>
//             <p class=" text-sm -mt-5">
//                Nexa AI is a cutting-edge platform offering powerful AI tools to streamline content creation. It helps generate articles, images, and workflows, empowering businesses and creators with efficiency, creativity, and innovation.
//             </p>
//         </div>
//         <div class="flex-1 flex items-start md:justify-end gap-20">
//             <div>
//                 <h2 class="font-semibold mb-5 text-gray-800">Company</h2>
//                 <ul class="text-sm space-y-2">
//                     <li><a href="#">Home</a></li>
//                     <li><a href="#">About us</a></li>
//                     <li><a href="#">Contact us</a></li>
//                     <li><a href="#">Privacy policy</a></li>
//                 </ul>
//             </div>
//             <div>
//                 <h2 class="font-semibold text-gray-800 mb-5">Subscribe to our newsletter</h2>
//                 <div class="text-sm space-y-2">
//                     <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
//                     <div class="flex items-center gap-2 pt-4">
//                         <input class="border border-gray-500/30 placeholder-gray-500 focus:ring-2 ring-indigo-600 outline-none w-full max-w-64 h-9 rounded px-2" type="email" placeholder="Enter your email"/>
//                         <button class="bg-blue-600 w-24 h-9 text-white rounded">Subscribe</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <p class="pt-4 text-center text-xs md:text-sm pb-5">
//         Copyright 2024 © <a href="https://yogesh-sengar.vercel.app/">Yogesh Thakur</a> | All Right Reserved.
//     </p>
// </footer>
//   )
// }

// export default Footer


import React, { useState } from "react";
import { assets } from "../assets/assets";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
   const navigate = useNavigate();

  const handleSubscribe = () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    // You can integrate API call here to save email
    toast.success("Thanks for subscribing! 🎉");
    setEmail(""); // clear input
  };

  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
      {/* Toast container */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96">
          <img
           onClick={() => navigate("/")}
            className="w-34 -mt-12 cursor-pointer"
            src={assets.mylogo}
            alt="dummyLogoDark"
          />
          <p className="text-sm -mt-5">
            Nexa AI is a cutting-edge platform offering powerful AI tools to
            streamline content creation. It helps generate articles, images, and
            workflows, empowering businesses and creators with efficiency,
            creativity, and innovation.
          </p>
        </div>

        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-gray-800 mb-5">
              Subscribe to our newsletter
            </h2>
            <div className="text-sm space-y-2">
              <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
              <div className="flex items-center gap-2 pt-4">
                <input
                  className="border border-gray-500/30 placeholder-gray-500 focus:ring-2 ring-indigo-600 outline-none w-full max-w-64 h-9 rounded px-2"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  onClick={handleSubscribe}
                  className="bg-blue-600 w-24 h-9 text-white rounded hover:bg-blue-700 transition"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright 2024 ©{" "}
        <a
          href="https://yogesh-sengar.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Yogesh Thakur
        </a>{" "}
        | All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
