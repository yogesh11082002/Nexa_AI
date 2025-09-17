// import React, { useState } from "react";

// const styles = [
//   "Realistic",
//   "Ghibli style",
//   "Anime style",
//   "Cartoon style",
//   "Fantasy style",
//   "Realistic style",
//   "3D style",
//   "Portrait style",
// ];

// const GenerateImages = () => {
//   const [description, setDescription] = useState("");
//   const [selectedStyle, setSelectedStyle] = useState("Realistic");
//   const [isPublic, setIsPublic] = useState(false);
//   const [generatedImage, setGeneratedImage] = useState(null);

//   // Generate Image (Mock)
//   const handleGenerateImage = (e) => {
//     e.preventDefault();
//     if (!description) {
//       alert("Please enter a description!");
//       return;
//     }

//     // Mock generated image (replace with real API later)
//     setGeneratedImage(
//       `https://placehold.co/600x400?text=${encodeURIComponent(
//         description + " - " + selectedStyle
//       )}`
//     );
//   };

//   // Download Image
//   const handleDownload = async () => {
//     if (!generatedImage) return;

//     try {
//       const response = await fetch(generatedImage, { mode: "cors" });
//       const blob = await response.blob();
//       const url = URL.createObjectURL(blob);

//       const link = document.createElement("a");
//       link.href = url;
//       link.download = `${description || "generated"}-${selectedStyle}.png`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);

//       // cleanup
//       URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error("Download failed:", error);
//       alert("Failed to download image. Please try again.");
//     }
//   };

//   return (
//     <div className="flex-1 bg-[#F4F7FB] min-h-screen">
//       <div className="p-6 flex flex-col md:flex-row items-start gap-4 text-slate-700">
//         {/* Left Form */}
//         <form
//           onSubmit={handleGenerateImage}
//           className="w-full md:w-1/2 p-4 bg-white rounded-lg border border-gray-200"
//         >
//           {/* Heading */}
//           <div className="flex items-center gap-3">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide lucide-sparkles w-6 text-[#00AD25]"
//             >
//               <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
//               <path d="M20 3v4" />
//               <path d="M22 5h-4" />
//               <path d="M4 17v2" />
//               <path d="M5 18H3" />
//             </svg>
//             <h1 className="text-xl font-semibold">AI Image Generator</h1>
//           </div>

//           {/* Description */}
//           <p className="mt-6 text-sm font-medium">Describe Your Image</p>
//           <textarea
//             rows="4"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
//             placeholder="Describe what you want to see in the image.."
//           />

//           {/* Style selection */}
//           <p className="mt-4 text-sm font-medium">Style</p>
//           <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3 flex-wrap">
//             {styles.map((style) => (
//               <span
//                 key={style}
//                 onClick={() => setSelectedStyle(style)}
//                 className={`text-xs text-center px-4 py-1 border rounded-full cursor-pointer ${
//                   selectedStyle === style
//                     ? "bg-green-50 text-green-700 border-green-400"
//                     : "text-gray-500 border-gray-300"
//                 }`}
//               >
//                 {style}
//               </span>
//             ))}
//           </div>

//           {/* Public toggle */}
//           <div className="my-6 flex items-center gap-2">
//             <label className="relative cursor-pointer">
//               <input
//                 type="checkbox"
//                 checked={isPublic}
//                 onChange={(e) => setIsPublic(e.target.checked)}
//                 className="sr-only peer"
//               />
//               <div className="w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition" />
//               <span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4"></span>
//             </label>
//             <p className="text-sm">Make this image Public</p>
//           </div>

//           {/* Generate button */}
//           <button
//             type="submit"
//             className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00AD25] to-[#04FF50] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide lucide-image w-5"
//             >
//               <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
//               <circle cx="9" cy="9" r="2"></circle>
//               <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
//             </svg>
//             Generate Image
//           </button>
//         </form>

//         {/* Right panel: Generated Image */}
//         <div className="w-full md:w-1/2 p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
//           <div className="flex items-center gap-3">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide lucide-image w-5 h-5 text-[#00AD25]"
//             >
//               <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
//               <circle cx="9" cy="9" r="2"></circle>
//               <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
//             </svg>
//             <h1 className="text-xl font-semibold">Generated Image</h1>
//           </div>

//           <div className="flex-1 flex flex-col justify-center items-center gap-4">
//             {generatedImage ? (
//               <>
//                 <img
//                   src={generatedImage}
//                   alt="Generated preview"
//                   className="rounded-lg max-h-72 object-contain shadow"
//                 />
//                 {/* Download Button */}
//                 <button
//                   onClick={handleDownload}
//                   className="flex items-center gap-2 bg-gradient-to-r from-[#226BFF] to-[#65ADFF] 
//                             text-white px-4 py-2 text-sm rounded-lg cursor-pointer shadow"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-download w-5 h-5"
//                   >
//                     <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//                     <polyline points="7 10 12 15 17 10" />
//                     <line x1="12" x2="12" y1="15" y2="3" />
//                   </svg>
//                   Download Image
//                 </button>
//               </>
//             ) : (
//               <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="36"
//                   height="36"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-image w-9 h-9"
//                 >
//                   <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
//                   <circle cx="9" cy="9" r="2"></circle>
//                   <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
//                 </svg>
//                 <p>Enter a description and click “Generate image” to get started</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GenerateImages;

import React, { useState } from "react";
import axios from "axios";

const styles = [
  "Realistic",
  "Ghibli style",
  "Anime style",
  "Cartoon style",
  "Fantasy style",
  "3D style",
  "Portrait style",
];

const GenerateImages = () => {
  const [description, setDescription] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("Realistic");
  const [isPublic, setIsPublic] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Generate Image (API call to backend)
  const handleGenerateImage = async (e) => {
    e.preventDefault();
    if (!description) {
      alert("Please enter a description!");
      return;
    }

    try {
      setLoading(true);
      setGeneratedImage(null);

      const { data } = await axios.post("/api/ai/generate-image", {
        topic: `${description} in ${selectedStyle}`, // 👈 backend uses `topic`
        publish: isPublic,
      });

      if (data.success) {
        setGeneratedImage(data.image); // backend returns `image`
      } else {
        alert(data.error || "Failed to generate image");
      }
    } catch (err) {
      console.error("Image generation failed:", err);
      alert("Something went wrong while generating the image.");
    } finally {
      setLoading(false);
    }
  };

  // Download Image
  const handleDownload = async () => {
    if (!generatedImage) return;

    try {
      const response = await fetch(generatedImage, { mode: "cors" });
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${description || "generated"}-${selectedStyle}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download image. Please try again.");
    }
  };

  return (
    <div className="flex-1 bg-[#F4F7FB] min-h-screen">
      <div className="p-6 flex flex-col md:flex-row items-start gap-4 text-slate-700">
        {/* Left Form */}
        <form
          onSubmit={handleGenerateImage}
          className="w-full md:w-1/2 p-4 bg-white rounded-lg border border-gray-200"
        >
          {/* Heading */}
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold text-[#00AD25]">
              AI Image Generator
            </h1>
          </div>

          {/* Description */}
          <p className="mt-6 text-sm font-medium">Describe Your Image</p>
          <textarea
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
            placeholder="Describe what you want to see in the image.."
          />

          {/* Style selection */}
          <p className="mt-4 text-sm font-medium">Style</p>
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3 flex-wrap">
            {styles.map((style) => (
              <span
                key={style}
                onClick={() => setSelectedStyle(style)}
                className={`text-xs text-center px-4 py-1 border rounded-full cursor-pointer ${
                  selectedStyle === style
                    ? "bg-green-50 text-green-700 border-green-400"
                    : "text-gray-500 border-gray-300"
                }`}
              >
                {style}
              </span>
            ))}
          </div>

          {/* Public toggle */}
          <div className="my-6 flex items-center gap-2">
            <label className="relative cursor-pointer">
              <input
                type="checkbox"
                checked={isPublic}
                onChange={(e) => setIsPublic(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition" />
              <span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4"></span>
            </label>
            <p className="text-sm">Make this image Public</p>
          </div>

          {/* Generate button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00AD25] to-[#04FF50] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
          >
            {loading ? "Generating..." : "Generate Image"}
          </button>
        </form>

        {/* Right panel: Generated Image */}
        <div className="w-full md:w-1/2 p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
          <h1 className="text-xl font-semibold text-[#00AD25]">Generated Image</h1>

          <div className="flex-1 flex flex-col justify-center items-center gap-4">
            {loading ? (
              <p className="text-gray-400 text-sm">⏳ Generating image...</p>
            ) : generatedImage ? (
              <>
                <img
                  src={generatedImage}
                  alt="Generated preview"
                  className="rounded-lg max-h-72 object-contain shadow"
                />
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 bg-gradient-to-r from-[#226BFF] to-[#65ADFF] 
                            text-white px-4 py-2 text-sm rounded-lg cursor-pointer shadow"
                >
                  Download Image
                </button>
              </>
            ) : (
              <p className="text-gray-400 text-sm">
                Enter a description and click “Generate image” to get started
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateImages;
