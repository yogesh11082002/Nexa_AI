// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";

// const logos = [
//   "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/slack.svg",
//   "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/framer.svg",
//   "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/netflix.svg",
//   "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/google.svg",
//   "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/linkedin.svg",
//   "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/instagram.svg",
//   "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/facebook.svg",
// ];

// const Move = () => {
//   const marqueeRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const marquee = marqueeRef.current;

//       gsap.to(marquee, {
//         xPercent: -50, // move half its width
//         ease: "linear",
//         duration: 20,
//         repeat: -1, // infinite loop
//       });
//     });

//     return () => ctx.revert(); // cleanup
//   }, []);

//   return (
//     <div className="-mt-50 sm:-mt-20">
//       <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
//         {/* Left gradient overlay */}
//         <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>

//         {/* Marquee container */}
//         <div className="flex w-[200%]" ref={marqueeRef}>
//           {/* Render logos twice for seamless loop */}
//           {[...logos, ...logos].map((src, i) => (
//             <img
//               key={i}
//               alt="logo"
//               className="w-32 h-16 object-contain mx-6"
//               draggable="false"
//               src={src}
//             />
//           ))}
//         </div>

//         {/* Right gradient overlay */}
//         <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
//       </div>
//     </div>
//   );
// };

// export default Move;

"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const logos = [
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/slack.svg",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/framer.svg",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/netflix.svg",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/google.svg",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/linkedin.svg",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/instagram.svg",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/facebook.svg",
];

const Move = () => {
  const marqueeRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    const width = marquee.scrollWidth / 2; // Half width (because we duplicated logos)

    // Animate by pixels instead of percent for consistent speed
    tlRef.current = gsap.to(marquee, {
      x: -width,
      ease: "linear",
      duration: 20,
      repeat: -1,
    });

    return () => {
      if (tlRef.current) tlRef.current.kill();
    };
  }, []);

  // Reverse on hover
  const handleMouseEnter = () => {
    if (tlRef.current) tlRef.current.reverse();
  };

  const handleMouseLeave = () => {
    if (tlRef.current) tlRef.current.play();
  };

  return (
    <div className="-mt-35 sm:-mt-25">
      <div
        className="overflow-hidden w-full relative max-w-5xl mx-auto select-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Left gradient overlay */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>

        {/* Marquee container */}
        <div className="flex w-max" ref={marqueeRef}>
          {/* Render logos twice for seamless loop */}
          {[...logos, ...logos].map((src, i) => (
            <img
              key={i}
              alt="logo"
              className="w-32 h-16 object-contain mx-6"
              draggable="false"
              src={src}
            />
          ))}
        </div>

        {/* Right gradient overlay */}
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </div>
  );
};

export default Move;
