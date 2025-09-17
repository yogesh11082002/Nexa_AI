// import React, { useState } from "react";

// const WriteArticle = () => {
//   const [topic, setTopic] = useState("");
//   const [length, setLength] = useState("Short");
//   const [article, setArticle] = useState("");

//   // Generate Article Function (mocked)
//   const handleGenerateArticle = (e) => {
//     e.preventDefault();
//     if (!topic) {
//       alert("Please enter a topic!");
//       return;
//     }

//     let words = "";
//     if (length === "Short") words = "500-800 words";
//     if (length === "Medium") words = "800-1200 words";
//     if (length === "Long") words = "1200+ words";

//     setArticle(
//       `📝 Article on "${topic}"\n\nThis is a ${length} article (${words}) generated for demo. Replace this with your AI API response or real content generation.`
//     );
//   };

//   return (
//     <div className="flex-1 bg-[#F4F7FB] min-h-screen">
//       <div className="p-6 flex flex-col md:flex-row items-start gap-4 text-slate-700">
//         {/* Left Form */}
//         <form
//           onSubmit={handleGenerateArticle}
//           className="w-full md:w-1/2 p-4 bg-white rounded-lg border border-gray-200"
//         >
//           {/* Title with sparkles icon */}
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
//               className="lucide lucide-sparkles w-6 text-[#4A7AFF]"
//               aria-hidden="true"
//             >
//               <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
//               <path d="M20 3v4"></path>
//               <path d="M22 5h-4"></path>
//               <path d="M4 17v2"></path>
//               <path d="M5 18H3"></path>
//             </svg>
//             <h1 className="text-xl font-semibold">AI Article Writer</h1>
//           </div>

//           {/* Article Topic with pen icon */}
//           <p className="mt-6 text-sm font-medium flex items-center gap-2">
//             Article Topic
//           </p>
//           <input
//             className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
//             placeholder="The future of artificial intelligence is..."
//             required
//             type="text"
//             value={topic}
//             onChange={(e) => setTopic(e.target.value)}
//           />

//           <p className="mt-4 text-sm font-medium">Article Length</p>
//           <div className="mt-3 flex gap-3 flex-wrap">
//             {["Short", "Medium", "Long"].map((opt) => (
//               <span
//                 key={opt}
//                 onClick={() => setLength(opt)}
//                 className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${
//                   length === opt
//                     ? "bg-blue-50 text-blue-700 border-blue-400"
//                     : "text-gray-500 border-gray-300"
//                 }`}
//               >
//                 {opt === "Short"
//                   ? "Short (500-800 words)"
//                   : opt === "Medium"
//                   ? "Medium (800-1200 words)"
//                   : "Long (1200+ words)"}
//               </span>
//             ))}
//           </div>

//         <button
//   type="submit"
//   className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#226BFF] to-[#65ADFF] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
// >
//   {/* Icon before text */}
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="20"
//     height="20"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="w-5 h-5"
//     aria-hidden="true"
//   >
//     <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
//     <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
//   </svg>

//   <span>Generate article</span>
// </button>

//         </form>

//         {/* Right Preview */}
//         <div className="w-full md:w-1/2 p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px] overflow-y-auto">
//           <div className="flex items-center gap-3">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide lucide-square-pen w-5 h-5 text-[#4A7AFF]"
//               aria-hidden="true"
//             >
//               <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
//               <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
//             </svg>
//             <h1 className="text-xl font-semibold">Article Preview</h1>
//           </div>
//           <div className="flex-1 flex justify-center items-center">
//             {article ? (
//               <pre className="text-sm text-gray-700 whitespace-pre-wrap">
//                 {article}
//               </pre>
//             ) : (
//               <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
//                 <p>Enter a topic and click “Generate article” to get started</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WriteArticle;


// import React, { useState } from "react";
// import axios from "axios";
// import { useAuth } from "@clerk/clerk-react"; // ✅ import Clerk hook

// const WriteArticle = () => {
//   const [topic, setTopic] = useState("");
//   const [length, setLength] = useState("Short");
//   const [article, setArticle] = useState("");
//   const [loading, setLoading] = useState(false);

//   const { getToken } = useAuth(); // ✅ get Clerk's token function

//   const handleGenerateArticle = async (e) => {
//     e.preventDefault();
//     if (!topic) {
//       alert("Please enter a topic!");
//       return;
//     }

//     let words = "";
//     if (length === "Short") words = "500-800 words";
//     if (length === "Medium") words = "800-1200 words";
//     if (length === "Long") words = "1200+ words";

//     try {
//       setLoading(true);
//       setArticle("");

//       // ✅ fetch Clerk token securely
//       const token = await getToken();

//       const res = await axios.post(
//         "http://localhost:3000/api/ai/generate-article",
//         { topic, length, words },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // ✅ send token properly
//           },
//         }
//       );

//       if (res.data) {
//         setArticle(res.data);
//       } else {
//         setArticle("⚠️ No article received from API.");
//       }
//     } catch (err) {
//       console.error("Article generation error:", err);
//       setArticle("❌ Failed to generate article. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex-1 bg-[#F4F7FB] min-h-screen">
//       <div className="p-6 flex flex-col md:flex-row items-start gap-4 text-slate-700">
//         {/* Form */}
//         <form
//           onSubmit={handleGenerateArticle}
//           className="w-full md:w-1/2 p-4 bg-white rounded-lg border border-gray-200"
//         >
//           <h1 className="text-xl font-semibold">AI Article Writer</h1>

//           {/* Input */}
//           <p className="mt-6 text-sm font-medium">Article Topic</p>
//           <input
//             className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
//             placeholder="The future of AI..."
//             required
//             type="text"
//             value={topic}
//             onChange={(e) => setTopic(e.target.value)}
//           />

//           {/* Length Options */}
//           <p className="mt-4 text-sm font-medium">Article Length</p>
//           <div className="mt-3 flex gap-3 flex-wrap">
//             {["Short", "Medium", "Long"].map((opt) => (
//               <span
//                 key={opt}
//                 onClick={() => setLength(opt)}
//                 className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${
//                   length === opt
//                     ? "bg-blue-50 text-blue-700 border-blue-400"
//                     : "text-gray-500 border-gray-300"
//                 }`}
//               >
//                 {opt === "Short"
//                   ? "Short (500-800 words)"
//                   : opt === "Medium"
//                   ? "Medium (800-1200 words)"
//                   : "Long (1200+ words)"}
//               </span>
//             ))}
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#226BFF] to-[#65ADFF] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer disabled:opacity-60"
//           >
//             {loading ? "⏳ Generating..." : "Generate article"}
//           </button>
//         </form>

//         {/* Preview */}
//         <div className="w-full md:w-1/2 p-4 bg-white rounded-lg border border-gray-200 min-h-96 max-h-[600px] overflow-y-auto">
//           <h1 className="text-xl font-semibold mb-3">Article Preview</h1>
//           {article ? (
//             <pre className="text-sm text-gray-700 whitespace-pre-wrap">
//               {article}
//             </pre>
//           ) : (
//             <p className="text-gray-400 text-sm">
//               Enter a topic and click “Generate article” to get started
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WriteArticle;

// import React, { useState } from "react";
// import axios from "axios";
// import { useAuth } from "@clerk/clerk-react";

// const WriteArticle = () => {
//   const [topic, setTopic] = useState("");
//   const [length, setLength] = useState("Short");
//   const [article, setArticle] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(""); // ✅ track API errors

//   const { getToken } = useAuth();

//   const handleGenerateArticle = async (e) => {
//     e.preventDefault();
//     if (!topic) {
//       alert("Please enter a topic!");
//       return;
//     }

//     let words = "";
//     if (length === "Short") words = "500-800 words";
//     if (length === "Medium") words = "800-1200 words";
//     if (length === "Long") words = "1200+ words";

//     try {
//       setLoading(true);
//       setArticle("");
//       setError("");

//       const token = await getToken();

//       const res = await axios.post(
//   "http://localhost:3000/api/ai/generate-article",
//   { topic, length, words },
//   { headers: { Authorization: `Bearer ${token}` } }
// );

// if (res.data?.success) {
//   setArticle(res.data.article); // ✅ use correct key
// } else {
//   setArticle("⚠️ No article received from API.");
// }

//     } catch (err) {
//       console.error("Article generation error:", err);
//       setError(
//         err.response?.data?.error ||
//           err.message ||
//           "❌ Failed to generate article. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex-1 bg-[#F4F7FB] min-h-screen">
//       <div className="p-6 flex flex-col md:flex-row items-start gap-4 text-slate-700">
//         {/* Form */}
//         <form
//           onSubmit={handleGenerateArticle}
//           className="w-full md:w-1/2 p-4 bg-white rounded-lg border border-gray-200"
//         >
//           <h1 className="text-xl font-semibold">AI Article Writer</h1>

//           {/* Input */}
//           <p className="mt-6 text-sm font-medium">Article Topic</p>
//           <input
//             className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
//             placeholder="The future of AI..."
//             required
//             type="text"
//             value={topic}
//             onChange={(e) => setTopic(e.target.value)}
//           />

//           {/* Length Options */}
//           <p className="mt-4 text-sm font-medium">Article Length</p>
//           <div className="mt-3 flex gap-3 flex-wrap">
//             {["Short", "Medium", "Long"].map((opt) => (
//               <span
//                 key={opt}
//                 onClick={() => setLength(opt)}
//                 className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${
//                   length === opt
//                     ? "bg-blue-50 text-blue-700 border-blue-400"
//                     : "text-gray-500 border-gray-300"
//                 }`}
//               >
//                 {opt === "Short"
//                   ? "Short (500-800 words)"
//                   : opt === "Medium"
//                   ? "Medium (800-1200 words)"
//                   : "Long (1200+ words)"}
//               </span>
//             ))}
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#226BFF] to-[#65ADFF] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer disabled:opacity-60"
//           >
//             {loading ? "⏳ Generating..." : "Generate article"}
//           </button>

//           {/* Error */}
//           {error && (
//             <p className="mt-3 text-sm text-red-500 font-medium">{error}</p>
//           )}
//         </form>

//         {/* Preview */}
//         <div className="w-full md:w-1/2 p-4 bg-white rounded-lg border border-gray-200 min-h-96 max-h-[600px] overflow-y-auto">
//           <h1 className="text-xl font-semibold mb-3">Article Preview</h1>
//           {article ? (
//             <pre className="text-sm text-gray-700 whitespace-pre-wrap">
//               {article}
//             </pre>
//           ) : !error ? (
//             <p className="text-gray-400 text-sm">
//               Enter a topic and click “Generate article” to get started
//             </p>
//           ) : null}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WriteArticle;

// import React, { useState } from "react";
// import axios from "axios";
// import { useAuth } from "@clerk/clerk-react";

// const WriteArticle = () => {
//   const [topic, setTopic] = useState("");
//   const [length, setLength] = useState("Short");
//   const [article, setArticle] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const { getToken } = useAuth();

//   // const handleGenerateArticle = async (e) => {
//   //   e.preventDefault();
//   //   if (!topic) return alert("Please enter a topic!");

//   //   let words = length === "Short" ? "500-800 words" : length === "Medium" ? "800-1200 words" : "1200+ words";

//   //   try {
//   //     setLoading(true);
//   //     setArticle("");
//   //     setError("");

//   //     const token = await getToken();

//   //     const res = await axios.post(
//   //       "http://localhost:3000/api/ai/generate-article",
//   //       { topic, length, words },
//   //       { headers: { Authorization: `Bearer ${token}` } }
//   //     );

//   //     if (res.data?.success && res.data.article) {
//   //       setArticle(res.data.article);
//   //     } else {
//   //       console.error("⚠️ Backend response:", res.data);
//   //       setError(res.data.error || "⚠️ No article received from API.");
//   //     }
//   //   } catch (err) {
//   //     console.error("Article generation error:", err);
//   //     setError(err.response?.data?.error || err.message || "❌ Failed to generate article.");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const handleGenerateArticle = async (e) => {
//   e.preventDefault();
//   if (!topic) return alert("Please enter a topic!");

//   let words =
//     length === "Short"
//       ? "500-800 words"
//       : length === "Medium"
//       ? "800-1200 words"
//       : "1200+ words";

//   try {
//     setLoading(true);
//     setArticle("");
//     setError("");

//     const token = await getToken();
//     console.log("🔑 Token:", token ? "Token present ✅" : "❌ No token");
//     const API_URL = import.meta.env.VITE_API_URL; 


//     const res = await axios.post(`${API_URL}/api/ai/generate-article`,
//       { topic, length, words },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     if (res.data?.success && res.data.article) {
//       setArticle(res.data.article);
//     } else {
//       console.error("⚠️ Backend response:", res.data);
//       setError(res.data.error || "⚠️ No article received from API.");
//     }
//   } catch (err) {
//     console.error("Article generation error:", err);
//     setError(
//       err.response?.data?.error ||
//         err.message ||
//         "❌ Failed to generate article."
//     );
//   } finally {
//     setLoading(false);
//   }
// };

//   return (
//     <div className="flex-1 bg-[#F4F7FB] min-h-screen">
//       <div className="p-6 flex flex-col md:flex-row items-start gap-4 text-slate-700">
//         {/* Form */}
//         <form onSubmit={handleGenerateArticle} className="w-full md:w-1/2 p-4 bg-white rounded-lg border border-gray-200">
//           <h1 className="text-xl font-semibold">AI Article Writer</h1>

//           {/* Topic Input */}
//           <p className="mt-6 text-sm font-medium">Article Topic</p>
//           <input
//             className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
//             placeholder="The future of AI..."
//             value={topic}
//             onChange={(e) => setTopic(e.target.value)}
//           />

//           {/* Length Selector */}
//           <p className="mt-4 text-sm font-medium">Article Length</p>
//           <div className="mt-3 flex gap-3 flex-wrap">
//             {["Short", "Medium", "Long"].map((opt) => (
//               <span
//                 key={opt}
//                 onClick={() => setLength(opt)}
//                 className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${
//                   length === opt ? "bg-blue-50 text-blue-700 border-blue-400" : "text-gray-500 border-gray-300"
//                 }`}
//               >
//                 {opt === "Short" ? "Short (500-800 words)" : opt === "Medium" ? "Medium (800-1200 words)" : "Long (1200+ words)"}
//               </span>
//             ))}
//           </div>

//           {/* Generate Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#226BFF] to-[#65ADFF] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer disabled:opacity-60"
//           >
//             {loading ? "⏳ Generating..." : "Generate article"}
//           </button>

//           {/* Error */}
//           {error && <p className="mt-3 text-sm text-red-500 font-medium">{error}</p>}
//         </form>

//         {/* Preview */}
//         <div className="w-full md:w-1/2 p-4 bg-white rounded-lg border border-gray-200 min-h-96 max-h-[600px] overflow-y-auto">
//           <h1 className="text-xl font-semibold mb-3">Article Preview</h1>
//           {article ? (
//             <pre className="text-sm text-gray-700 whitespace-pre-wrap">{article}</pre>
//           ) : !error ? (
//             <p className="text-gray-400 text-sm">Enter a topic and click “Generate article” to get started</p>
//           ) : null}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WriteArticle;


// import React, { useState } from "react";
// import axios from "axios";
// import { useAuth } from "@clerk/clerk-react";

// const WriteArticle = () => {
//   const [topic, setTopic] = useState("");
//   const [length, setLength] = useState("Short");
//   const [article, setArticle] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const { getToken } = useAuth();

//   const handleGenerateArticle = async (e) => {
//     e.preventDefault();
//     if (!topic) return alert("Please enter a topic!");

//     const words =
//       length === "Short"
//         ? "500-800 words"
//         : length === "Medium"
//         ? "800-1200 words"
//         : "1200+ words";

//     try {
//       setLoading(true);
//       setArticle("");
//       setError("");

//       const token = await getToken();
//       console.log("🔑 Token:", token ? "Token present ✅" : "❌ No token");

//       const API_URL = import.meta.env.VITE_API_URL;

//       const res = await axios.post(
//         `${API_URL}/api/ai/generate-article`,
//         { topic, length, words },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       if (res.data?.success && res.data.article) {
//         setArticle(res.data.article);
//       } else {
//         console.error("⚠️ Backend response:", res.data);
//         setError(res.data.error || "⚠️ No article received from API.");
//       }
//     } catch (err) {
//       console.error("Article generation error:", err);
//       setError(
//         err.response?.data?.error || err.message || "❌ Failed to generate article."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex-1 bg-[#F4F7FB] min-h-screen">
//       <div className="p-6 flex flex-col md:flex-row items-start gap-4 text-slate-700">
//         {/* Form */}
//         <form
//           onSubmit={handleGenerateArticle}
//           className="w-full md:w-1/2 p-4 bg-white rounded-lg border border-gray-200"
//         >
//           <h1 className="text-xl font-semibold">AI Article Writer</h1>

//           {/* Topic Input */}
//           <p className="mt-6 text-sm font-medium">Article Topic</p>
//           <input
//             className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
//             placeholder="The future of AI..."
//             value={topic}
//             onChange={(e) => setTopic(e.target.value)}
//           />

//           {/* Length Selector */}
//           <p className="mt-4 text-sm font-medium">Article Length</p>
//           <div className="mt-3 flex gap-3 flex-wrap">
//             {["Short", "Medium", "Long"].map((opt) => (
//               <span
//                 key={opt}
//                 onClick={() => setLength(opt)}
//                 className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${
//                   length === opt
//                     ? "bg-blue-50 text-blue-700 border-blue-400"
//                     : "text-gray-500 border-gray-300"
//                 }`}
//               >
//                 {opt === "Short"
//                   ? "Short (500-800 words)"
//                   : opt === "Medium"
//                   ? "Medium (800-1200 words)"
//                   : "Long (1200+ words)"}
//               </span>
//             ))}
//           </div>

//           {/* Generate Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#226BFF] to-[#65ADFF] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer disabled:opacity-60"
//           >
//             {loading ? "⏳ Generating..." : "Generate article"}
//           </button>

//           {/* Error */}
//           {error && <p className="mt-3 text-sm text-red-500 font-medium">{error}</p>}
//         </form>

//         {/* Preview */}
//         <div className="w-full md:w-1/2 p-4 bg-white rounded-lg border border-gray-200 min-h-96 max-h-[600px] overflow-y-auto">
//           <h1 className="text-xl font-semibold mb-3">Article Preview</h1>
//           {article ? (
//             <div
//               className="prose max-w-full text-gray-700"
//               dangerouslySetInnerHTML={{ __html: article }}
//             />
//           ) : !error ? (
//             <p className="text-gray-400 text-sm">
//               Enter a topic and click “Generate article” to get started
//             </p>
//           ) : null}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WriteArticle;


imimport React, { useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

const WriteArticle = () => {
  const [topic, setTopic] = useState("");
  const [length, setLength] = useState("Short");
  const [article, setArticle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { getToken } = useAuth();

  const handleGenerateArticle = async (e) => {
    e.preventDefault();
    if (!topic) return alert("Please enter a topic!");

    const words =
      length === "Short"
        ? "500-800 words"
        : length === "Medium"
        ? "800-1200 words"
        : "1200+ words";

    try {
      setLoading(true);
      setArticle("");
      setError("");

      const token = await getToken();
      console.log("🔑 Token:", token ? "Token present ✅" : "❌ No token");

      const API_URL = import.meta.env.VITE_API_URL;

      // Send topic, length, and words (backend expects this)
      const res = await axios.post(
        `${API_URL}/api/ai/generate-article`,
        { topic, length, words },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data?.success && res.data.article) {
        // Optional: clean HTML and add line breaks
        const cleaned = res.data.article.replace(/\n{2,}/g, "\n").trim();
        setArticle(cleaned);
      } else {
        console.error("⚠️ Backend response:", res.data);
        setError(res.data.error || "⚠️ No article received from API.");
      }
    } catch (err) {
      console.error("Article generation error:", err);
      setError(
        err.response?.data?.error || err.message || "❌ Failed to generate article."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 bg-[#F4F7FB] min-h-screen">
      <div className="p-6 flex flex-col md:flex-row items-start gap-4 text-slate-700">
        {/* Form */}
        <form
          onSubmit={handleGenerateArticle}
          className="w-full md:w-1/2 p-4 bg-white rounded-lg border border-gray-200"
        >
          <h1 className="text-xl font-semibold">AI Article Writer</h1>

          {/* Topic Input */}
          <p className="mt-6 text-sm font-medium">Article Topic</p>
          <input
            className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
            placeholder="The future of AI..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />

          {/* Length Selector */}
          <p className="mt-4 text-sm font-medium">Article Length</p>
          <div className="mt-3 flex gap-3 flex-wrap">
            {["Short", "Medium", "Long"].map((opt) => (
              <span
                key={opt}
                onClick={() => setLength(opt)}
                className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${
                  length === opt
                    ? "bg-blue-50 text-blue-700 border-blue-400"
                    : "text-gray-500 border-gray-300"
                }`}
              >
                {opt === "Short"
                  ? "Short (500-800 words)"
                  : opt === "Medium"
                  ? "Medium (800-1200 words)"
                  : "Long (1200+ words)"}
              </span>
            ))}
          </div>

          {/* Generate Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#226BFF] to-[#65ADFF] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer disabled:opacity-60"
          >
            {loading ? "⏳ Generating..." : "Generate article"}
          </button>

          {/* Error */}
          {error && (
            <p className="mt-3 text-sm text-red-500 font-medium">{error}</p>
          )}
        </form>

        {/* Preview */}
        <div className="w-full md:w-1/2 p-4 bg-white rounded-lg border border-gray-200 min-h-96 max-h-[600px] overflow-y-auto">
          <h1 className="text-xl font-semibold mb-3">Article Preview</h1>
          {article ? (
            <div
              className="prose max-w-full text-gray-700"
              dangerouslySetInnerHTML={{ __html: article }}
            />
          ) : !error ? (
            <p className="text-gray-400 text-sm">
              Enter a topic and click “Generate article” to get started
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default WriteArticle;
