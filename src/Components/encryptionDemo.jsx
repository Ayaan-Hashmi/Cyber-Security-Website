import React, { useState } from "react";

function encryptionDemo() {
  const [inputValue, setInputValue] = useState("");
  const [keyValue, setKeyValue] = useState("");
  const [showCipherText, setShowCipherText] = useState(true);
  const [cipherValue, setCipherValue] = useState("");
  const [progress, setProgress] = useState(0);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    updateProgress(e.target.value, keyValue);
  };

  const handleKeyChange = (e) => {
    setKeyValue(e.target.value);
    updateProgress(inputValue, e.target.value);
  };
  function generateKey(str, key) {
    key = key.split("");
    if (str.length == key.length) return key.join("");
    else {
      let temp = key.length;
      for (let i = 0; i < str.length - temp; i++) {
        key.push(key[i % key.length]);
      }
    }
    return key.join("");
  }

  function cipherText(str, key) {
    let cipher_text = "";

    for (let i = 0; i < str.length; i++) {
      // converting in range 0-25
      let x = (str[i].charCodeAt(0) + key[i].charCodeAt(0)) % 26;

      // convert into alphabets(ASCII)
      x += "A".charCodeAt(0);

      cipher_text += String.fromCharCode(x);
    }
    return cipher_text;
  }

  function originalText(cipher_text, key) {
    let orig_text = "";

    for (let i = 0; i < cipher_text.length; i++) {
      // converting in range 0-25
      let x = (cipher_text[i].charCodeAt(0) - key[i].charCodeAt(0) + 26) % 26;

      // convert into alphabets(ASCII)
      x += "A".charCodeAt(0);
      orig_text += String.fromCharCode(x);
    }
    return orig_text;
  }

  function LowerToUpper(s) {
    let str = s.split("");
    for (let i = 0; i < s.length; i++) {
      if (s[i] == s[i].toLowerCase()) {
        str[i] = s[i].toUpperCase();
      }
    }
    s = str.toString();
    return s;
  }
  const updateProgress = (input, key) => {
    let progress = 0;
    if (input) progress += 1;
    if (key) progress += 1;
    setProgress(progress);
  };
  const handleSubmit = () => {
    let text = inputValue;
    let key = keyValue;
    let balls;
    if (text.length == 0 || key.length == 0) {
      alert("Please enter text and key");
      return;
    }

    key = generateKey(text, key);
    balls = cipherText(LowerToUpper(text), LowerToUpper(key));
    console.log(balls);

    setCipherValue(balls);
    setShowCipherText(false);
  };

  return (
    <div>
      <div className="min-h-screen p-8 bg-base-100">
        <h1 className="text-3xl font-bold text-center md:text-4xl lg:text-5xl">
          Encryption 🗝️
        </h1>
        <p className="py-6 mb-5 text-center">
          Learn about encryption and why it's important with a demo
        </p>
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
          <div className="justify-center space-y-8 text-center md:text-left lg:w-1/2">
            <div className="mb-10">
              <h2 className="mb-4 text-3xl font-bold">Encryption/what</h2>
              {/* What is encryption a long summary*/}
              <p className="text-balance">
                Encryption is the process of converting information or data into
                a code, especially to prevent unauthorized access. It helps
                protect sensitive data, personal information, and can help
                secure communication between devices. Encryption is a key
                component of cybersecurity and is used to secure data in transit
                and at rest.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold">Encryption/why</h2>
              <p className="text-balance">
                Encryption is the process of converting information or data into
                a code, especially to prevent unauthorized access. It helps
                protect sensitive data, personal information, and can help
                secure communication between devices.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold">Encryption/when</h2>
              <p className="text-balance">
                Encryption is the process of converting information or data into
                a code, especially to prevent unauthorized access. It helps
                protect sensitive data, personal information, and can help
                secure communication between devices.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-8 lg:w-1/2">
            <ul className="steps">
              <li className={`step ${progress > 0 ? "step-primary" : ""}`}>
                🗝️
              </li>
              <li className={`step ${progress > 1 ? "step-primary" : ""}`}>
                🔒
              </li>
              <li className={`step ${showCipherText ? "" : "step-primary"}`}>
                🔐
              </li>
            </ul>

            <div className="w-full max-w-lg mx-auto form-control ">
              <label className="label">
                <span className="text-gray-300 label-text">
                  Text to Encrypt
                </span>
              </label>
              <input
                type="text"
                placeholder="Eg: Hello, World!"
                value={inputValue}
                onChange={handleInputChange}
                className="w-full max-w-lg text-gray-100 bg-gray-800 input input-bordered"
              />
            </div>
            <div className="w-full max-w-lg mx-auto form-control ">
              <label className="label">
                <span className="text-gray-300 label-text">Key To Encrypt</span>
              </label>
              <input
                type="text"
                placeholder="Eg: YAGDGGD"
                value={keyValue}
                onChange={handleKeyChange}
                className="w-full max-w-lg text-gray-100 bg-gray-800 input input-bordered"
              />
              <label className="flex justify-between label">
                <span className="text-gray-500 label-text-alt">
                  Click here to encrypt
                </span>
                <button
                  className="text-gray-400 bg-gray-800 btn btn-square btn-sm hover:bg-gray-700"
                  onClick={handleSubmit}
                >
                  -{">"}
                </button>
              </label>
            </div>
            <div className="w-full max-w-lg mx-auto form-control">
              <label className="label">
                <span
                  className="text-gray-300 label-text"
                  hidden={showCipherText}
                >
                  Encrypted Text:
                </span>
              </label>
              <input
                type="text"
                placeholder="Eg: YAGDGGD"
                value={cipherValue}
                hidden={showCipherText}
                disabled={true}
                className="w-full max-w-lg mb-10 text-gray-100 bg-gray-800 input input-bordered"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default encryptionDemo;
