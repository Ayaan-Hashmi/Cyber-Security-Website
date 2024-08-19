/*
Custom Templating & Page Generation by whirlxd ( whirlxd.xyz )
Example Object Structure:
const Page = {
  title: "Learning Form Validation in Web Development",
  url: "/form-validation",
  author: "Ayaan Hashmi",
  time: "7",
  body: content in markdown,
};
*/

import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { AnimationOnScroll } from "react-animation-on-scroll";

function InfoPage(props) {
  return (
    <div className="min-h-screen text-gray-800 bg-base-200">
      <div className="max-w-3xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <AnimationOnScroll animateIn="fadeInUp" animateOnce={true}>
          <h1 className="mb-4 text-3xl font-bold leading-tight text-center sm:text-4xl sm:leading-none">
            {props.title}
          </h1>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="fadeInDown" animateOnce={true}>
          <div className="mb-8 text-center text-gray-400">
            <span>
              By:{" "}
              <span className="font-semibold text-gray-500 underline">
                {props.author}
              </span>
            </span>

            <span className="mx-2">•</span>

            <span>{props.time} min read</span>
          </div>
        </AnimationOnScroll>
        <article className="mx-auto text-center text-ellipsis text-slate-300">
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={dark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {props.body}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}

export default InfoPage;
