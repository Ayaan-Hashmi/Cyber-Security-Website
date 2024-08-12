// src/components/UniqueHeroSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import RotatingText from "./RotatingWord";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Globe from "./globe";
const UniqueHeroSection = () => {
  const [isTyping, setIsTyping] = useState(true);
  const toggleTyping = () => setIsTyping(!isTyping);

  return (
    <div class="bg-gradient-to-r from-green-500 via-blue-600 to-purple-700 text-white min-h-screen flex flex-col overflow-x-none">
      <div class="bg-gradient-to-r from-transparent via-black to-transparent flex-1 flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-16 py-12 md:py-24">
        <div class="text-center md:text-left max-w-lg">
          <div class="flex items-center justify-center md:justify-start space-x-2 mb-4">
            <div class="flex -space-x-2">
              <img
                class="w-10 h-10 rounded-full border-2 border-white"
                src="https://via.placeholder.com/40"
                alt="Profile 1"
              />
              <img
                class="w-10 h-10 rounded-full border-2 border-white"
                src="https://via.placeholder.com/40"
                alt="Profile 2"
              />
              <img
                class="w-10 h-10 rounded-full border-2 border-white"
                src="https://via.placeholder.com/40"
                alt="Profile 3"
              />
            </div>
            <p class="text-sm">10m+ $ stolen</p>
          </div>

          <h1 class="text-4xl md:text-6xl font-extrabold mb-2">
            As the Globe turns, Hackers earn
          </h1>
          <RotatingText
            className=""
            words={[
              "HTTPS",
              "XSS",
              "SQL Injection",
              "CSRF",
              "DDoS",
              "Malware",
              "Ransomware",
            ]}
          />
          <p class="text-lg md:text-xl mb-8 mt-2  font-semibold">
            In the time it took for you to land here, countless cyber threats
            have circled the globe. Every second, vulnerabilities put websites
            at risk. Learn how to fortify your defenses and ensure your digital
            presence remains unshakable.
          </p>

          <div class="flex justify-center md:justify-start space-x-4">
            <button class="py-3 px-6 bg-gray-800 hover:bg-gray-700 rounded">
              Learn More
            </button>
            <button class="py-3 px-6 bg-gray-700 hover:bg-gray-600 rounded">
              Take the Quiz
            </button>
          </div>
        </div>

        <div class="w-full md:w-1/2 mt-8 md:mt-0 hidden  md:flex justify-center md:justify-end ">
          <Globe className="" />
        </div>
      </div>
    </div>
  );
};

export default UniqueHeroSection;

//  <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-transparent"></div>
//       <div className="relative z-10 text-center">
//         <AnimationOnScroll animateOnce={true} animateIn="zoomInDown">
//           <motion.h1
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//             className={`text-5xl font-bold text-white ${
//               isTyping ? "typewriter" : ""
//             }`}
//           >
//             Cyber Security 101
//           </motion.h1>
//         </AnimationOnScroll>

//         <br></br>
//         <RotatingText
//           words={["HTTPS", "XSS", "SQL Injection", "CSRF", "DDoS", "Malware"]}
//         />
//         <br></br>
//         <AnimationOnScroll animateOnce="true" animateIn="slideInUp" delay={700}>
//           <p className="text-xl text-white text-balance">
//             Dive into the fundamentals of web cyber security with our
//             easy-to-follow guide. Learn how to safeguard your online presence
//             and prevent cyber threats.
//           </p>
//         </AnimationOnScroll>
//         <AnimationOnScroll animateOnce="true" animateIn="slideInUp" delay={800}>
//           <div className="mt-8">
//             <a
//               href="#features"
//               className="inline-flex items-center w-48 h-12 px-4 py-2 text-sm font-medium text-center text-white bg-indigo-600 border border-transparent rounded-md text-pretty hover:bg-indigo-800 "
//             >
//               <p className="ml-8 bold">Get Started</p>
//             </a>
//           </div>
//         </AnimationOnScroll>

//       </div>
//     </section>
