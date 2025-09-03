// import React, { useState } from "react";
// import { assets } from "../assets/assets";
// import toast, { Toaster } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const Footer = () => {
//   const [email, setEmail] = useState("");
//    const navigate = useNavigate();

//   const handleSubscribe = () => {
//     if (!email) {
//       toast.error("Please enter your email");
//       return;
//     }

//     // You can integrate API call here to save email
//     toast.success("Thanks for subscribing! 🎉");
//     setEmail(""); // clear input
//   };

//   return (
//     <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
//       {/* Toast container */}
//       <Toaster position="top-center" reverseOrder={false} />

//       <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
//         <div className="md:max-w-96">
//           <img
//            onClick={() => navigate("/")}
//             className="w-34 -mt-12 cursor-pointer"
//             src={assets.mylogo}
//             alt="dummyLogoDark"
//           />
//           <p className="text-sm -mt-5">
//             Nexa AI is a cutting-edge platform offering powerful AI tools to
//             streamline content creation. It helps generate articles, images, and
//             workflows, empowering businesses and creators with efficiency,
//             creativity, and innovation.
//           </p>
//         </div>

//         <div className="flex-1 flex items-start md:justify-end gap-20">
//           <div>
//             <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
//             <ul className="text-sm space-y-2">
//               <li><a href="#">Home</a></li>
//               <li><a href="#">About us</a></li>
//               <li><a href="#">Contact us</a></li>
//               <li><a href="#">Privacy policy</a></li>
//             </ul>
//           </div>
//           <div>
//             <h2 className="font-semibold text-gray-800 mb-5">
//               Subscribe to our newsletter
//             </h2>
//             <div className="text-sm space-y-2">
//               <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
//               <div className="flex items-center gap-2 pt-4">
//                 <input
//                   className="border border-gray-500/30 placeholder-gray-500 focus:ring-2 ring-indigo-600 outline-none w-full max-w-64 h-9 rounded px-2"
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <button
//                   onClick={handleSubscribe}
//                   className="bg-blue-600 w-24 h-9 text-white rounded hover:bg-blue-700 transition"
//                 >
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <p className="pt-4 text-center text-xs md:text-sm pb-5">
//         Copyright 2024 ©{" "}
//         <a
//           href="https://yogesh-sengar.vercel.app/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-600 hover:underline"
//         >
//           Yogesh Thakur
//         </a>{" "}
//         | All Right Reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;

"use client";
import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";

const Footer = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const logoRef = useRef(null);

  useEffect(() => {
    // Logo bounce animation on mount
    gsap.fromTo(
      logoRef.current,
      { scale: 0.8, opacity: 0, y: -20 },
      { scale: 1, opacity: 1, y: 0, duration: 1, ease: "elastic.out(1, 0.5)" }
    );
  }, []);

  const handleSubscribe = () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    toast.success("Thanks for subscribing! 🎉");
    setEmail("");
  };

  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-12 w-full text-gray-600 bg-gradient-to-b from-gray-50 to-white border-t">
      {/* Toast container */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-col md:flex-row justify-between w-full gap-12 border-b border-gray-300/40 pb-10">
        {/* Logo + description */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:max-w-96 -mt-10 text-center md:text-left"
        >
          <img
            ref={logoRef}
            onClick={() => navigate("/")}
            className="w-32 mx-auto md:mx-0 cursor-pointer"
            src={assets.mylogo}
            alt="dummyLogoDark"
          />
          <p className="text-sm -mt-3 leading-relaxed text-gray-500">
            Nexa AI is a cutting-edge platform offering powerful AI tools to
            streamline content creation. It helps generate articles, images, and
            workflows, empowering businesses and creators with efficiency,
            creativity, and innovation.
          </p>
        </motion.div>

        {/* Links + Newsletter */}
        <div className="flex-1 flex flex-col md:flex-row items-center md:items-start md:justify-end gap-10 md:gap-20 text-center md:text-left">
          {/* Company links */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="hidden md:block"   // 👈 hides on phone, shows on md+
>
  <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
  <ul className="text-sm space-y-2">
    {["Home", "About us", "Contact us", "Privacy policy"].map((link, i) => (
      <motion.li
        key={i}
        whileHover={{ x: 5, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <a href="#" className="hover:text-blue-600 transition">
          {link}
        </a>
      </motion.li>
    ))}
  </ul>
</motion.div>


          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-50 p-5 rounded-2xl shadow-sm border border-gray-200 w-full max-w-md"
          >
            <h2 className="font-semibold text-gray-800 mb-3">
              Subscribe to our newsletter
            </h2>
            <p className="text-sm text-gray-500">
              Get the latest news, articles, and resources weekly.
            </p>
            <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3 pt-4">
              <input
                className="border border-gray-400/30 placeholder-gray-500 focus:ring-2 ring-indigo-600 outline-none w-full h-10 rounded px-3 text-sm"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubscribe}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 px-5 h-10 text-white rounded-lg shadow hover:opacity-90 transition text-sm"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer bottom */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="pt-6 text-center text-xs md:text-sm pb-5 text-gray-500"
      >
        © 2024{" "}
        <a
          href="https://yogesh-sengar.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Yogesh Thakur
        </a>{" "}
        | All Rights Reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
