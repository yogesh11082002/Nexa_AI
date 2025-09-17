// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import {
//   SignedIn,
//   SignedOut,
//   RedirectToSignIn,
// } from "@clerk/clerk-react";

// import Home from "./pages/Home";
// import Layout from "./pages/Layout";
// import Dashboard from "./pages/Dashboard";
// import WriteArticle from "./pages/WriteArticle";
// import BlogTitles from "./pages/BlogTitles";
// import GenerateImages from "./pages/GenerateImages";
// import RemoveBackground from "./pages/RemoveBackground";
// import RemoveObject from "./pages/RemoveObject";
// import ReviewResume from "./pages/ReviewResume";
// import Community from "./pages/Community";
// import Demo from "./pages/Demo";
// import { useEffect } from "react";
// import { useAuth } from "@clerk/clerk-react";

// const App = () => {

//   const {getToken} = useAuth();

//   // useEffect(()=>{
//   //     getToken().then((token)=>console.log(token))

//   // },[])

//   return (
//     <Routes>
//       {/* Public Route */}
//       <Route path="/" element={<Home />} />
//       <Route path="/demo" element={<Demo />} />


//       {/* Protected Routes */}
//       <Route
//         path="/ai/*"
//         element={
//           <>
//             <SignedIn>
//               <Layout />
//             </SignedIn>
//             <SignedOut>
//               <RedirectToSignIn />
//             </SignedOut>
//           </>
//         }
//       >
//         <Route index element={<Dashboard />} />
//         <Route path="write-article" element={<WriteArticle />} />
//         <Route path="blog-titles" element={<BlogTitles />} />
//         <Route path="generate-images" element={<GenerateImages />} />
//         <Route path="remove-background" element={<RemoveBackground />} />
//         <Route path="remove-object" element={<RemoveObject />} />
//         <Route path="review-resume" element={<ReviewResume />} />
//         <Route path="community" element={<Community />} />
//       </Route>
//     </Routes>
//   );
// };

// export default App;

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import {
//   SignedIn,
//   SignedOut,
//   RedirectToSignIn,
// } from "@clerk/clerk-react";

// import Home from "./pages/Home";
// import Layout from "./pages/Layout";
// import Dashboard from "./pages/Dashboard";
// import WriteArticle from "./pages/WriteArticle";
// import BlogTitles from "./pages/BlogTitles";
// import GenerateImages from "./pages/GenerateImages";
// import RemoveBackground from "./pages/RemoveBackground";
// import RemoveObject from "./pages/RemoveObject";
// import ReviewResume from "./pages/ReviewResume";
// import Community from "./pages/Community";
// import Demo from "./pages/Demo";

// const App = () => {
//   return (
//     <Routes>
//       {/* Public Routes */}
//       <Route path="/" element={<Home />} />
//       <Route path="/demo" element={<Demo />} />

//       {/* Protected Routes (require sign-in) */}
//       <Route
//         path="/ai/*"
//         element={
//           <>
//             <SignedIn>
//               <Layout />
//             </SignedIn>
//             <SignedOut>
//               <RedirectToSignIn />
//             </SignedOut>
//           </>
//         }
//       >
//         <Route index element={<Dashboard />} />
//         <Route path="write-article" element={<WriteArticle />} />
//         <Route path="blog-titles" element={<BlogTitles />} />
//         <Route path="generate-images" element={<GenerateImages />} />
//         <Route path="remove-background" element={<RemoveBackground />} />
//         <Route path="remove-object" element={<RemoveObject />} />
//         <Route path="review-resume" element={<ReviewResume />} />
//         <Route path="community" element={<Community />} />
//       </Route>
//     </Routes>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";

import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import WriteArticle from "./pages/WriteArticle";
import BlogTitles from "./pages/BlogTitles";
import GenerateImages from "./pages/GenerateImages";
import RemoveBackground from "./pages/RemoveBackground";
import RemoveObject from "./pages/RemoveObject";
import ReviewResume from "./pages/ReviewResume";
import Community from "./pages/Community";
import Demo from "./pages/Demo";

const App = () => {
  return (
    <>
      {/* ✅ Global Toaster for toast notifications */}
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />

        {/* Protected Routes (require sign-in) */}
        <Route
          path="/ai/*"
          element={
            <>
              <SignedIn>
                <Layout />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="write-article" element={<WriteArticle />} />
          <Route path="blog-titles" element={<BlogTitles />} />
          <Route path="generate-images" element={<GenerateImages />} />
          <Route path="remove-background" element={<RemoveBackground />} />
          <Route path="remove-object" element={<RemoveObject />} />
          <Route path="review-resume" element={<ReviewResume />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
