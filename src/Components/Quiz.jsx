import React, { useState, useEffect, useRef } from "react";
import questions from "./questionBank";
import { AnimationOnScroll } from "react-animation-on-scroll";
import html2canvas from "html2canvas";
import downloadjs from "downloadjs";
// TODO : Handle certificate download
const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const canvasRef = useRef(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleBackQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setShowScore(false);
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "./cyber.jpg";
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      setImageLoaded(true);
    };
  }, []);
  const percentageScore = (score / questions.length) * 100;
  const downloadCertificate = async () => {
    const canvas = await html2canvas(canvasRef.current);
    const dataURL = canvas.toDataURL("image/jpg");
    downloadjs(dataURL, "certificate.png", "image/png");
  };
  return (
    <div className="min-h-screen bg-base-300">
      <div className="hero">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <div animateOnce={true} animateIn="zoomInDown">
              <h1 className="mt-10 text-3xl font-bold md:text-4xl lg:text-5xl">
                Quiz 🙋‍♂️
              </h1>
            </div>
            <div animateOnce={true} animateIn="slideInDown" delay={700}>
              <p className="py-6 ">
                take the quiz to find out how much you have learnt till now
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-4 ">
        {showScore ? (
          <div className="h-auto p-6 text-center rounded-lg shadow-lg bg-neutral">
            <h1 className="mb-4 text-2xl font-bold text-white">
              Your score: {score} / {questions.length}
            </h1>
            {percentageScore >= 70 ? (
              <>
                <p className="mt-5 mb-5 text-wrap">
                  Please take the quiz again to get the certificate
                </p>
                <button
                  onClick={handleRestartQuiz}
                  className="px-6 py-3 text-white bg-gray-800 rounded mt- hover:bg-gray-700"
                >
                  Restart Quiz
                </button>
              </>
            ) : (
              <>
                <h6 className="text-base text-wrap">
                  Congrats You passed the quiz with a score of {percentageScore}
                  %
                </h6>
                <h6 className="text-sm text-wrap">
                  and are eligible for the certificate!
                </h6>
                <button
                  className="w-full mt-5 btn btn-success btn-outline"
                  onClick={downloadCertificate}
                >
                  Download Certificate
                </button>
                <button
                  onClick={handleRestartQuiz}
                  className="w-full px-6 py-3 mt-2 text-white bg-gray-800 rounded hover:bg-gray-700"
                >
                  Redo Quiz
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="w-full max-w-md p-6 mb-10 rounded-lg shadow-lg bg-slate-800">
            <h1 className="mb-4 text-xl font-bold text-center md:text-2xl">
              {questions[currentQuestionIndex].question}
            </h1>
            <div className="flex flex-col space-y-2">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={`py-3 px-6 rounded border ${
                    selectedOption === option
                      ? "bg-blue-700 text-white scale-95 border border-blue-700"
                      : "bg-gray-200 text-gray-800"
                  } hover:bg-blue-700 hover:scale-105 transition duration-300 hover:text-white border-blue-700`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={handleBackQuestion}
                disabled={currentQuestionIndex === 0}
                className="px-6 py-3 text-white rounded bg-error hover:bg-gray-700 disabled:opacity-50 hover:scale-105 disabled:cursor-not-allowed"
              >
                Back
              </button>
              {currentQuestionIndex < questions.length - 1 ? (
                <button
                  onClick={handleNextQuestion}
                  disabled={selectedOption === null}
                  className="px-6 py-3 text-white rounded bg-success hover:bg-gray-700 disabled:opacity-50 hover:scale-105 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  disabled={selectedOption === null}
                  className="px-6 py-3 text-white rounded bg-success hover:bg-green-700 disabled:opacity-50 hover:scale-105 disabled:cursor-not-allowed"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
