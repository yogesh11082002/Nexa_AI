// import React, { useState } from "react";

// const ReviewResume = () => {
//   const [resumeFile, setResumeFile] = useState(null);
//   const [analysis, setAnalysis] = useState("");

//   // Handle file selection
//   const handleFileChange = (e) => {
//     setResumeFile(e.target.files[0]);
//     setAnalysis(""); // reset old analysis
//   };

//   // Simulated Resume Review
//   const handleReview = (e) => {
//     e.preventDefault();
//     if (!resumeFile) {
//       alert("Please upload a PDF resume first!");
//       return;
//     }

//     // Fake AI delay
//     setTimeout(() => {
//       setAnalysis(`
// ✅ Resume successfully analyzed!
// - File Name: ${resumeFile.name}
// - File Size: ${(resumeFile.size / 1024).toFixed(2)} KB
// - Suggested Improvements:
//   • Add measurable achievements
//   • Optimize skills section
//   • Tailor for job description
//       `);
//     }, 1500);
//   };

//   return (
//     <div className="h-full overflow-y-scroll p-6 flex flex-col lg:flex-row gap-6 text-slate-700">
//       {/* Upload Section */}
//       <form
//         onSubmit={handleReview}
//         className="flex-1 max-w-xl p-4 bg-white rounded-lg border border-gray-200"
//       >
//         <div className="flex items-center gap-3">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="lucide lucide-sparkles w-6 text-[#00DA83]"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
//             <path d="M20 3v4"></path>
//             <path d="M22 5h-4"></path>
//             <path d="M4 17v2"></path>
//             <path d="M5 18H3"></path>
//           </svg>
//           <h1 className="text-xl font-semibold">Resume Review</h1>
//         </div>

//         <p className="mt-6 text-sm font-medium">Upload Resume</p>
//         <input
//           accept="application/pdf"
//           className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600"
//           type="file"
//           onChange={handleFileChange}
//           required
//         />
//         <p className="text-xs text-gray-500 font-light mt-1">
//           Supports PDF resume only.
//         </p>

//         <button
//           type="submit"
//           className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00DA83] to-[#009BB3] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="lucide lucide-file-text w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
//             <path d="M14 2v4a2 2 0 0 0 2 2h4" />
//             <path d="M10 9H8" />
//             <path d="M16 13H8" />
//             <path d="M16 17H8" />
//           </svg>
//           Review Resume
//         </button>
//       </form>

//       {/* Results Section */}
//       <div className="flex-1 max-w-xl p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px] overflow-y-auto">
//         <div className="flex items-center gap-3">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="lucide lucide-file-text w-5 h-5 text-[#00DA83]"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
//             <path d="M14 2v4a2 2 0 0 0 2 2h4" />
//             <path d="M10 9H8" />
//             <path d="M16 13H8" />
//             <path d="M16 17H8" />
//           </svg>
//           <h1 className="text-xl font-semibold">Analysis Results</h1>
//         </div>

//         <div className="flex-1 flex justify-center items-center">
//           {analysis ? (
//             <pre className="text-sm text-gray-700 whitespace-pre-wrap mt-4">
//               {analysis}
//             </pre>
//           ) : (
//             <div className="text-sm flex flex-col items-center gap-5 text-gray-400 mt-6">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="lucide lucide-file-text w-9 h-9"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
//                 <path d="M14 2v4a2 2 0 0 0 2 2h4" />
//                 <path d="M10 9H8" />
//                 <path d="M16 13H8" />
//                 <path d="M16 17H8" />
//               </svg>
//               <p>Upload a resume and click "Review Resume" to get started</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewResume;

// import React, { useState } from "react";
// import axios from "axios";

// const ReviewResume = () => {
//   const [resumeFile, setResumeFile] = useState(null);
//   const [analysis, setAnalysis] = useState("");
//   const [loading, setLoading] = useState(false);

//   const API_URL = import.meta.env.VITE_API_URL; // your backend API

//   const handleFileChange = (e) => {
//     setResumeFile(e.target.files[0]);
//     setAnalysis(""); // reset previous analysis
//   };

//   const handleReview = async (e) => {
//     e.preventDefault();
//     if (!resumeFile) {
//       alert("Please upload a PDF resume first!");
//       return;
//     }

//     setLoading(true);

//     try {
//       const formData = new FormData();
//       formData.append("resume", resumeFile);

//       const token = localStorage.getItem("token"); // or your auth method

//       const res = await axios.post(`${API_URL}/api/ai/resume-review`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (res.data.success) {
//         setAnalysis(res.data.content); // AI feedback from backend
//       } else {
//         alert(res.data.error || "Failed to review resume");
//       }
//     } catch (err) {
//       console.error("Resume review error:", err);
//       alert("Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="h-full overflow-y-scroll p-6 flex flex-col lg:flex-row gap-6 text-slate-700">
//       {/* Upload Section */}
//       <form
//         onSubmit={handleReview}
//         className="flex-1 max-w-xl p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
//       >
//         <div className="flex items-center gap-3 mb-4">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="lucide lucide-sparkles w-6 text-[#00DA83]"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
//             <path d="M20 3v4"></path>
//             <path d="M22 5h-4"></path>
//             <path d="M4 17v2"></path>
//             <path d="M5 18H3"></path>
//           </svg>
//           <h1 className="text-xl font-semibold">Resume Review</h1>
//         </div>

//         <label className="block text-sm font-medium mb-1">Upload Resume</label>
//         <input
//           accept="application/pdf"
//           type="file"
//           onChange={handleFileChange}
//           className="w-full p-2 mb-2 border rounded-md text-gray-600"
//           required
//         />
//         <p className="text-xs text-gray-500 mb-4">Supports PDF resume only.</p>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00DA83] to-[#009BB3] text-white px-4 py-2 rounded-lg disabled:opacity-50"
//         >
//           {loading ? "Analyzing..." : "Review Resume"}
//         </button>
//       </form>

//       {/* Results Section */}
//       <div className="flex-1 max-w-xl p-4 bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col overflow-y-auto min-h-[400px]">
//         <h1 className="text-xl font-semibold mb-4 flex items-center gap-3">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="lucide lucide-file-text w-5 h-5 text-[#00DA83]"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
//             <path d="M14 2v4a2 2 0 0 0 2 2h4" />
//             <path d="M10 9H8" />
//             <path d="M16 13H8" />
//             <path d="M16 17H8" />
//           </svg>
//           Analysis Results
//         </h1>

//         <div className="flex-1 flex justify-center items-center">
//           {analysis ? (
//             <pre className="text-sm text-gray-700 whitespace-pre-wrap">{analysis}</pre>
//           ) : (
//             <div className="text-sm flex flex-col items-center gap-5 text-gray-400 mt-6">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="lucide lucide-file-text w-9 h-9"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
//                 <path d="M14 2v4a2 2 0 0 0 2 2h4" />
//                 <path d="M10 9H8" />
//                 <path d="M16 13H8" />
//                 <path d="M16 17H8" />
//               </svg>
//               <p>Upload a resume and click "Review Resume" to get started</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewResume;

import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import toast from "react-hot-toast";

const ReviewResume = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);
  const { getToken } = useAuth();
  const API_URL = import.meta.env.VITE_API_URL;

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
    setAnalysis(""); // reset previous analysis
  };

  const handleReview = async (e) => {
    e.preventDefault();
    if (!resumeFile) {
      toast.error("Please upload a PDF resume first!");
      return;
    }

    setLoading(true);
    setAnalysis("");

    try {
      const token = await getToken();
      const formData = new FormData();
      formData.append("resume", resumeFile);

      const res = await axios.post(`${API_URL}/api/ai/resume-review`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        setAnalysis(res.data.content);
        toast.success("✅ Resume analyzed successfully!");
      } else {
        toast.error(res.data.error || "Failed to review resume");
      }
    } catch (err) {
      console.error("Resume review error:", err.response?.data || err);
      if (err.response?.status === 403) {
        toast.error(err.response.data?.error || "You don’t have permission to use this feature.");
      } else {
        toast.error("Something went wrong. Check console for details.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 bg-[#F4F7FB] min-h-screen">
      <div className="p-6 flex flex-col md:flex-row items-start gap-4 text-slate-700">
        {/* Upload Form */}
        <form
          onSubmit={handleReview}
          className="w-full md:w-1/2 p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
        >
          <h1 className="text-xl font-semibold text-[#00DA83]">Resume Review</h1>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="w-full p-2 mt-4 border rounded-md text-gray-600"
            required
          />
          <p className="text-xs text-gray-500 mt-1 mb-4">Supports PDF resume only.</p>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00DA83] to-[#009BB3] text-white px-4 py-2 mt-2 rounded-lg disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Review Resume"}
          </button>
        </form>

        {/* Results Section */}
        <div className="w-full md:w-1/2 p-4 bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col min-h-[400px]">
          <h1 className="text-xl font-semibold text-[#00DA83] mb-4">Analysis Results</h1>
          <div className="flex-1 flex flex-col justify-center items-center overflow-y-auto">
            {analysis ? (
              <pre className="text-sm text-gray-700 whitespace-pre-wrap">{analysis}</pre>
            ) : (
              <div className="text-sm flex flex-col items-center gap-5 text-gray-400 text-center mt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lucide lucide-file-text w-9 h-9"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M10 9H8" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                </svg>
                <p>Upload a resume and click "Review Resume" to get started</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewResume;
