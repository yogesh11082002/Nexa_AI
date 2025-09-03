// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";

// const Testimonial = () => {
//   const cardsRef = useRef([]);

//   const dummyTestimonialData = [
//     {
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
//       name: "David Lee",
//       title: "Content Writer, TechCorp",
//       content:
//         " NexaAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.",
//       rating: 5,
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
//       name: "John Doe",
//       title: "Marketing Director, TechCorp",
//       content:
//         " NexaAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.",
//       rating: 4,
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
//       name: "Jane Smith",
//       title: "Content Creator, TechCorp",
//       content:
//         " NexaAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.",
//       rating: 5,
//     },
    
//   ];

//   useEffect(() => {
//     // GSAP stagger animation for cards
//     gsap.from(cardsRef.current, {
//       y: 50,
//       opacity: 0,
//       duration: 0.8,
//       ease: "power3.out",
//       stagger: 0.2,
//     });
//   }, []);

//   return (
//     <div className="px-4 sm:px-20 xl:px-32 py-24">
//       {/* Section Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="text-center"
//       >
//         <h2 className="text-slate-700 text-[42px] font-semibold">
//           Loved by Creators
//         </h2>
//         <p className="text-gray-500 max-w-lg mx-auto">
//           Don't just take our word for it. Here's what our users are saying.
//         </p>
//       </motion.div>

//       {/* Testimonials Grid */}
//       <div className="flex flex-wrap mt-10 justify-center">
//         {dummyTestimonialData.map((testimonial, index) => (
//           <motion.div
//             key={index}
//             ref={(el) => (cardsRef.current[index] = el)}
//             whileHover={{ scale: 1.05, rotate: 1 }}
//             transition={{ type: "spring", stiffness: 200, damping: 15 }}
//             className="p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 cursor-pointer"
//           >
//             {/* Stars */}
//             <div className="flex items-center gap-1">
//               {[...Array(testimonial.rating)].map((_, i) => (
//                 <svg
//                   key={i}
//                   width="16"
//                   height="15"
//                   viewBox="0 0 16 15"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
//                     fill="#5044E5"
//                   />
//                 </svg>
//               ))}
//             </div>

//             {/* Content */}
//             <p className="text-gray-500 text-sm my-5">
//               "{testimonial.content}"
//             </p>
//             <hr className="mb-5 border-gray-300" />

//             {/* Author */}
//             <div className="flex items-center gap-4">
//               <img
//                 src={testimonial.image}
//                 className="w-12 h-12 object-cover rounded-full"
//                 alt={testimonial.name}
//               />
//               <div className="text-sm text-gray-600">
//                 <h3 className="font-medium">{testimonial.name}</h3>
//                 <p className="text-xs text-gray-500">{testimonial.title}</p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonial;

import React from "react";
import { motion } from "framer-motion";

const Testimonial = () => {
  const dummyTestimonialData = [
    {
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
      name: "David Lee",
      title: "Content Writer, TechCorp",
      content:
        "NexaAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.",
      rating: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "John Doe",
      title: "Marketing Director, TechCorp",
      content:
        "NexaAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.",
      rating: 4,
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Jane Smith",
      title: "Content Creator, TechCorp",
      content:
        "NexaAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.",
      rating: 5,
    },
  ];

  // Animation variants for staggering
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="px-4 sm:px-20 xl:px-32 py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-slate-700 text-[42px] font-semibold">
          Loved by Creators
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Don't just take our word for it. Here's what our users are saying.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="flex flex-wrap mt-10 justify-center">
        {dummyTestimonialData.map((testimonial, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 cursor-pointer"
          >
            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
                    fill="#5044E5"
                  />
                </svg>
              ))}
            </div>

            {/* Content */}
            <p className="text-gray-500 text-sm my-5">
              "{testimonial.content}"
            </p>
            <hr className="mb-5 border-gray-300" />

            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                className="w-12 h-12 object-cover rounded-full"
                alt={testimonial.name}
              />
              <div className="text-sm text-gray-600">
                <h3 className="font-medium">{testimonial.name}</h3>
                <p className="text-xs text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
