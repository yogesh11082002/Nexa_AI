// import React, { useState } from "react";
// import axios from "axios";
// import { useAuth } from "@clerk/clerk-react";
// import ReactMarkdown from "react-markdown";
// import rehypeRaw from "rehype-raw";

// const WriteArticle = () => {
//   const [topic, setTopic] = useState("");
//   const [length, setLength] = useState("Short");
//   const [article, setArticle] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const { getToken } = useAuth();

// //   const handleGenerateArticle = async (e) => {
// //     e.preventDefault();
// //     if (!topic) return alert("Please enter a topic!");

// //     const words =
// //       length === "Short"
// //         ? "500-800 words"
// //         : length === "Medium"
// //         ? "800-1200 words"
// //         : "1200+ words";

// //     try {
// //       setLoading(true);
// //       setArticle("");
// //       setError("");

// //       const token = await getToken();

// //       const API_URL = import.meta.env.VITE_API_URL;

// //       const prompt = `Write a detailed ${length} article about "${topic}" in around ${words}.
// // Use proper HTML tags for headings (<h1>, <h2>), subheadings, paragraphs (<p>), bold (<strong>) and italic (<em>) text.
// // Make it visually well-structured, readable, and engaging.`;

// //       const res = await axios.post(
// //         `${API_URL}/api/ai/generate-article`,
// //         { topic, length, words, prompt },
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );

// //       if (res.data?.success && res.data.article) {
// //         const cleaned = res.data.article.replace(/\n{2,}/g, "\n").trim();
// //         setArticle(cleaned);
// //       } else {
// //         console.error("⚠️ Backend response:", res.data);
// //         setError(res.data.error || "⚠️ No article received from API.");
// //       }
// //     } catch (err) {
// //       console.error("Article generation error:", err);
// //       setError(
// //         err.response?.data?.error || err.message || "❌ Failed to generate article."
// //       );
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// const handleGenerateArticle = async (e) => {
//   e.preventDefault();
//   if (!topic) return alert("Please enter a topic!");

//   const words =
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
//     const API_URL = import.meta.env.VITE_API_URL;

//     // ✅ Detailed prompt with structured HTML instructions
//     const prompt = `
// Write a detailed ${length} article about "${topic}" in around ${words}.
// - Include an introduction paragraph.
// - Use bold headings and subheadings (<h1>, <h2>, <h3>) for sections.
// - Include lists (<ul><li>) for steps, tips, and examples.
// - Include tips or examples in italic or bold where appropriate.
// - Use clear, simple language.
// - End with a conclusion.
// - Do NOT include outer <html>, <body>, or metadata tags.
// - Output clean HTML suitable for ReactMarkdown or ReactQuill with correct heading, list, and paragraph formatting.
// `;

//     const res = await axios.post(
//       `${API_URL}/api/ai/generate-article`,
//       { topic, length, words, prompt },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     if (res.data?.success && res.data.article) {
//       // ✅ Clean unwanted outer HTML tags and extra line breaks
//       const cleaned = res.data.article
//         .replace(/<\s*html[^>]*>/gi, "")
//         .replace(/<\s*\/\s*html>/gi, "")
//         .replace(/<\s*head[^>]*>.*?<\s*\/\s*head>/gis, "")
//         .replace(/<\s*body[^>]*>/gi, "")
//         .replace(/<\s*\/\s*body>/gi, "")
//         .replace(/<\s*meta[^>]*>/gi, "")
//         .replace(/<\s*title[^>]*>.*?<\s*\/\s*title>/gis, "")
//         .replace(/\n\s*\n/g, "\n")
//         .trim();

//       setArticle(cleaned);
//     } else {
//       console.error("⚠️ Backend response:", res.data);
//       setError(res.data.error || "⚠️ No article received from API.");
//     }
//   } catch (err) {
//     console.error("Article generation error:", err);
//     setError(
//       err.response?.data?.error || err.message || "❌ Failed to generate article."
//     );
//   } finally {
//     setLoading(false);
//   }
// };

//   return (
//     <div className="flex-1 bg-[#F4F7FB] min-h-screen">
//       <div className="p-6 flex flex-col md:flex-row items-start gap-4 text-slate-700">
//         {/* Form */}
//         <form
//           onSubmit={handleGenerateArticle}
//           className="w-full md:w-1/2 p-4 bg-white rounded-lg border border-gray-200"
//         >
//           <h1 className="text-xl font-semibold">AI Article Writer</h1>

//           <p className="mt-6 text-sm font-medium">Article Topic</p>
//           <input
//             className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
//             placeholder="The future of AI..."
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

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#226BFF] to-[#65ADFF] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer disabled:opacity-60"
//           >
//             {loading ? "⏳ Generating..." : "Generate article"}
//           </button>

//           {error && (
//             <p className="mt-3 text-sm text-red-500 font-medium">{error}</p>
//           )}
//         </form>

//         {/* Preview */}
//         <div className="w-full md:w-1/2 p-4 bg-white rounded-lg border border-gray-200 min-h-96 max-h-[600px] overflow-y-auto">
//           <h1 className="text-xl font-semibold mb-3">Article Preview</h1>
//           {article ? (
//             <ReactMarkdown
//               rehypePlugins={[rehypeRaw]}
//               className="prose prose-lg prose-headings:text-blue-700 prose-p:leading-7 prose-strong:text-black"
//             >
//               {article}
//             </ReactMarkdown>
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

import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import parse from "html-react-parser";

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
      const API_URL = import.meta.env.VITE_API_URL;

      // Detailed prompt with HTML formatting
      const prompt = `
Write a detailed ${length} article about "${topic}" in around ${words}.
- A big heading (<h1>) with the article title.
- Include an introduction paragraph.
- Use bold headings and subheadings (<h1>, <h2>, <h3>) for sections.
- Include lists (<ul><li>) for steps, tips, and examples.
- Include tips or examples in italic or bold where appropriate.
- Use clear, simple language.
- End with a conclusion.
- Do NOT include outer <html>, <body>, or metadata tags.
- Output clean HTML suitable for ReactMarkdown or ReactQuill with correct heading, list, and paragraph formatting.
      `;

      const res = await axios.post(
        `${API_URL}/api/ai/generate-article`,
        { topic, length, words, prompt },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data?.success && res.data.article) {
        const cleaned = res.data.article
          .replace(/<\s*html[^>]*>/gi, "")
          .replace(/<\s*\/\s*html>/gi, "")
          .replace(/<\s*head[^>]*>.*?<\s*\/\s*head>/gis, "")
          .replace(/<\s*body[^>]*>/gi, "")
          .replace(/<\s*\/\s*body>/gi, "")
          .replace(/<\s*meta[^>]*>/gi, "")
          .replace(/<\s*title[^>]*>.*?<\s*\/\s*title>/gis, "")
          .replace(/\n\s*\n/g, "\n")
          .trim();

        setArticle(cleaned);
      } else {
        console.error("⚠️ Backend response:", res.data);
        setError(res.data.error || "⚠️ No article received from API.");
      }
    } catch (err) {
      console.error("Article generation error:", err);
      setError(
        err.response?.data?.error ||
          err.message ||
          "❌ Failed to generate article."
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
          <h1 className="text-2xl font-bold mb-4">AI Article Writer</h1>

          <label className="mt-4 text-sm font-medium">Article Topic</label>
          <input
            className="w-full p-2 mt-2 text-sm rounded-md border border-gray-300 outline-none"
            placeholder="The future of AI..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />

          <label className="mt-4 text-sm font-medium">Article Length</label>
          <div className="mt-2 flex gap-3 flex-wrap">
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

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 mt-6 px-4 py-2 text-sm text-white rounded-lg bg-gradient-to-r from-[#226BFF] to-[#65ADFF] disabled:opacity-60"
          >
            {loading ? "⏳ Generating..." : "Generate article"}
          </button>

          {error && (
            <p className="mt-3 text-sm text-red-500 font-medium">{error}</p>
          )}
        </form>

        {/* Preview */}
        <div className="w-full md:w-1/2 p-4 bg-white rounded-lg border border-gray-200 min-h-[500px] max-h-[700px] overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">Article Preview</h1>
          {article ? (
            <div
              className="prose prose-lg max-w-full text-gray-900 leading-relaxed
                    prose-h1:text-3xl prose-h1:font-bold prose-h1:text-black
                    prose-h2:text-2xl prose-h2:font-semibold prose-h2:text-gray-800
                    prose-h3:text-xl prose-h3:font-semibold prose-h3:text-gray-700
                    prose-p:mb-4 prose-p:text-gray-800
                    prose-li:mb-2
                    prose-strong:text-black prose-em:text-gray-600 italic"
            >
              {parse(article)}
            </div>
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
