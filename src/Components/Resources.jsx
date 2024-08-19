import React, { useState, useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "../styles/team.css";
import Footer from "./Footer";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Quiz from "./Quiz";
const MySwal = withReactContent(Swal);

function Team() {
  const [isLocked, setIsLocked] = useState(true);
  const [ip, setIP] = useState("");
  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");

    setIP(res.data.ip);
  };

  useEffect(() => {
    getData();
  }, []);

  const unlockSection = () => {
    const regex = new RegExp(
      `^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$`
    );
    const regName = /^[a-zA-Z]/;
    let userAnswers = "";

    MySwal.fire({
      title: <p>Fill the form to get access to exclusive content</p>,
      input: "text",
      icon: "info",
      inputLabel: "Your Name",
      allowOutsideClick: false,
      allowEscapeKey: false,

      inputValue: "",
      inputValidator: (value) => {
        if (!regName.test(value)) {
          return "Please enter a valid name";
        }
      },
    }).then((result) => {
      const answer1 = result.value;

      localStorage.setItem("name", answer1);
      MySwal.fire({
        title: <p>Please answer honestly</p>,
        input: "text",
        icon: "info",
        inputLabel: "Your Phone Number",
        showCancelButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        inputValue: "",
        inputValidator: (value) => {
          if (!regex.test(value)) {
            return "Please submit a valid phone number!";
          }
        },
      }).then((result) => {
        // fire the final alert telling user to download the file
        Swal.fire({
          title: "Heads-Up!",
          text: "Looks like a file just landed on your system. Curious? Go ahead, take a look!",
          icon: "info",
          showCancelButton: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
          confirmButtonText: "Okay",
        }).then(() => {
          const answer2 = result.value;
          userAnswers += `
        Whoa, ${answer1}!

        You just shared some personal info for access to the 'Exclusive Content':

        - Your Name: ${answer1}
        - Your Phone Number: ${answer2}
        - Your IP Address: ${ip} (Which we were able to get when you visited this site and submitted the form)

        Did you realize you gave all that away just by filling out a form?

        A Friendly Heads-Up:

        - Think twice before sharing your personal information online, especially for small perks or extras.
        - Be cautious when downloading files from sources you don't trust.
        - Remember, if a website isn't secure, your data might end up in the hands of third-party actors.
        - Don't blindly trust website developers or forms asking for personal details.


        Stay smart, stay safe, and keep your info secure!`;
          
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
    });
  };
  return (
    <div className="relative">
      <div
        className={`${isLocked ? "blur-section" : ""} absolute inset-0 z-10`}
      >
        {isLocked && <Resource />}

        {!isLocked && (
          <>
            <Resource />

            <section id="quiz">
              <Quiz />
            </section>

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
            Unlock Access 🔓
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
  const [target, setTarget] = useState("_blank");

  useEffect(() => {
    if (props.github === "/#quiz") {
      setTarget("_self");
    }
  }, [props.github]);
  return (
    <>
      <a
        href={props.github}
        target={target}
        aria-label={props.name}
        class="group flex max-w-sm flex-col items-center rounded-lg bg-[#9713fb] cursor-grab p-4 shadow-lg md:flex-row  my-5 hover:-translate-y-2 transition mx-4 md:mx-auto "
      >
        <img
          class="mx-auto mb-4 h-24 w-24 rounded-lg md:mx-0 md:mb-0 md:mr-4"
          src={props.avatar}
          alt="Profile Image"
        />

        <div class="mx-auto flex flex-col justify-center text-center">
          <h2 class="text-xl font-semibold group-hover:underline  transition-all duration-1000">
            {props.name}
          </h2>

          <p class="text-green-500 italic group-hover:not-italic group-hover:font-bold">
            {props.title1} & {props.title2}
          </p>

          <p class="mt-1 text-slate-300">{props.desc}</p>
        </div>
      </a>
    </>
  );
}

function Resource() {
  return (
    <div>
      <div className="bg-base-200">
        <div className="hero">
          <div className="text-center hero-content">
            <div className="max-w-md">
              <AnimationOnScroll animateOnce={true} animateIn="fadeInUp">
                <h1 className="mt-10 text-3xl font-bold md:text-4xl lg:text-5xl">
                  Resources++📕
                </h1>
                <p className="py-6 mb-5">
                  A collection of handcrafted and open source resources to get
                  your journey started
                </p>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full lg:flex-row">
          <TeamMember
            name="Exclusive Quiz"
            avatar="https://d1ymz67w5raq8g.cloudfront.net/Pictures/480xany/6/5/5/509655_shutterstock_1506580442_769367.jpg"
            title1="Testing "
            title2="Quiz"
            github="/#quiz"
            desc="Test your abilities with this exclusive quiz with a certificate of completion"
          ></TeamMember>

          <TeamMember
            name="Net Craft"
            avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCWP-IL9zURSLbtNBLLnq_Sz6Y9WQkcQxorQ&s"
            title1="Safety"
            title2="Extensions"
            github="https://www.netcraft.com/"
            desc="A Super handy browser extension to check the safety of the websites you visit"
          ></TeamMember>

          <TeamMember
            name="Zero SSL"
            avatar="https://pbs.twimg.com/profile_images/1256353356446076929/k7PBvuSe_400x400.jpg"
            title1="Security"
            title2="Tools"
            github="https://zerossl.com/"
            desc="A  tool which helps you generate SSL certificate for your website"
          ></TeamMember>
        </div>

        <div className="flex flex-col justify-center w-full lg:flex-row">
          <TeamMember
            name="Have I Been Pwned"
            avatar="https://haveibeenpwned.com/Content/Images/SocialLogo.png"
            title1="Security"
            title2="Tools"
            github="https://haveibeenpwned.com/"
            desc="The website to check if your data has been compromised in a breach"
          ></TeamMember>

          <TeamMember
            name="Virus Total"
            avatar="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6c51b7ce-37c6-46e8-8a60-f77282a66f9c/dfq0c21-66386d21-3b27-47e7-808d-c9c03248549b.png/v1/fill/w_225,h_225,q_80,strp/virustotal_icon_by_effuuuuuuuu_dfq0c21-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjI1IiwicGF0aCI6IlwvZlwvNmM1MWI3Y2UtMzdjNi00NmU4LThhNjAtZjc3MjgyYTY2ZjljXC9kZnEwYzIxLTY2Mzg2ZDIxLTNiMjctNDdlNy04MDhkLWM5YzAzMjQ4NTQ5Yi5wbmciLCJ3aWR0aCI6Ijw9MjI1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.M4bCVAvV4BtY_-lVY9FMGwutv9KCXucRGkwOthvhBMc"
            title1="Safety"
            title2="Best Practices"
            github="https://developer.mozilla.org/en-US/"
            desc="A website to check the contents of a file for malware before downloading"
          ></TeamMember>

          <TeamMember
            name="Sherlock"
            avatar="https://www.kali.org/tools/sherlock/images/sherlock-logo.svg"
            title1="Research"
            title2="Tools"
            github="https://www.w3schools.com/"
            desc="A tool to find social media accounts by username across the internet"
          ></TeamMember>
        </div>

        <div className="flex flex-col justify-center w-full lg:flex-row">
          <TeamMember
            name="Kali Linux"
            avatar="https://img-c.udemycdn.com/course/750x422/4142968_8c8d_3.jpg"
            title1="OS"
            title2="Tools"
            github="https://www.kali.org/"
            desc="A Linux distribution designed for hacking and penetration testing"
          ></TeamMember>

          <TeamMember
            name="ADGuard DNS"
            avatar="https://w7.pngwing.com/pngs/889/893/png-transparent-adguard-thumbnail.png"
            title1="Adblock"
            title2="DNS"
            github="https://zerossl.com/"
            desc="A free DNS service that blocks ads, trackers, and malware"
          ></TeamMember>

          <TeamMember
            name="MDN Web Docs"
            avatar="https://static.vecteezy.com/system/resources/previews/009/122/447/non_2x/mdn-logo-mdn-letter-mdn-letter-logo-design-initials-mdn-logo-linked-with-circle-and-uppercase-monogram-logo-mdn-typography-for-technology-business-and-real-estate-brand-vector.jpg"
            title1="Documentation"
            title2="Learning"
            github="https://www.youtube.com/playlist?list=PLTA92rkznIIM1RRqwz27X5xQhcB-BwqJl"
            desc="The best place to learn web development and how to secure your websites "
          ></TeamMember>
        </div>
      </div>
    </div>
  );
}
export default Team;
