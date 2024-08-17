import React, { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Features() {
  // Rest of your component...

  return (
    <>
      <div className="hero bg-base-100 ">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <div animateOnce={true} animateIn="zoomInDown">
              <h1 className="mt-10 mb-10 text-5xl font-bold ">
                [ Vulnerbilities ]
              </h1>
            </div>
            <div animateOnce={true} animateIn="slideInDown" delay={700}>
              <p className="mb-5 py-">The way hackers exploit your website</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col justify-center w-full lg:flex lg:flex-row sm:carousel">
        <div animateOnce={true} animateIn="zoomInLeft">
          <FeatureCardd
            title="XSS Attacks"
            desc="Inject malicious scripts into web apps, exploiting vulnerabilities to steal data or hijack sessions.
"
            longdesc="Cross-site scripting (XSS) is a type of security vulnerability typically found in web applications. XSS attacks enable attackers to inject client-side scripts into web pages viewed by other users. A cross-site scripting vulnerability may be used by attackers to bypass access controls such as the same-origin policy. "
            previewImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Q2Bpmok5hiUQ29D3OTkJshFD5uBIc7t7y1SHddhlfUt8runH11nqEXFCubgjR7-vMVE&usqp=CAU"
          />
        </div>

        <div className="mx-auto divider lg:divider-horizontal"></div>

        <div animateOnce={true} animateIn="zoomIn">
          <FeatureCardd
            title="SQL INJECTION"
            desc="Compromise databases via unauthorized queries, enabling data manipulation or exposure."
            longdesc="SQL Injection (SQLi) is a type of security vulnerability typically found in web applications that interact with databases. SQLi attacks enable attackers to execute arbitrary SQL queries within the database used by the application. An SQL injection vulnerability may be used by attackers to bypass authentication, extract sensitive data, modify or delete records, and perform administrative operations on the database."
            previewImage="https://t4.ftcdn.net/jpg/02/32/33/37/360_F_232333735_VB5UjyqrqxO9OQWeeiRiRzYvyd9iJY2f.jpg"
          />
        </div>
        <div className="mx-auto divider lg:divider-horizontal"></div>
        <div animateOnce={true} animateIn="zoomInRight">
          <FeatureCardd
            title="LFI/RFI"
            longdesc="Local File Inclusion (LFI) / Remote File Inclusion (RFI) are types of security vulnerabilities commonly found in web applications. LFI allows attackers to include files from the server's filesystem, while RFI allows the inclusion of files from remote servers. These vulnerabilities may be exploited to execute arbitrary code, disclose sensitive information, or escalate privileges within the server hosting the web application."
            desc="Allow attackers to read local files without relying on environment variables, posing a significant security risk.
"
            previewImage="https://miro.medium.com/v2/resize:fit:1400/1*tzWXBtmGms1wGIt-ApMZzg.jpeg"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center w-full mt-8 mb-6 lg:flex-row">
        <div animateOnce={true} animateIn="zoomInLeft">
          <FeatureCardd
            title="SSI Injection"
            longdesc="Server-Side Includes (SSI) Injection is a type of security vulnerability found in web applications that use SSI directives. SSI injection attacks enable attackers to inject and execute arbitrary SSI directives on the server. This can be used to read sensitive files, execute server-side commands, or modify the content delivered to the client, potentially leading to unauthorized access or data manipulation.

"
            desc="Manipulate server-side includes, potentially leading to unauthorized content insertion.
"
            previewImage="https://www.creativefabrica.com/wp-content/uploads/2020/02/09/server-Graphics-1-1-580x387.jpg"
          />
        </div>
        <div className="mx-auto divider lg:divider-horizontal"></div>
        <div animateOnce={true} animateIn="zoomInRight">
          <FeatureCardd
            title="RCE"
            longdesc="Remote Code Execution (RCE) is a type of security vulnerability that allows attackers to execute arbitrary code on a remote server. RCE vulnerabilities can be exploited through various means, such as injecting malicious code via web applications or exploiting flaws in software running on the server. Successful exploitation of RCE can lead to complete control over the affected system, allowing attackers to steal data, disrupt services, or deploy malware."
            desc="Enables execution of arbitrary commands on a remote host, granting full control of the webserver.
"
            previewImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAkBnAbYjhpOmO-yyUGRks56CeoZAnbFySaw&usqp=CAU"
          />
        </div>
        <br></br>
        <br></br>
      </div>
    </>
  );
}

export default Features;
function FeatureCardd(props) {
  return (
    <div class="  mx-auto flex w-80 md:w-96 flex-col rounded-2xl bg-slate-200 shadow-xl h-auto hover:bg-purple-300 transition duration-150 hover:scale-90 hover:opacity-75">
      <figure class="flex items-center justify-center rounded-2xl">
        <img
          src={props.previewImage}
          alt="Card Preview"
          class="rounded-t-xl h-52"
        />
      </figure>
      <div class="flex flex-col p-8">
        <div class="pb-6 text-2xl font-bold uppercase text-[#374151]">
          {props.title}
        </div>
        <div class="text-lg text-[#374151]">{props.desc}</div>
        <div class="flex justify-end pt-6">
          <button class="w-full transform rounded-lg bg-[#7e22ce] p-3 text-base font-bold text-[#ffffff] transition-transform hover:bg-purple-800 active:scale-95">
            Continue Reading
          </button>
        </div>
      </div>
    </div>
  );
}
