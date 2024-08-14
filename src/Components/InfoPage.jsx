import React from "react";

function InfoPage(props) {
  return (
    <div>
      <body class="bg-base-200 text-gray-800 min-h-screen">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 class="text-3xl sm:text-4xl font-bold text-center mb-4 leading-tight sm:leading-none">
            {props.title}
          </h1>

          <div class="text-center text-gray-400 mb-8">
            <span>
              By:{" "}
              <span class="text-gray-500 font-semibold underline">
                {props.author}
              </span>
            </span>
            <span class="mx-2">•</span>
            <span>{props.time} min read</span>
          </div>

          <article class="prose prose-lg sm:prose-xl mx-auto text-center text-slate-300 ">
            <p>{props.intro}</p>

            <p>{props.body}</p>

            <p>{props.conclusion}</p>
          </article>
        </div>
      </body>
    </div>
  );
}

export default InfoPage;
