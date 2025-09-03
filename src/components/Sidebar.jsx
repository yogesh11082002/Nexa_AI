
// import { useClerk, useUser } from "@clerk/clerk-react";
// import { NavLink } from "react-router-dom";
// import {
//   House,
//   SquarePen,
//   Hash,
//   Image,
//   Eraser,
//   Scissors,
//   FileText,
//   Users,
// } from "lucide-react";

// const navItems = [
//   { to: "/ai", label: "Dashboard", Icon: House },
//   { to: "/ai/write-article", label: "Write Article", Icon: SquarePen },
//   { to: "/ai/blog-titles", label: "Blog Titles", Icon: Hash },
//   { to: "/ai/generate-images", label: "Generate Images", Icon: Image },
//   { to: "/ai/remove-background", label: "Remove Background", Icon: Eraser },
//   { to: "/ai/remove-object", label: "Remove Object", Icon: Scissors },
//   { to: "/ai/review-resume", label: "Review Resume", Icon: FileText },
//   { to: "/ai/community", label: "Community", Icon: Users },
// ];

// const Sidebar = ({ sidebar, setSidebar }) => {
//   const { user } = useUser();
//   const { signOut, openUserProfile } = useClerk();

//   return (

//     <>
   
//    {/* Overlay for mobile */}
// <div
//   className={`fixed top-16 inset-x-0 bottom-0  bg-black/30 z-30 transition-opacity duration-300 sm:hidden ${
//     sidebar ? "opacity-100 visible" : "opacity-0 invisible"
//   }`}
//   onClick={() => setSidebar(false)}
// ></div>

      
//   <div
//   className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 z-40 transition-transform duration-300 ease-in-out ${
//     sidebar ? "translate-x-0" : "-translate-x-full"
//   } sm:translate-x-0`}
// >

//       {/* User Profile */}
//       <div className="my-4 w-full">
//         <img
//           src={user.imageUrl}
//           alt="user avatar"
//           className="w-14 h-14 rounded-full mx-auto"
//         />
//         <h1 className="mt-1 text-center font-medium">{user.fullName}</h1>

//         {/* Nav Links */}
//         <div className="px-6 mt-2 text-sm text-gray-600 font-medium space-y-1">
//           {navItems.map(({ to, label, Icon }) => (
//             <NavLink
//               key={to}
//               to={to}
//               className={({ isActive }) =>
//                 `px-3.5 py-2.5 flex items-center gap-3 rounded transition ${
//                   isActive
//                     ? "bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white"
//                     : "hover:bg-gray-100"
//                 }`
//               }
//             >
//               <Icon className="w-4 h-4" />
//               {label}
//             </NavLink>
//           ))}
//         </div>
//       </div>

//       {/* Footer with logout */}
//       <div className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between">
//         <div
//           className="flex gap-2 items-center cursor-pointer"
//           onClick={() => openUserProfile()}
//         >
//           <img
//             src={user.imageUrl}
//             alt="user avatar"
//             className="w-8 h-8 rounded-full"
//           />
//           <div>
//             <h1 className="text-sm font-medium">{user.fullName}</h1>
//             <p className="text-xs text-gray-500">Premium Plan</p>
//           </div>
//         </div>

//         <button
//           onClick={() => signOut()}
//           className="text-gray-400 hover:text-gray-700 transition"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="22"
//             height="22"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-log-out"
//           >
//             <path d="m16 17 5-5-5-5"></path>
//             <path d="M21 12H9"></path>
//             <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
//           </svg>
//         </button>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Sidebar;

 import { useClerk, useUser } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";
import {
  House,
  SquarePen,
  Hash,
  Image,
  Eraser,
  Scissors,
  FileText,
  Users,
} from "lucide-react";

const navItems = [
  { to: "/ai", label: "Dashboard", Icon: House },
  { to: "/ai/write-article", label: "Write Article", Icon: SquarePen },
  { to: "/ai/blog-titles", label: "Blog Titles", Icon: Hash },
  { to: "/ai/generate-images", label: "Generate Images", Icon: Image },
  { to: "/ai/remove-background", label: "Remove Background", Icon: Eraser },
  { to: "/ai/remove-object", label: "Remove Object", Icon: Scissors },
  { to: "/ai/review-resume", label: "Review Resume", Icon: FileText },
  { to: "/ai/community", label: "Community", Icon: Users },
];

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed top-14 inset-x-0 bottom-0 bg-black/30 z-30 transition-opacity duration-300 sm:hidden ${
          sidebar ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setSidebar(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 z-40 transition-transform duration-300 ease-in-out ${
          sidebar ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        {/* User Profile */}
        <div className="my-4 w-full">
          <img
            src={user.imageUrl}
            alt="user avatar"
            className="w-14 h-14 rounded-full mx-auto"
          />
          <h1 className="mt-1 text-center font-medium">{user.fullName}</h1>

          {/* Nav Links */}
          <div className="px-6 mt-2 text-sm text-gray-600 font-medium space-y-1">
            {navItems.map(({ to, label, Icon }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setSidebar(false)} // Close sidebar on mobile
                className={({ isActive }) =>
                  `px-3.5 py-2.5 flex items-center gap-3 rounded transition ${
                    isActive
                      ? "bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white"
                      : "hover:bg-gray-100"
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                {label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Footer with logout */}
        <div className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between">
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => openUserProfile()}
          >
            <img
              src={user.imageUrl}
              alt="user avatar"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <h1 className="text-sm font-medium">{user.fullName}</h1>
              <p className="text-xs text-gray-500">Premium Plan</p>
            </div>
          </div>

          <button
            onClick={() => signOut()}
            className="text-gray-400 hover:text-gray-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-log-out"
            >
              <path d="m16 17 5-5-5-5"></path>
              <path d="M21 12H9"></path>
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
