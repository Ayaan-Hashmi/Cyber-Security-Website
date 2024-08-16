import React from "react";

import { AnimationOnScroll } from "react-animation-on-scroll";
import cm from "../assets/vxss.png";
import dm from "../assets/sxss.png";
import sp from "../assets/sapi.png";
import vp from "../assets/vapi.png";
import sq from "../assets/ssql.png";
import dq from "../assets/vsql.png";
import vl from "../assets/vlfi.png";
import sl from "../assets/slfi.png";
function BestPractices() {
  return (
    <div className="bg-base-100">
      <div className="hero">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <AnimationOnScroll animateOnce={true} animateIn="zoomInDown">
              <h1 className="mt-10 text-3xl font-bold md:text-4xl lg:text-5xl">
                /Best Practices/ 🧑‍💻
              </h1>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={true}
              animateIn="slideInDown"
              delay={700}
            >
              <p className="py-6 mb-5">
                Now that we have learned about common methods hackers use to
                access you content . Lets learn how to protect ourselves
              </p>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full lg:flex-row">
        <AnimationOnScroll animateOnce={true} animateIn="rotateInDownLeft">
          <TeamMember
            src1={dm}
            src2={cm}
            name="Cross Site Scripting"
            description="Learn Code Sanitization "
            link="https://www.techtarget.com/searchsecurity/definition/cyber-hygiene"
          ></TeamMember>
        </AnimationOnScroll>
        <AnimationOnScroll animateOnce={true} animateIn="rotateInDownRight">
          <TeamMember
            src2={vp}
            src1={sp}
            name="Key handling"
            description="Learn about .ENV"
            link="https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa"
          ></TeamMember>
        </AnimationOnScroll>
      </div>
      <br></br>
      <div className="flex flex-col justify-center w-full lg:flex-row">
        <AnimationOnScroll animateOnce={true} animateIn="rotateInUpRight">
          <TeamMember
            src1={sq}
            src2={dq}
            name="SQL Injection"
            description="Learn Form Validation"
            link="/form-validation"
          ></TeamMember>
        </AnimationOnScroll>
        <AnimationOnScroll animateOnce={true} animateIn="rotateInUpLeft">
          <TeamMember
            src2={vl}
            src1={sl}
            name="Preventing LFI"
            description="Learn about File Input"
            link="https://dev.to/joannaotmianowska/the-simplest-way-to-validate-file-input-type-1dm9"
          ></TeamMember>
        </AnimationOnScroll>
      </div>
      <br></br>
    </div>
  );
}
function TeamMember(props) {
  return (
    <div
      id="component-demo"
      className="flex flex-col items-center gap-4 px-4 pt-1 pb-10 overflow-x-scroll overflow-y-hidden sm:px-6 md:px-8 lg:px-10 xl:grid xl:overflow-x-auto xl:px-4"
    >
      <div className="diff aspect-[16/9] h-48 w-full sm:h-56 sm:w-3/4 md:h-64 md:w-2/3 lg:h-72 lg:w-1/2 xl:h-80 xl:w-96 rounded-box">
        <div className="diff-item-1">
          <div className="text-center">
            <img
              src={props.src1}
              className="object-cover w-full h-full"
              alt="whirl"
            />
          </div>
        </div>
        <div className="diff-item-2">
          <img
            src={props.src2}
            className="object-cover w-full h-full"
            alt="linuxgem"
          />
        </div>
        <div className="diff-resizer"></div>
      </div>
      <p className="text-xl font-bold text-center sm:text-2xl">{props.name}</p>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className=" btn btn-outline btn-accent hover:underline"
      >
        {props.description}
      </a>
    </div>
  );
}

export default BestPractices;
