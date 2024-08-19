import React, { useState, useEffect } from "react";
const RotatingWords = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [words]);

  return (
    <div className="flex flex-wrap justify-center space-x-4">
      <div animateIn="fadeIn" animateOnce={true} delay={900}>
        {words.map((word, index) => (
          <span
            key={index}
            className={` text-[#00ff00] transition-opacity duration-60 ${
              index === currentWordIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RotatingWords;
