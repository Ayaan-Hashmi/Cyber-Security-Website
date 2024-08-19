import React, { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Faq() {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="hero">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <AnimationOnScroll animateOnce={true} animateIn="fadeInUp">
              <h1 className="mt-10 text-3xl font-bold md:text-4xl lg:text-5xl">
                HTTP(S) 🔒
              </h1>
              <p className="py-6 mb-5">
                what is the main difference between these 2 and why is it
                important
              </p>
            </AnimationOnScroll>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center w-full sm:flex-row md:flex-row lg:flex-row md:items-center lg:items-center">
        <div animateOnce={true} animateIn="lightSpeedInLeft">
          <FaqCard
            question="What is HTTP"
            answer="HTTP (Hypertext Transfer Protocol) is ..."
            longdesc="HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the web. It defines how messages are formatted and transmitted, and how web servers and browsers should respond to various commands. It operates at the application layer and uses a request-response model where a client sends a request to a server, and the server sends back the requested information."
          />
        </div>
        <div className="items-center justify-center hidden h-screen mx-auto sm:flex md:flex lg:flex divider lg:divider-horizontal"></div>

        <div animateOnce={true} animateIn="lightSpeedInRight">
          <FaqCard
            question="What is HTTPS?"
            answer="HTTPS (Hypertext Transfer Protocol Secu..."
            longdesc="HTTPS (Hypertext Transfer Protocol Secure) is an extension of HTTP designed to secure data communication over a computer network. It uses SSL/TLS protocols to encrypt the data exchanged between the client and server. This encryption ensures that sensitive information such as login credentials, credit card details, and personal data are protected from eavesdroppers and attackers during transmission."
          />
        </div>
      </div>

      <div className="flex flex-col items-start justify-center w-full sm:flex-row md:flex-row lg:flex-row md:items-center lg:items-center">
        <div animateOnce={true} animateIn="lightSpeedInLeft">
          <FaqCard
            question="How does HTTPS improve security?"
            answer="HTTPS improves security by encrypting ..."
            longdesc="HTTPS improves security by encrypting data sent between a user's browser and the website server, making it difficult for third parties to intercept or tamper with the data. This encryption is achieved through SSL/TLS protocols, which provide confidentiality, integrity, and authentication. Confidentiality ensures that only the intended recipient can read the data. Integrity ensures that the data has not been altered. Authentication verifies the identity of the website, ensuring users are communicating with the intended site."
          />
        </div>

        <div className="items-center justify-center hidden h-screen mx-auto sm:flex md:flex lg:flex divider lg:divider-horizontal"></div>
        <div animateOnce={true} animateIn="lightSpeedInRight">
          <FaqCard
            question="Why is HTTPS important for websites?"
            answer="HTTPS is crucial for several reasons I... "
            longdesc="HTTPS is crucial for several reasons. It protects user data from being intercepted by hackers, thereby ensuring privacy and security. It also builds trust with users, as they can see their data is secure. Furthermore, modern web browsers mark non-HTTPS sites as *Not Secure,* which can deter users. HTTPS is also a factor in search engine rankings, with search engines like Google favoring secure sites. Lastly, it is required for accessing new browser features and APIs."
          />
        </div>
      </div>

      <div className="flex flex-col items-start justify-center w-full sm:flex-row md:flex-row lg:flex-row md:items-center lg:items-center ">
        <div animateOnce={true} animateIn="lightSpeedInLeft">
          <FaqCard
            question="How can you tell if a website uses HTTPS?"
            answer="To determine if a website uses HTTPS l..."
            className=""
            longdesc="To determine if a website uses HTTPS, look at the URL in the browser's address bar. If the URL starts with *https://* instead of *http://*, the site is using HTTPS. Additionally, most browsers display a padlock icon next to the URL, indicating a secure connection. Some browsers may also show warnings if a site is not secure, highlighting the importance of using HTTPS."
          />
        </div>

        <div className="items-center justify-center hidden h-screen mx-auto sm:flex md:flex lg:flex divider lg:divider-horizontal"></div>
        <div animateOnce={true} animateIn="lightSpeedInRight">
          <FaqCard
            question="How much do HTTPS certificates cost?"
            answer="The cost of HTTPS certificates can vary..."
            className="flex flex-col justify-center mx-auto"
            longdesc="The cost of HTTPS certificates can vary widely. Some certificate authorities (CAs) offer free certificates, like Let's Encrypt, which provide basic SSL/TLS encryption. Other CAs offer paid certificates that can range from $10 to several hundred dollars per year, depending on the level of validation (Domain Validation, Organization Validation, Extended Validation) and additional features like warranty, customer support, and site seals."
          />
        </div>
      </div>

      <AnimationOnScroll animateOnce={true} animateIn="zoomInUp" offset={50}>
        <a
          href="/https"
          target="_blank"
          className="flex flex-col justify-center mx-auto mt-12 transition-transform duration-150 btn btn-primary btn-wide hover:translate-y-2"
        >
          [ Learn More ]
        </a>
      </AnimationOnScroll>
    </div>
  );
}

function FaqCard(props) {
  const applyBlur = () => {
    document.body.style.filter = "blur(10px)";
  };

  const removeBlur = () => {
    document.body.style.filter = "none";
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    document.getElementById(props.question).showModal();
    setIsModalOpen(true);
    applyBlur();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    removeBlur();
    document.getElementById(props.question).close();
  };
  return (
    <div>
      <div className={isModalOpen ? "blur-background" : ""}>
        <div onClick={openModal}>
          {/* modal start */}
          <dialog
            id={props.question}
            className="transition delay-75 modal modal-bottom sm:modal-middle"
            open={isModalOpen}
            onClose={closeModal}
          >
            <div className="w-full max-w-lg p-5 mx-auto ease-in-out delay-75 bg-transparent rounded-lg modal-box ">
              <div className="w-full overflow-x-hidden mockup-code h-45 text-balance">
                <pre data-prefix="$:" className="text-warning">
                  <code>{props.question}</code>
                </pre>
                <pre data-prefix=">:" className="text-success">
                  <div className="text-center text-pretty">
                    <code>{props.longdesc}</code>
                  </div>
                </pre>
              </div>
            </div>

            <form method="dialog" className="modal-backdrop">
              <button onClick={closeModal} className="">
                close
              </button>
            </form>
          </dialog>
          <AnimationOnScroll animateIn="slideInUp" animateOnce={true}>
            <div
              onClick={openModal}
              className="max-w-sm mb-3 overflow-auto transition duration-100 cursor-pointer md:mx-auto mockup-code text-balance md:max-w-md hover:shadow-xl hover:scale-105"
            >
              <pre data-prefix="$:" className="text-warning">
                <code>{props.question}</code>
              </pre>
              <pre data-prefix=">:" className="text-success text-clip">
                <code>{props.answer}</code>
              </pre>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
}

export default Faq;
