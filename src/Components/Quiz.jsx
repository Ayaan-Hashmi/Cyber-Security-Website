import React, { useState, useRef } from "react";
import questions from "./questionBank";
import { AnimationOnScroll } from "react-animation-on-scroll";
import html2canvas from "html2canvas-pro";
import msnLogo from "../assets/msn-logo.png";
const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userName, setUserName] = useState(
    localStorage.getItem("name") || "Anonymous"
  );

  const certificateRef = useRef();

  const downloadCertificate = async () => {
    if (certificateRef.current === null) {
      return;
    }

    try {
      const canvas = await html2canvas(certificateRef.current, {
        useCORS: true,
        allowTaint: false,
      });
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "certificate.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Failed to download certificate:", error);
    }
  };
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
  const percentageScore = (score / questions.length) * 100;
  return (
    <div className="min-h-screen bg-base-300">
      <div className="hero">
        <div
          ref={certificateRef}
          style={{
            position: "absolute",
            top: "-9999px",
            left: "-9999px",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              width: "800px",
              padding: "20px",
              borderTop: "10px solid #e0aa00",
              borderBottom: "10px solid #e0aa00",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              fontFamily: "Arial, sans-serif",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src={msnLogo}
                alt="Mayoor School Logo"
                style={{ height: "100px", marginRight: "20px" }}
              />
              <div style={{ textAlign: "left" }}></div>
            </div>

            <div
              style={{
                backgroundColor: "#2a2d56",
                color: "#fff",
                padding: "10px 0",
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              <p>Completion of Cyber Sec. Quiz</p>
            </div>

            <div style={{ fontSize: "18px", margin: "0", color: "#000000" }}>
              <p>This certificate is awarded to</p>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  margin: "20px 0",
                  borderBottom: "2px solid #000",
                  display: "inline-block",
                  width: "300px",
                  paddingBottom: "5px",
                  color: "#000000",
                }}
              >
                {userName}
              </div>
            </div>

            <div
              style={{ fontSize: "16px", margin: "20px 0", color: "#000000" }}
            >
              <p>IN APPRECIATION OF YOUR SKILLSET</p>
              <p>
                <strong>AT THE CYBER SEC 101 SITE</strong>
              </p>
              <p>DEVELOPED BY MAYOOR TEAM</p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "50px",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    margin: "0",
                    color: "#000000",
                  }}
                >
                  Medhansh
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    margin: "5px 0 0 0",
                    textTransform: "uppercase",
                    color: "#000000",
                  }}
                >
                  DEVELOPER
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    margin: "0",
                    color: "#000000",
                  }}
                >
                  Ayaan
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    margin: "5px 0 0 0",
                    textTransform: "uppercase",
                    color: "#000000",
                  }}
                >
                  DEVELOPER
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center hero-content">
          <div className="max-w-md">
            <AnimationOnScroll animateOnce={true} animateIn="fadeInUp">
              <h1 className="mt-10 text-3xl font-bold md:text-4xl lg:text-5xl">
                Quiz 🙋‍♂️
              </h1>

              <p className="py-6 ">
                take the quiz to find out how much you have learnt till now
              </p>
            </AnimationOnScroll>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-4 ">
        {showScore ? (
          <div className="h-auto p-6 text-center rounded-lg shadow-lg bg-neutral">
            <h1 className="mb-4 text-2xl font-bold text-white">
              Your score: {score} / {questions.length}
            </h1>
            {percentageScore <= 70 ? (
              <>
                <p className="mt-5 mb-5 text-wrap">
                  Please pass the quiz again with 70% or more to get the
                  certificate
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
