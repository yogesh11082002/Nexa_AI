// import React from "react";

// const BlogTitles = () => {
//   return (
//     <div>
//       <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
//         {/* Left Form */}
//         <form className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200">
//           <div className="flex items-center gap-3">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide lucide-sparkles w-6 text-[#8E37EB]"
//               aria-hidden="true"
//             >
//               <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
//               <path d="M20 3v4"></path>
//               <path d="M22 5h-4"></path>
//               <path d="M4 17v2"></path>
//               <path d="M5 18H3"></path>
//             </svg>
//             <h1 className="text-xl font-semibold">AI Title Generator</h1>
//           </div>

//           <p className="mt-6 text-sm font-medium">Keyword</p>
//           <input
//             className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
//             placeholder="The future of artificial intelligence is..."
//             type="text"
//           />

//           <p className="mt-4 text-sm font-medium">Category</p>
//           <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3 flex-wrap md:max-w-9/11">
//             <span className="text-xs text-center px-4 py-1 border rounded-full cursor-pointer bg-purple-50 text-purple-700">
//               General
//             </span>
//             <span className="text-xs text-center px-4 py-1 border rounded-full cursor-pointer text-gray-500 border-gray-300">
//               Technology
//             </span>
//             <span className="text-xs text-center px-4 py-1 border rounded-full cursor-pointer text-gray-500 border-gray-300">
//               Business
//             </span>
//             <span className="text-xs text-center px-4 py-1 border rounded-full cursor-pointer text-gray-500 border-gray-300">
//               Health
//             </span>
//             <span className="text-xs text-center px-4 py-1 border rounded-full cursor-pointer text-gray-500 border-gray-300">
//               Lifestyle
//             </span>
//             <span className="text-xs text-center px-4 py-1 border rounded-full cursor-pointer text-gray-500 border-gray-300">
//               Education
//             </span>
//             <span className="text-xs text-center px-4 py-1 border rounded-full cursor-pointer text-gray-500 border-gray-300">
//               Travel
//             </span>
//             <span className="text-xs text-center px-4 py-1 border rounded-full cursor-pointer text-gray-500 border-gray-300">
//               Food
//             </span>
//           </div>

//           <br />
//           <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#C341F6] to-[#8E37EB] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide lucide-hash w-5"
//               aria-hidden="true"
//             >
//               <line x1="4" x2="20" y1="9" y2="9"></line>
//               <line x1="4" x2="20" y1="15" y2="15"></line>
//               <line x1="10" x2="8" y1="3" y2="21"></line>
//               <line x1="16" x2="14" y1="3" y2="21"></line>
//             </svg>
//             Generate title
//           </button>
//         </form>

//         {/* Right Panel */}
//         <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 h-96">
//           <div className="flex items-center gap-3">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide lucide-hash w-5 h-5 text-[#8E37EB]"
//               aria-hidden="true"
//             >
//               <line x1="4" x2="20" y1="9" y2="9"></line>
//               <line x1="4" x2="20" y1="15" y2="15"></line>
//               <line x1="10" x2="8" y1="3" y2="21"></line>
//               <line x1="16" x2="14" y1="3" y2="21"></line>
//             </svg>
//             <h1 className="text-xl font-semibold">Generated titles</h1>
//           </div>

//           <div className="flex-1 flex justify-center items-center">
//             <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-hash w-9 h-9"
//                 aria-hidden="true"
//               >
//                 <line x1="4" x2="20" y1="9" y2="9"></line>
//                 <line x1="4" x2="20" y1="15" y2="15"></line>
//                 <line x1="10" x2="8" y1="3" y2="21"></line>
//                 <line x1="16" x2="14" y1="3" y2="21"></line>
//               </svg>
//               <p>Enter a topic and click “Generated title” to get started</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogTitles;

import React, { useState } from "react";

const BlogTitles = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("General");
  const [titles, setTitles] = useState([]);

  const categories = [
    "General",
    "Technology",
    "Business",
    "Health",
    "Lifestyle",
    "Education",
    "Travel",
    "Food",
  ];

  // Mocked title generator
  const handleGenerateTitle = (e) => {
    e.preventDefault();
    if (!keyword) {
      alert("Please enter a keyword!");
      return;
    }
    setTitles([
      `The Future of ${keyword} in ${category}`,
      `${category} Trends: ${keyword}`,
      `How ${keyword} is Changing ${category}`,
    ]);
  };

  return (
    <div className="flex-1 bg-[#F4F7FB] min-h-screen">
      <div className="p-6 flex flex-col md:flex-row items-start gap-4 text-slate-700">
        {/* Left Form */}
        <form
          onSubmit={handleGenerateTitle}
          className="w-full md:w-1/2 p-4 bg-white rounded-lg border border-gray-200"
        >
          {/* Title with sparkles icon */}
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sparkles w-6 text-[#8E37EB]"
              aria-hidden="true"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
              <path d="M20 3v4"></path>
              <path d="M22 5h-4"></path>
              <path d="M4 17v2"></path>
              <path d="M5 18H3"></path>
            </svg>
            <h1 className="text-xl font-semibold">AI Title Generator</h1>
          </div>

          {/* Keyword Input */}
          <p className="mt-6 text-sm font-medium">Keyword</p>
          <input
            className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
            placeholder="The future of artificial intelligence is..."
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />

          {/* Category Selection */}
          <p className="mt-4 text-sm font-medium">Category</p>
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3 flex-wrap">
            {categories.map((cat) => (
              <span
                key={cat}
                onClick={() => setCategory(cat)}
                className={`text-xs text-center px-4 py-1 border rounded-full cursor-pointer ${
                  category === cat
                    ? "bg-purple-50 text-purple-700 border-purple-400"
                    : "text-gray-500 border-gray-300"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#C341F6] to-[#8E37EB] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-hash w-5"
              aria-hidden="true"
            >
              <line x1="4" x2="20" y1="9" y2="9"></line>
              <line x1="4" x2="20" y1="15" y2="15"></line>
              <line x1="10" x2="8" y1="3" y2="21"></line>
              <line x1="16" x2="14" y1="3" y2="21"></line>
            </svg>
            Generate title
          </button>
        </form>

        {/* Right Preview */}
        <div className="w-full md:w-1/2 p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px] overflow-y-auto">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-hash w-5 h-5 text-[#8E37EB]"
              aria-hidden="true"
            >
              <line x1="4" x2="20" y1="9" y2="9"></line>
              <line x1="4" x2="20" y1="15" y2="15"></line>
              <line x1="10" x2="8" y1="3" y2="21"></line>
              <line x1="16" x2="14" y1="3" y2="21"></line>
            </svg>
            <h1 className="text-xl font-semibold">Generated titles</h1>
          </div>

          <div className="flex-1 flex justify-center items-center">
            {titles.length > 0 ? (
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-2">
                {titles.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            ) : (
              <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
                <p>Enter a keyword and click “Generate title” to get started</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTitles;
