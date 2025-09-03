// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { PlayCircle, ArrowLeft, Sparkles, ImageIcon, FileText } from "lucide-react";

// const Demo = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 px-6 sm:px-20 xl:px-32 py-16 relative overflow-hidden">
//       {/* Back Button */}
//       <motion.button
//         onClick={() => navigate("/")}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="flex items-center gap-2 mb-8 text-gray-600 hover:text-primary transition"
//       >
//         <ArrowLeft size={20} /> Back to Home
//       </motion.button>

//       {/* Hero Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center"
//       >
//         <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight">
//           Explore Nexa AI <span className="text-primary">in Action</span>
//         </h1>
//         <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//           Watch how Nexa AI transforms content creation with smart AI-powered
//           tools. From writing articles to generating images, see it all in one place.
//         </p>
//       </motion.div>

//       {/* Video Demo Section */}
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1, delay: 0.3 }}
//         className="mt-12 flex justify-center"
//       >
//         <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg">
//           <video
//             src="/demo-video.mp4" // 👉 Replace with your actual demo video
//             controls
//             autoPlay
//             loop
//             muted
//             className="w-full h-[400px] object-cover"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <PlayCircle size={64} className="text-white drop-shadow-lg" />
//           </div>
//         </div>
//       </motion.div>

//       {/* Features Showcase */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="mt-16 grid gap-8 md:grid-cols-3"
//       >
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="p-6 bg-white rounded-2xl shadow-md text-center"
//         >
//           <FileText className="mx-auto text-primary mb-4" size={40} />
//           <h3 className="text-lg font-semibold">AI Article Writer</h3>
//           <p className="text-gray-600 text-sm mt-2">
//             Generate SEO-friendly articles in seconds, tailored to your needs.
//           </p>
//         </motion.div>

//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="p-6 bg-white rounded-2xl shadow-md text-center"
//         >
//           <ImageIcon className="mx-auto text-primary mb-4" size={40} />
//           <h3 className="text-lg font-semibold">AI Image Generator</h3>
//           <p className="text-gray-600 text-sm mt-2">
//             Create stunning visuals instantly with AI-driven image generation.
//           </p>
//         </motion.div>

//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="p-6 bg-white rounded-2xl shadow-md text-center"
//         >
//           <Sparkles className="mx-auto text-primary mb-4" size={40} />
//           <h3 className="text-lg font-semibold">Workflow Enhancer</h3>
//           <p className="text-gray-600 text-sm mt-2">
//             Boost productivity by automating repetitive tasks with smart AI.
//           </p>
//         </motion.div>
//       </motion.div>

//       {/* CTA Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="mt-20 text-center"
//       >
//         <h2 className="text-2xl font-bold text-gray-900">
//           Ready to create with Nexa AI?
//         </h2>
//         <p className="mt-2 text-gray-600">
//           Get started today and supercharge your content workflow.
//         </p>
//         <button
//           onClick={() => navigate("/ai")}
//           className="mt-6 bg-primary text-white px-8 py-3 rounded-lg hover:scale-105 active:scale-95 transition"
//         >
//           Start Now
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// export default Demo;

"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PlayCircle, ArrowLeft, Sparkles, ImageIcon, FileText } from "lucide-react";

const Demo = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 px-6 sm:px-20 xl:px-32 py-16 relative overflow-hidden">

      {/* Back Button */}
      <motion.button
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 mb-8 text-gray-600 hover:text-primary transition"
      >
        <ArrowLeft size={20} /> Back to Home
      </motion.button>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight">
          Explore Nexa AI <span className="text-primary">in Action</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Watch Nexa AI turn prompts into powerful visuals. From image generation to content workflows, see the magic unfold.
        </p>
      </motion.div>

      {/* Embedded Demo Video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-12 flex justify-center"
      >
        <div className="w-full max-w-4xl aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/LoXhS6oCK9E"
            title="AI Image Generator Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </motion.div>

      {/* Features Showcase */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-16 grid gap-8 md:grid-cols-3"
      >
        <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-2xl shadow-md text-center">
          <FileText className="mx-auto text-primary mb-4" size={40} />
          <h3 className="text-lg font-semibold">AI Article Writer</h3>
          <p className="text-gray-600 mt-2">Generate SEO-friendly articles instantly—tailored to your needs.</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-2xl shadow-md text-center">
          <ImageIcon className="mx-auto text-primary mb-4" size={40} />
          <h3 className="text-lg font-semibold">AI Image Generator</h3>
          <p className="text-gray-600 mt-2">Stunning visuals at a prompt—no design skills required.</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-2xl shadow-md text-center">
          <Sparkles className="mx-auto text-primary mb-4" size={40} />
          <h3 className="text-lg font-semibold">Workflow Enhancer</h3>
          <p className="text-gray-600 mt-2">Automate repetitive tasks and boost productivity with smart AI.</p>
        </motion.div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <h2 className="text-2xl font-bold text-gray-900">
          Ready to create with Nexa AI?
        </h2>
        <p className="mt-2 text-gray-600">
          Start your AI-powered content journey now!
        </p>
        <button
          onClick={() => navigate("/ai")}
          className="mt-6 bg-primary text-white px-8 py-3 rounded-lg hover:scale-105 active:scale-95 transition"
        >
          Start Now
        </button>
      </motion.div>
    </div>
  );
};

export default Demo;
