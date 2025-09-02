import React from "react";

const AiTools = () => {
  return (
    <div>
      <div className="px-4 sm:px-20 xl:px-32 my-24 mt-0">
        <div className="text-center">
          <h2 className="text-slate-700 text-[42px] font-semibold">
            Powerful AI Tools
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Everything you need to create, enhance, and optimize your content
            with cutting-edge AI technology.
          </p>
        </div>

        <div className="flex flex-wrap mt-10 justify-center">
          {/* Tool 1 */}
          <div className="p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
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
              className="lucide lucide-square-pen w-12 h-12 p-3 text-white rounded-xl"
              aria-hidden="true"
              style={{
                background: "linear-gradient(rgb(53,136,242), rgb(11,176,215))",
              }}
            >
              <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
            </svg>
            <h3 className="mt-6 mb-3 text-lg font-semibold">AI Article Writer</h3>
            <p className="text-gray-400 text-sm max-w-[95%]">
              Generate high-quality, engaging articles on any topic with our AI
              writing technology.
            </p>
          </div>

          {/* Tool 2 */}
          <div className="p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
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
              className="lucide lucide-hash w-12 h-12 p-3 text-white rounded-xl"
              aria-hidden="true"
              style={{
                background: "linear-gradient(rgb(177,83,234), rgb(229,73,163))",
              }}
            >
              <line x1="4" x2="20" y1="9" y2="9" />
              <line x1="4" x2="20" y1="15" y2="15" />
              <line x1="10" x2="8" y1="3" y2="21" />
              <line x1="16" x2="14" y1="3" y2="21" />
            </svg>
            <h3 className="mt-6 mb-3 text-lg font-semibold">
              Blog Title Generator
            </h3>
            <p className="text-gray-400 text-sm max-w-[95%]">
              Find the perfect, catchy title for your blog posts with our
              AI-powered generator.
            </p>
          </div>

          {/* Tool 3 */}
          <div className="p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
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
              className="lucide lucide-image w-12 h-12 p-3 text-white rounded-xl"
              aria-hidden="true"
              style={{
                background: "linear-gradient(rgb(32,195,99), rgb(17,185,126))",
              }}
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
            <h3 className="mt-6 mb-3 text-lg font-semibold">
              AI Image Generation
            </h3>
            <p className="text-gray-400 text-sm max-w-[95%]">
              Create stunning visuals with our AI image generation tool,
              Experience the power of AI.
            </p>
          </div>

          {/* Tool 4 */}
          <div className="p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
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
              className="lucide lucide-eraser w-12 h-12 p-3 text-white rounded-xl"
              aria-hidden="true"
              style={{
                background: "linear-gradient(rgb(247,108,28), rgb(240,74,60))",
              }}
            >
              <path d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21" />
              <path d="m5.082 11.09 8.828 8.828" />
            </svg>
            <h3 className="mt-6 mb-3 text-lg font-semibold">
              Background Removal
            </h3>
            <p className="text-gray-400 text-sm max-w-[95%]">
              Effortlessly remove backgrounds from your images with our
              AI-driven tool.
            </p>
          </div>

          {/* Tool 5 */}
          <div className="p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
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
              className="lucide lucide-scissors w-12 h-12 p-3 text-white rounded-xl"
              aria-hidden="true"
              style={{
                background: "linear-gradient(rgb(92,106,241), rgb(66,125,245))",
              }}
            >
              <circle cx="6" cy="6" r="3" />
              <path d="M8.12 8.12 12 12" />
              <path d="M20 4 8.12 15.88" />
              <circle cx="6" cy="18" r="3" />
              <path d="M14.8 14.8 20 20" />
            </svg>
            <h3 className="mt-6 mb-3 text-lg font-semibold">Object Removal</h3>
            <p className="text-gray-400 text-sm max-w-[95%]">
              Remove unwanted objects from your images seamlessly with our AI
              object removal tool.
            </p>
          </div>

          {/* Tool 6 */}
          <div className="p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
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
              className="lucide lucide-file-text w-12 h-12 p-3 text-white rounded-xl"
              aria-hidden="true"
              style={{
                background: "linear-gradient(rgb(18,183,172), rgb(8,182,206))",
              }}
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M10 9H8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
            </svg>
            <h3 className="mt-6 mb-3 text-lg font-semibold">Resume Reviewer</h3>
            <p className="text-gray-400 text-sm max-w-[95%]">
              Get your resume reviewed by AI to improve your chances of landing
              your dream job.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiTools;
