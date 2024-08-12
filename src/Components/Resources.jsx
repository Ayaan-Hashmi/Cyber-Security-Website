import React, { useState, useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./team.css";
import Footer from "./Footer";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

function Team() {
  const [isLocked, setIsLocked] = useState(true);
  const [ip, setIP] = useState("");
  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");

    setIP(res.data.ip);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  const unlockSection = () => {
    const regex = new RegExp(
      `^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$`
    );
    const regName = /^[a-zA-Z]/;
    let userAnswers = "";

    MySwal.fire({
      title: <p>Fill the form to get access</p>,
      input: "text",
      icon: "info",
      inputLabel: "Your Name",
      showCancelButton: false,
      inputValue: "",
      inputValidator: (value) => {
        if (!regName.test(value)) {
          return "Please enter a valid name";
        }
      },
    }).then((result) => {
      const answer1 = result.value;
      MySwal.fire({
        title: <p>Please answer honestly</p>,
        input: "text",
        icon: "info",
        inputLabel: "Your Phone Number",
        showCancelButton: false,
        inputValue: "",
        inputValidator: (value) => {
          if (!regex.test(value)) {
            return "Please submit a valid phone number!";
          }
        },
      }).then((result) => {
        const answer2 = result.value;
        userAnswers += `
Whoa, ${answer1}!

You just shared some personal info for access to resources:

• Your Name: ${answer1}
• Your Phone Number: ${answer2}
• Your IP Address: ${ip} [which i was able to get when you visited this site and submitted the form]

Did you realize you gave all that away just by filling out a form?

A Friendly Heads-Up:

- Think twice before sharing your personal information online, especially for small perks or extras.
- Be cautious when downloading files from sources you don't trust.
- Remember, if a website isn't secure, your data might end up in the hands of third-party actors.
- Don't blindly trust website developers or forms asking for personal details.


Stay smart, stay safe, and keep your info secure!

This version should effectively communicate the risks while remaining engaging and user-friendly.`;
        console.log("User answers:", userAnswers);
        const blob = new Blob([userAnswers], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url; // Specify the file URL
        link.download = "extraresources.txt"; // Specify the filename
        link.click();
        setIsLocked(false);
      });
    });
  };
  return (
    <div className="relative">
      <div
        className={`${isLocked ? "blur-section" : ""} absolute inset-0 z-10`}
      >
        {isLocked && (
          <div className="bg-base-200">
            <div className="hero">
              <div className="text-center hero-content">
                <div className="max-w-md">
                  <AnimationOnScroll animateOnce={true} animateIn="zoomInDown">
                    <h1 className="mt-10 text-3xl font-bold md:text-4xl lg:text-5xl">
                      Resources++📕
                    </h1>
                  </AnimationOnScroll>
                  <AnimationOnScroll
                    animateOnce={true}
                    animateIn="slideInDown"
                    delay={200}
                  >
                    <p className="py-6 mb-5">
                      {/* rephrase to make it more proffesional and engaging */}
                      A collection of handcrafted and open source resources to
                      get your journey started
                    </p>
                  </AnimationOnScroll>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full lg:flex-row">
              <TeamMember
                name="Linux Foundation"
                avatar="https://github.com/whirlxd.png"
                title1="Learning "
                title2="Projects"
                github="https://training.linuxfoundation.org/"
                twitter="https://training.linuxfoundation.org/"
              ></TeamMember>

              <TeamMember
                name="TODO Group"
                avatar="https://github.com/whirl21.png"
                title1="Projects"
                title2="Learning"
                github="https://www.channelfutures.com/connectivity/todo-group-new-linux-foundation-project-spurs-open-source-adoption"
                twitter="https://www.linkedin.com/company/todosecurity/"
              ></TeamMember>

              <TeamMember
                name="HackTheBox"
                avatar="https://github.com/whirl21.png"
                title1="CTF"
                title2="Learning"
                github="https://www.hackthebox.com/"
                twitter="https://twitter.com/whirl_21"
              ></TeamMember>
            </div>

            <div className="flex flex-col justify-center w-full lg:flex-row">
              <TeamMember
                name="SEQUEL"
                avatar="https://github.com/shadowcodesyt.png"
                title1="Language"
                title2="Database"
                github="https://sequelpro.com/docs"
                twitter="https://twitter.com/shadowcodesyt"
              ></TeamMember>

              <TeamMember
                name="MDN Docs"
                avatar="https://github.com/whirl21.png"
                title1="Documentation"
                title2="Best Practices"
                github="https://developer.mozilla.org/en-US/"
                twitter="https://twitter.com/whirl_21"
              ></TeamMember>

              <TeamMember
                name="W3School"
                avatar="https://github.com/whirl21.png"
                title1="Documentation"
                title2="Learning"
                github="https://www.w3schools.com/"
                twitter="https://twitter.com/whirl_21"
              ></TeamMember>
            </div>

            <div className="flex flex-col justify-center w-full lg:flex-row">
              <TeamMember
                name="Kali Linux"
                avatar="https://github.com/shadowcodesyt.png"
                title1="OS"
                title2="Tools"
                github="https://www.kali.org/"
                twitter="https://twitter.com/shadowcodesyt"
              ></TeamMember>

              <TeamMember
                name="SSL Certificate Labs"
                avatar="https://github.com/whirl21.png"
                title1="Tools"
                title2="Service"
                github="https://zerossl.com/"
                twitter="https://twitter.com/whirl_21"
              ></TeamMember>

              <TeamMember
                name="Browser101"
                avatar="https://github.com/whirl21.png"
                title1="Tools"
                title2="Extension"
                github="https://www.youtube.com/playlist?list=PLTA92rkznIIM1RRqwz27X5xQhcB-BwqJl"
                twitter="https://twit"
              ></TeamMember>
            </div>
          </div>
        )}

        {!isLocked && (
          <>
            <div className="bg-base-200">
              <div className="hero">
                <div className="text-center hero-content">
                  <div className="max-w-md">
                    <AnimationOnScroll
                      animateOnce={true}
                      animateIn="zoomInDown"
                    >
                      <h1 className="mt-10 text-3xl font-bold md:text-4xl lg:text-5xl">
                        Resources++📕
                      </h1>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                      animateOnce={true}
                      animateIn="slideInDown"
                      delay={700}
                    >
                      <p className="py-6 mb-5 text-sm md:text-base">
                        A collection of handcrafted and Open Source resources to
                        get your journey started
                      </p>
                    </AnimationOnScroll>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center w-full lg:flex-row">
                <TeamMember
                  name="Linux Foundation"
                  avatar="https://github.com/whirlxd.png"
                  title1="Learning "
                  title2="Projects"
                  github="https://training.linuxfoundation.org/"
                  twitter="https://training.linuxfoundation.org/"
                ></TeamMember>

                <TeamMember
                  name="TODO Group"
                  avatar="https://github.com/whirl21.png"
                  title1="Projects"
                  title2="Learning"
                  github="https://www.channelfutures.com/connectivity/todo-group-new-linux-foundation-project-spurs-open-source-adoption"
                  twitter="https://www.linkedin.com/company/todosecurity/"
                ></TeamMember>

                <TeamMember
                  name="HackTheBox"
                  avatar="https://github.com/whirl21.png"
                  title1="CTF"
                  title2="Learning"
                  github="https://www.hackthebox.com/"
                  twitter="https://twitter.com/whirl_21"
                ></TeamMember>
              </div>

              <div className="flex flex-col justify-center w-full lg:flex-row">
                <TeamMember
                  name="SEQUEL"
                  avatar="https://github.com/shadowcodesyt.png"
                  title1="Language"
                  title2="Database"
                  github="https://sequelpro.com/docs"
                  twitter="https://twitter.com/shadowcodesyt"
                ></TeamMember>

                <TeamMember
                  name="MDN Docs"
                  avatar="https://github.com/whirl21.png"
                  title1="Documentation"
                  title2="Best Practices"
                  github="https://developer.mozilla.org/en-US/"
                  twitter="https://twitter.com/whirl_21"
                ></TeamMember>

                <TeamMember
                  name="W3School"
                  avatar="https://github.com/whirl21.png"
                  title1="Documentation"
                  title2="Learning"
                  github="https://www.w3schools.com/"
                  twitter="https://twitter.com/whirl_21"
                ></TeamMember>
              </div>

              <div className="flex flex-col justify-center w-full lg:flex-row">
                <TeamMember
                  name="Kali Linux"
                  avatar="https://github.com/shadowcodesyt.png"
                  title1="OS"
                  title2="Tools"
                  github="https://www.kali.org/"
                  twitter="https://twitter.com/shadowcodesyt"
                ></TeamMember>

                <TeamMember
                  name="SSL Certificate Labs"
                  avatar="https://github.com/whirl21.png"
                  title1="Tools"
                  title2="Service"
                  github="https://zerossl.com/"
                  twitter="https://twitter.com/whirl_21"
                ></TeamMember>

                <TeamMember
                  name="Browser101"
                  avatar="https://github.com/whirl21.png"
                  title1="Tools"
                  title2="Extension"
                  github="https://www.youtube.com/playlist?list=PLTA92rkznIIM1RRqwz27X5xQhcB-BwqJl"
                  twitter="https://twit"
                ></TeamMember>
              </div>
            </div>
            <Footer />
          </>
        )}
      </div>
      {isLocked && (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <button
            onClick={unlockSection}
            className="px-4 py-2 text-white bg-blue-500 rounded"
          >
            Unlock Resources 🔑
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <form id="f">
                <label className="flex items-center gap-2 input input-bordered">
                  <input type="text" className="grow" placeholder="Search" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
                <label className="flex items-center gap-2 input input-bordered">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input type="text" className="grow" placeholder="Email" />
                </label>
                <label className="flex items-center gap-2 input input-bordered">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input type="text" className="grow" placeholder="Username" />
                </label>
                <label className="flex items-center gap-2 input input-bordered">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input type="password" className="grow" value="password" />
                </label>
              </form>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      )}
    </div>
  );
}
function TeamMember(props) {
  return (
    <div class="group flex max-w-sm flex-col items-center rounded-lg bg-[#9713fb] p-4 shadow-lg md:flex-row  my-5 hover:-translate-y-2 transition mx-4 md:mx-auto ">
      <img
        class="mx-auto mb-4 h-24 w-24 rounded-lg md:mx-0 md:mb-0 md:mr-4"
        src="https://via.placeholder.com/150"
        alt="Profile Image"
      />

      <div class="mx-auto flex flex-col justify-center text-center">
        <h2 class="text-xl font-semibold group-hover:underline  transition-all duration-1000">
          {props.name}
        </h2>

        <p class="text-green-500 italic group-hover:not-italic group-hover:font-bold">
          {props.title1} & {props.title2}
        </p>

        <p class="mt-1 text-slate-300">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime.
        </p>
      </div>
    </div>
  );
}

export default Team;
