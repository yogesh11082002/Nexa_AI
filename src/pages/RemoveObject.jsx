// import React, { useState } from "react";

// const RemoveObject = () => {
//   const [image, setImage] = useState(null);
//   const [objectName, setObjectName] = useState("");
//   const [processedImage, setProcessedImage] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleUpload = (e) => {
//     setImage(e.target.files[0]);
//     setProcessedImage(null); // reset preview when new image uploaded
//   };

//   const handleRemoveObject = async (e) => {
//     e.preventDefault();
//     if (!image || !objectName) {
//       alert("Please upload an image and enter an object name.");
//       return;
//     }

//     setLoading(true);

//     try {
//       // Replace with your backend API call
//       const formData = new FormData();
//       formData.append("image", image);
//       formData.append("objectName", objectName);

//       // Fake API delay (simulate processing)
//       await new Promise((res) => setTimeout(res, 2000));

//       // For demo: return same uploaded image as "processed"
//       setProcessedImage(URL.createObjectURL(image));
//     } catch (error) {
//       console.error("Error removing object:", error);
//       alert("Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDownload = () => {
//     if (!processedImage) return;
//     const link = document.createElement("a");
//     link.href = processedImage;
//     link.download = "processed-image.png";
//     link.click();
//   };

//   return (
//     <div className="h-full overflow-y-scroll p-6 text-slate-700">
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Upload Form */}
//         <form
//           onSubmit={handleRemoveObject}
//           className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
//         >
//           <div className="flex items-center gap-3">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="lucide lucide-sparkles w-6 text-[#4A7AFF]"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               viewBox="0 0 24 24"
//             >
//               <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
//               <path d="M20 3v4"></path>
//               <path d="M22 5h-4"></path>
//               <path d="M4 17v2"></path>
//               <path d="M5 18H3"></path>
//             </svg>
//             <h1 className="text-xl font-semibold">Object Removal</h1>
//           </div>

//           <p className="mt-6 text-sm font-medium">Upload image</p>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleUpload}
//             className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600"
//             required
//           />

//           <p className="mt-6 text-sm font-medium">Describe object name to remove</p>
//           <textarea
//             rows="4"
//             placeholder="e.g., watch or spoon (only one object name)"
//             value={objectName}
//             onChange={(e) => setObjectName(e.target.value)}
//             className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
//             required
//           ></textarea>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#417DF6] to-[#8E37EB] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer disabled:opacity-50"
//           >
//             {loading ? (
//               "Processing..."
//             ) : (
//               <>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="lucide lucide-scissors w-5"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle cx="6" cy="6" r="3"></circle>
//                   <path d="M8.12 8.12 12 12"></path>
//                   <path d="M20 4 8.12 15.88"></path>
//                   <circle cx="6" cy="18" r="3"></circle>
//                   <path d="M14.8 14.8 20 20"></path>
//                 </svg>
//                 Remove object
//               </>
//             )}
//           </button>
//         </form>

//         {/* Output Preview */}
//         <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
//           <div className="flex items-center gap-3">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="lucide lucide-scissors w-5 h-5 text-[#4A7AFF]"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               viewBox="0 0 24 24"
//             >
//               <circle cx="6" cy="6" r="3"></circle>
//               <path d="M8.12 8.12 12 12"></path>
//               <path d="M20 4 8.12 15.88"></path>
//               <circle cx="6" cy="18" r="3"></circle>
//               <path d="M14.8 14.8 20 20"></path>
//             </svg>
//             <h1 className="text-xl font-semibold">Processed Image</h1>
//           </div>

//           <div className="flex-1 flex flex-col justify-center items-center">
//             {processedImage ? (
//               <>
//                 <img
//                   src={processedImage}
//                   alt="Processed result"
//                   className="max-h-80 object-contain"
//                 />
//                 <button
//                   onClick={handleDownload}
//                   className="mt-4 bg-[#4A7AFF] text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600"
//                 >
//                   Download Image
//                 </button>
//               </>
//             ) : (
//               <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="lucide lucide-scissors w-9 h-9"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle cx="6" cy="6" r="3"></circle>
//                   <path d="M8.12 8.12 12 12"></path>
//                   <path d="M20 4 8.12 15.88"></path>
//                   <circle cx="6" cy="18" r="3"></circle>
//                   <path d="M14.8 14.8 20 20"></path>
//                 </svg>
//                 <p>Upload an image and click "Remove Object" to get started</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RemoveObject;

import React, { useState } from "react";
import axios from "axios";

const RemoveObject = () => {
  const [image, setImage] = useState(null);
  const [objectName, setObjectName] = useState("");
  const [processedImage, setProcessedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL; // your backend URL

  const handleUpload = (e) => {
    setImage(e.target.files[0]);
    setProcessedImage(null); // reset previous output
  };

  const handleRemoveObject = async (e) => {
    e.preventDefault();
    if (!image || !objectName) {
      alert("Please upload an image and enter an object name.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("object", objectName); // backend expects "object"

      const token = localStorage.getItem("token"); // or use your auth method

      const res = await axios.post(`${API_URL}/api/ai/remove-object`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        setProcessedImage(res.data.image);
      } else {
        alert(res.data.error || "Failed to remove object");
      }
    } catch (err) {
      console.error("Error removing object:", err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!processedImage) return;
    const link = document.createElement("a");
    link.href = processedImage;
    link.download = "processed-image.png";
    link.click();
  };

  return (
    <div className="h-full overflow-y-scroll p-6 text-slate-700">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Upload Form */}
        <form
          onSubmit={handleRemoveObject}
          className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
        >
          <h1 className="text-xl font-semibold mb-4">Object Removal</h1>

          <label className="block text-sm font-medium mb-1">Upload image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="w-full p-2 mb-4 border rounded-md text-gray-600"
            required
          />

          <label className="block text-sm font-medium mb-1">Object name to remove</label>
          <input
            type="text"
            placeholder="e.g., watch, spoon"
            value={objectName}
            onChange={(e) => setObjectName(e.target.value)}
            className="w-full p-2 mb-4 border rounded-md"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#417DF6] to-[#8E37EB] text-white px-4 py-2 rounded-lg disabled:opacity-50"
          >
            {loading ? "Processing..." : "Remove Object"}
          </button>
        </form>

        {/* Output Preview */}
        <div className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col items-center">
          <h1 className="text-xl font-semibold mb-4">Processed Image</h1>

          {processedImage ? (
            <>
              <img
                src={processedImage}
                alt="Processed result"
                className="max-h-80 object-contain mb-4"
              />
              <button
                onClick={handleDownload}
                className="bg-[#4A7AFF] text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Download Image
              </button>
            </>
          ) : (
            <div className="text-gray-400 text-center">
              Upload an image and click "Remove Object" to get started
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RemoveObject;
