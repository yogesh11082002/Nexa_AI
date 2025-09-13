import React, { useState } from "react";

const Community = () => {
  const initialCreations = [
    {
      img: "https://res.cloudinary.com/djbvf02yt/image/upload/v1752133039/euxctibmklvnye68iixi.png",
      text: "Generate an image of a boy playing with cat on the street in the style 3D style.",
      likes: 285,
      liked: false,
    },
    {
      img: "https://res.cloudinary.com/djbvf02yt/image/upload/v1750853764/nyt0cleyc8dritrc8bg3.png",
      text: "Generate an image of a boy playing football in the style Realistic.",
      likes: 209,
      liked: false,
    },
    {
      img: "https://res.cloudinary.com/djbvf02yt/image/upload/v1750770567/d44nbdoap2c0fq8hlvtc.png",
      text: "Generate an image of a cat chasing a rat while running on water in the style Anime style.",
      likes: 133,
      liked: false,
    },
  ];

  const [creations, setCreations] = useState(initialCreations);

  // Toggle like/unlike
  const handleLike = (index) => {
    setCreations((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              liked: !item.liked,
              likes: item.liked ? item.likes - 1 : item.likes + 1,
            }
          : item
      )
    );
  };

  // Download image
  const handleDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "community-image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Copy description
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Description copied to clipboard!");
  };

  return (
    <div className="flex-1 h-full flex flex-col gap-4 p-6">
      <h2 className="text-lg font-semibold">Creations</h2>
      <div className="bg-white h-full w-full rounded-xl overflow-y-scroll p-3">
        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {creations.map((item, index) => (
            <div
              key={index}
              className="relative group w-full rounded-lg overflow-hidden"
            >
              <img
                src={item.img}
                alt="Generated creation"
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between group-hover:bg-gradient-to-b from-transparent to-black/80 text-white rounded-lg transition-all p-3">
                <p className="text-sm hidden group-hover:block">{item.text}</p>
                <div className="flex gap-3 items-center justify-end">
                  {/* Copy */}
                  <button
                    onClick={() => handleCopy(item.text)}
                    className="bg-white/20 p-1 rounded hover:bg-white/40 transition"
                    title="Copy description"
                  >
                    📋
                  </button>
                  {/* Download */}
                  <button
                    onClick={() => handleDownload(item.img)}
                    className="bg-white/20 p-1 rounded hover:bg-white/40 transition"
                    title="Download image"
                  >
                    ⬇️
                  </button>
                  {/* Likes */}
                  <div
                    onClick={() => handleLike(index)}
                    className="flex gap-1 items-center cursor-pointer"
                  >
                    <p>{item.likes}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill={item.liked ? "red" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`lucide lucide-heart min-w-5 h-5 hover:scale-110 transition-transform ${
                        item.liked ? "text-red-500" : "text-white"
                      }`}
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
