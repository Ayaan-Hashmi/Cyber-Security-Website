// src/components/UniqueHeroSection.jsx
import React, { useState, Suspense, lazy } from "react";

import RotatingText from "./RotatingWord";
import { AnimationOnScroll } from "react-animation-on-scroll";
import cash from "../assets/cash.png";
import cashbag from "../assets/cashbag.png";
const AssetLoader = lazy(() => import("./assetLoader.jsx"));
import Globe from "./globe"; // importing globe with lazy loading
const UniqueHeroSection = () => {
  const [isTyping, setIsTyping] = useState(true);
  const toggleTyping = () => setIsTyping(!isTyping);

  return (
    <div class="bg-gradient-to-r from-green-500 via-blue-600 to-purple-700 text-white min-h-screen flex flex-col overflow-x-none">
      <div class="bg-gradient-to-r from-transparent via-black to-transparent flex-1 flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-16 py-12 md:py-24">
        <div class="text-center md:text-left max-w-lg">
          <div class="flex items-center justify-center md:justify-start space-x-2 mb-4">
            <div class="flex -space-x-2">
              <AnimationOnScroll animateIn="fadeInLeft">
                <img
                  class="w-10 h-10 rounded-full "
                  src={cashbag}
                  alt="Profile 1"
                />
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="fadeInLeft">
                <img
                  class="w-10 h-10 rounded-full "
                  src={cash}
                  alt="Profile 2"
                />
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="fadeInLeft">
                <img
                  class="w-10 h-10 rounded-full "
                  src={cash}
                  alt="Profile 3"
                />
              </AnimationOnScroll>
            </div>
            <AnimationOnScroll animateIn="fadeInLeft">
              <p class="text-md md:text-lg">10M+ $ stolen</p>
            </AnimationOnScroll>
          </div>
          <AnimationOnScroll animateIn="fadeInUp" animateOnce={true}>
            <h1 class="text-4xl md:text-6xl font-extrabold mb-2">
              As the Globe turns, Hackers earn
            </h1>
          </AnimationOnScroll>
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
          <AnimationOnScroll animateIn="fadeInLeft" animateOnce={true}>
            <p class="text-lg md:text-xl mb-8 mt-2  font-medium">
              In the time it took for you to land here, countless cyber threats
              have circled the globe. Every second, vulnerabilities put websites
              at risk. Learn how to fortify your defenses and ensure your
              digital presence remains unshakable.
            </p>
          </AnimationOnScroll>

          <div class="flex justify-center md:justify-start space-x-4">
            <a
              href="#vulnerabilities"
              class="py-3 px-6 bg-gray-800 hover:bg-gray-700 rounded"
            >
              Get Started
            </a>
            <a
              href="/cybersecurity"
              class="py-3 px-6 bg-gray-700 hover:bg-gray-600 rounded"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="justify-center hidden w-full mt-8 md:w-1/2 md:mt-0 lg:flex lg:justify-end">
          <Suspense fallback={<AssetLoader />}>
            <Globe />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default UniqueHeroSection;
