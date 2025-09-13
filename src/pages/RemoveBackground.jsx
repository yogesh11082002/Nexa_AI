// import React, { useState } from "react";

// const RemoveBackground = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [processedImage, setProcessedImage] = useState(null);

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleRemoveBackground = (e) => {
//     e.preventDefault();
//     if (!selectedFile) {
//       alert("Please upload an image first!");
//       return;
//     }

//     // Mock processed image (replace with real API later)
//     const previewUrl = URL.createObjectURL(selectedFile);
//     setProcessedImage(previewUrl);
//   };

//   return (
//     <div className="flex-1 bg-[#F4F7FB] min-h-screen">
//       <div className="p-6 flex flex-col md:flex-row items-start gap-4 text-slate-700">
//         {/* Left: Upload Form */}
//         <form
//           onSubmit={handleRemoveBackground}
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
//               className="lucide lucide-sparkles w-6 text-[#FF4938]"
//             >
//               <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
//               <path d="M20 3v4"></path>
//               <path d="M22 5h-4"></path>
//               <path d="M4 17v2"></path>
//               <path d="M5 18H3"></path>
//             </svg>
//             <h1 className="text-xl font-semibold">Background Removal</h1>
//           </div>

//           {/* Upload input */}
//           <p className="mt-6 text-sm font-medium">Upload image</p>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleFileChange}
//             className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600"
//             required
//           />
//           <p className="text-xs text-gray-500 font-light mt-1">
//             Supports JPG, PNG, and other image formats
//           </p>

//           {/* Submit button */}
//           <button
//             type="submit"
//             className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#F6AB41] to-[#FF4938] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
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
//               className="lucide lucide-eraser w-5"
//             >
//               <path d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21"></path>
//               <path d="m5.082 11.09 8.828 8.828"></path>
//             </svg>
//             Remove background
//           </button>
//         </form>

//         {/* Right: Preview */}
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
//               className="lucide lucide-eraser w-5 h-5 text-[#FF4938]"
//             >
//               <path d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21"></path>
//               <path d="m5.082 11.09 8.828 8.828"></path>
//             </svg>
//             <h1 className="text-xl font-semibold">Processed Image</h1>
//           </div>

//           <div className="flex-1 flex justify-center items-center">
//             {processedImage ? (
//               <img
//                 src={processedImage}
//                 alt="Processed preview"
//                 className="rounded-lg max-h-72 object-contain shadow"
//               />
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
//                   className="lucide lucide-eraser w-9 h-9"
//                 >
//                   <path d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21"></path>
//                   <path d="m5.082 11.09 8.828 8.828"></path>
//                 </svg>
//                 <p>
//                   Upload an image and click <b>"Remove Background"</b> to get
//                   started
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RemoveBackground;

import React, { useState } from "react";

const RemoveBackground = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setProcessedImage(null); // reset when new file uploaded
  };

  const handleRemoveBackground = (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("Please upload an image first!");
      return;
    }

    // Mock processed image (replace with real API later)
    const previewUrl = URL.createObjectURL(selectedFile);
    setProcessedImage(previewUrl);
  };

  const handleDownload = () => {
    if (!processedImage) return;
    const link = document.createElement("a");
    link.href = processedImage;
    link.download = "background-removed.png";
    link.click();
  };

  return (
    <div className="flex-1 bg-[#F4F7FB] min-h-screen">
      <div className="p-6 flex flex-col md:flex-row items-start gap-4 text-slate-700">
        {/* Left: Upload Form */}
        <form
          onSubmit={handleRemoveBackground}
          className="w-full md:w-1/2 p-4 bg-white rounded-lg border border-gray-200"
        >
          {/* Heading */}
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sparkles w-6 text-[#FF4938]"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
              <path d="M20 3v4"></path>
              <path d="M22 5h-4"></path>
              <path d="M4 17v2"></path>
              <path d="M5 18H3"></path>
            </svg>
            <h1 className="text-xl font-semibold">Background Removal</h1>
          </div>

          {/* Upload input */}
          <p className="mt-6 text-sm font-medium">Upload image</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600"
            required
          />
          <p className="text-xs text-gray-500 font-light mt-1">
            Supports JPG, PNG, and other image formats
          </p>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#F6AB41] to-[#FF4938] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-eraser w-5"
            >
              <path d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21"></path>
              <path d="m5.082 11.09 8.828 8.828"></path>
            </svg>
            Remove background
          </button>
        </form>

        {/* Right: Preview */}
        <div className="w-full md:w-1/2 p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-eraser w-5 h-5 text-[#FF4938]"
            >
              <path d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21"></path>
              <path d="m5.082 11.09 8.828 8.828"></path>
            </svg>
            <h1 className="text-xl font-semibold">Processed Image</h1>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center">
            {processedImage ? (
              <>
                <img
                  src={processedImage}
                  alt="Processed preview"
                  className="rounded-lg max-h-72 object-contain shadow"
                />
                <button
                  onClick={handleDownload}
                  className="mt-4 bg-[#FF4938] text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600"
                >
                  Download Image
                </button>
              </>
            ) : (
              <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-eraser w-9 h-9"
                >
                  <path d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21"></path>
                  <path d="m5.082 11.09 8.828 8.828"></path>
                </svg>
                <p>
                  Upload an image and click <b>"Remove Background"</b> to get
                  started
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveBackground;
