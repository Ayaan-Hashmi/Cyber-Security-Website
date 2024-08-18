import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
function StaySafeOnline() {
  return (
    <div className="p-8 bg-base-200 stay-safe-online-section">
      <AnimationOnScroll animateOnce={true} animateIn="fadeInUp">
        <h1 className="mt-10 text-3xl font-bold text-center md:text-4xl lg:text-5xl">
          Protecting Yourself 🦺
        </h1>
        <p className="py-6 text-center ">
          Here are some tips to help you stay safe online and protect your
        </p>
      </AnimationOnScroll>

      <div className="grid grid-cols-1 gap-6 tips-list md:grid-cols-2 lg:grid-cols-4">
        <AnimationOnScroll animateOnce={true} animateIn="slideInUp">
          <div className="p-4 transition duration-150 bg-purple-700 rounded-md shadow-md tip-item hover:scale-105 hover:bg-opacity-75 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0,0,256,256"
              // style="fill:#000000;"
            >
              <g
                fill="#ffffff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                //   style="mix-blend-mode: normal"
              >
                <g transform="scale(4,4)">
                  <path d="M50.5,2c-4.42,0 -8.06189,3.39103 -8.46289,7.70703l-22.92773,7.45117c-1.595,-1.98 -4.00238,-3.1582 -6.60937,-3.1582c-4.687,0 -8.5,3.813 -8.5,8.5c0,4.687 3.813,8.5 8.5,8.5c0.454,0 0.90742,-0.03733 1.35742,-0.11133l15.69336,19.61523c-0.362,0.956 -0.55078,1.97209 -0.55078,2.99609c0,4.687 3.813,8.5 8.5,8.5c4.687,0 8.5,-3.813 8.5,-8.5c0,-1.932 -0.66914,-3.80764 -1.86914,-5.30664l8.51172,-29.4668c3.708,-0.947 6.35742,-4.26856 6.35742,-8.22656c0,-4.687 -3.813,-8.5 -8.5,-8.5zM50.5,4c3.59,0 6.5,2.91 6.5,6.5c0,3.398 -2.60864,6.1827 -5.93164,6.4707l-9.17187,31.75c1.29,1.189 2.10352,2.8873 2.10352,4.7793c0,3.59 -2.91,6.5 -6.5,6.5c-3.59,0 -6.5,-2.91 -6.5,-6.5c0,-1.194 0.32862,-2.30948 0.89063,-3.27148l-17.27148,-21.58789c-0.665,0.229 -1.37614,0.35938 -2.11914,0.35938c-3.59,0 -6.5,-2.91 -6.5,-6.5c0,-3.59 2.91,-6.5 6.5,-6.5c2.519,0 4.69834,1.43525 5.77734,3.53125l25.75586,-8.36914c-0.022,-0.218 -0.0332,-0.43911 -0.0332,-0.66211c0,-3.59 2.91,-6.5 6.5,-6.5zM45.66797,14.83594l-26.75781,8.69531c-0.159,0.994 -0.53875,1.91217 -1.09375,2.70117l17.05664,21.32422c0.804,-0.356 1.69195,-0.55664 2.62695,-0.55664c0.243,0 0.4808,0.01697 0.7168,0.04297l8.94727,-30.97266c-0.559,-0.336 -1.06209,-0.75138 -1.49609,-1.23437zM44.74414,17.23828l-8.0293,27.79688c-0.387,0.036 -0.76948,0.0985 -1.14648,0.1875l-15.3457,-19.18359c0.141,-0.309 0.26419,-0.62522 0.36719,-0.94922zM54.86719,21.00586c-0.38709,0.04495 -0.7275,0.31539 -0.84375,0.71289c-0.155,0.53 0.14673,1.08328 0.67773,1.23828l1.91992,0.5625c0.531,0.155 1.08523,-0.14969 1.24023,-0.67969c0.155,-0.53 -0.14773,-1.08524 -0.67773,-1.24023l-1.91992,-0.56055c-0.13275,-0.03875 -0.26745,-0.04819 -0.39648,-0.0332zM53.46484,25.80469c-0.38709,0.04495 -0.72945,0.31539 -0.8457,0.71289c-0.155,0.53 0.14969,1.08524 0.67969,1.24023l1.91992,0.56055c0.531,0.155 1.08523,-0.14969 1.24023,-0.67969c0.155,-0.531 -0.14969,-1.08524 -0.67969,-1.24023l-1.91992,-0.56055c-0.13275,-0.03875 -0.2655,-0.04819 -0.39453,-0.0332zM52.0625,30.60352c-0.38709,0.04495 -0.7275,0.31539 -0.84375,0.71289c-0.155,0.531 0.14673,1.08523 0.67773,1.24023l1.91992,0.56055c0.531,0.155 1.08523,-0.14969 1.24023,-0.67969c0.155,-0.531 -0.14773,-1.08523 -0.67773,-1.24023l-1.92187,-0.56055c-0.13275,-0.03875 -0.2655,-0.04819 -0.39453,-0.0332zM50.66016,35.40234c-0.38709,0.04495 -0.7275,0.31539 -0.84375,0.71289c-0.156,0.53 0.14673,1.08523 0.67773,1.24023l1.91992,0.5625c0.531,0.155 1.08523,-0.14969 1.24023,-0.67969c0.155,-0.531 -0.14773,-1.08523 -0.67773,-1.24023l-1.91992,-0.56055c-0.13275,-0.03875 -0.26745,-0.05014 -0.39648,-0.03516zM49.25781,40.20313c-0.38709,0.04495 -0.72945,0.31344 -0.8457,0.71094c-0.155,0.53 0.14969,1.08523 0.67969,1.24023l1.91992,0.5625c0.531,0.155 1.08523,-0.14969 1.24023,-0.67969c0.155,-0.531 -0.14969,-1.08523 -0.67969,-1.24023l-1.91992,-0.56055c-0.13275,-0.03875 -0.2655,-0.04819 -0.39453,-0.0332zM47.85547,45.00195c-0.38709,0.04495 -0.7275,0.31539 -0.84375,0.71289c-0.155,0.531 0.14673,1.08328 0.67773,1.23828l1.91992,0.5625c0.531,0.155 1.08523,-0.14969 1.24023,-0.67969c0.155,-0.531 -0.14773,-1.08523 -0.67773,-1.24023l-1.91992,-0.56055c-0.13275,-0.03875 -0.26745,-0.04819 -0.39648,-0.0332z"></path>
                </g>
              </g>
            </svg>
            <h3 className="mb-2 text-xl font-bold">Use a VPN</h3>
            <p className="font-semibold">
              A Virtual Private Network (VPN) encrypts your internet connection,
              making it more secure and protecting your privacy.
            </p>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateOnce={true} animateIn="slideInUp">
          <div className="p-4 transition duration-150 bg-purple-700 rounded-md shadow-md tip-item hover:scale-105 hover:bg-opacity-75 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0,0,256,256"
              // style="fill:#000000;"
            >
              <g
                fill="#ffffff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                //   style="mix-blend-mode: normal"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M25,2c-7.16752,0 -13,5.83248 -13,13v6h-4c-1.64497,0 -3,1.35503 -3,3v23c0,1.64497 1.35503,3 3,3h34c1.64497,0 3,-1.35503 3,-3v-23c0,-1.64497 -1.35503,-3 -3,-3h-4v-6c0,-7.16752 -5.83248,-13 -13,-13zM25,4c6.08648,0 11,4.91352 11,11v6h-22v-6c0,-6.08648 4.91352,-11 11,-11zM8,23h34c0.56503,0 1,0.43497 1,1v23c0,0.56503 -0.43497,1 -1,1h-34c-0.56503,0 -1,-0.43497 -1,-1v-23c0,-0.56503 0.43497,-1 1,-1zM13,34c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM21,34c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM29,34c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM37,34c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2z"></path>
                </g>
              </g>
            </svg>
            <h3 className="mb-2 text-xl font-bold">Don't Share OTPs</h3>
            <p className="font-semibold">
              One-Time Passwords (OTPs) are meant to be kept private. Never
              share them with anyone, even if they claim to be from a trusted
              source.
            </p>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateOnce={true} animateIn="slideInUp">
          <div className="p-4 transition duration-150 bg-purple-700 rounded-md shadow-md tip-item hover:scale-105 hover:bg-opacity-75 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0,0,256,256"
              // style="fill:#000000;"
            >
              <g
                fill="#ffffff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                //   style="mix-blend-mode: normal"
              >
                <g transform="scale(4.83019,4.83019)">
                  <path d="M7.21094,3.4043c-2.59003,0 -4.71094,2.12073 -4.71094,4.7207v27.13086c0,2.60999 2.12091,4.71875 4.71094,4.71875h38.56836c2.60999,0 4.7207,-2.10876 4.7207,-4.71875v-27.13086c0,-2.59998 -2.11072,-4.7207 -4.7207,-4.7207zM7.21094,5.4043h38.56836c1.5,0 2.7207,1.2207 2.7207,2.7207v23.5293h-44v-23.5293c0,-1.5 1.22095,-2.7207 2.71094,-2.7207zM38.98047,8.16406c-2.92004,0 -5.30078,2.38055 -5.30078,5.31055v2.28125c-0.96997,0.09998 -1.74023,0.9082 -1.74023,1.9082v4.19141c0,3.88001 3.16101,7.03906 7.04102,7.03906c3.87994,0 7.0293,-3.15906 7.0293,-7.03906v-4.19141c0,-1 -0.7605,-1.80823 -1.73047,-1.9082v-2.28125c0,-2.92999 -2.37884,-5.31055 -5.29883,-5.31055zM17.61914,8.66406c-5.42999,0 -9.85938,4.43127 -9.85938,9.86133c0,5.50153 4.44766,9.86914 9.85938,9.86914c5.4532,0 9.88086,-4.3714 9.88086,-9.86914c0,-5.43005 -4.43085,-9.86133 -9.88086,-9.86133zM38.98047,10.16406c1.81995,0 3.29883,1.49054 3.29883,3.31055v2.26953h-6.59961v-2.26953c0,-1.82001 1.48077,-3.31055 3.30078,-3.31055zM17.61914,10.66406c4.35004,0 7.88086,3.53131 7.88086,7.86133c0,1.79999 -0.59918,3.48914 -1.69922,4.86914c-1.46997,-1.89001 -3.73163,-3.0293 -6.18164,-3.0293c-2.44,0 -4.68823,1.13928 -6.1582,3.0293c-1.10004,-1.38001 -1.70117,-3.06915 -1.70117,-4.86914c0,-4.33002 3.52942,-7.86133 7.85938,-7.86133zM17.63086,12.33594c-1.85999,0 -3.38086,1.51886 -3.38086,3.37891c0,1.85999 1.52087,3.38086 3.38086,3.38086c1.86999,0 3.37891,-1.52087 3.37891,-3.38086c0,-1.86005 -1.50891,-3.37891 -3.37891,-3.37891zM38.98242,18.92383c1.44092,0 2.61328,1.17676 2.61328,2.62305c0,1.08704 -0.66736,2.02051 -1.61328,2.41406v0.74805c0,0.55225 -0.44775,1 -1,1c-0.55225,0 -1,-0.44775 -1,-1v-0.74805c-0.95129,-0.3927 -1.62305,-1.32568 -1.62305,-2.41406c0,-1.44629 1.17676,-2.62305 2.62305,-2.62305zM38.98438,20.67969c-0.48773,0 -0.86914,0.38147 -0.86914,0.86914c0,0.48023 0.38141,0.85742 0.86914,0.85742c0.47949,0 0.85547,-0.3772 0.85547,-0.85742c0,-0.47949 -0.38348,-0.86914 -0.85547,-0.86914zM21.77344,34.75195h0.01172c0.58844,0 1.06445,0.47601 1.06445,1.06445c0,0.58844 -0.47601,1.06641 -1.06445,1.06641c-0.58844,0 -1.07227,-0.47797 -1.07227,-1.06641c0,-0.58844 0.47217,-1.06445 1.06055,-1.06445zM26.49609,34.75195h0.00977c0.58838,0 1.06641,0.47601 1.06641,1.06445c0,0.58844 -0.47803,1.06641 -1.06641,1.06641c-0.58844,0 -1.07031,-0.47797 -1.07031,-1.06641c0,-0.58844 0.47211,-1.06445 1.06055,-1.06445zM31.2168,34.75195h0.01172c0.58838,0 1.06445,0.47601 1.06445,1.06445c0,0.58844 -0.47607,1.06641 -1.06445,1.06641c-0.58844,0 -1.07227,-0.47797 -1.07227,-1.06641c0,-0.58844 0.47217,-1.06445 1.06055,-1.06445zM21.56055,41.97461c0.61999,1.54004 0.01984,2.90112 -3.66016,5.62109h-1.71094c-0.56,0 -1,0.45001 -1,1c0,0.55005 0.44,1 1,1h20.63086c0.54999,0 1,-0.44995 1,-1c0,-0.54999 -0.45001,-1 -1,-1h-1.7207c-3.68005,-2.71997 -4.28015,-4.08105 -3.66016,-5.62109z"></path>
                </g>
              </g>
            </svg>
            <h3 className="mb-2 text-xl font-bold">Use Strong Passwords</h3>
            <p className="font-semibold">
              Create strong, unique passwords for each of your accounts. Use a
              combination of letters, numbers, and special characters and make
              sure it is long enough.
            </p>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateOnce={true} animateIn="slideInUp">
          <div className="p-4 transition duration-150 bg-purple-700 rounded-md shadow-md tip-item hover:scale-105 hover:bg-opacity-75 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0,0,256,256"
              // style="fill:#000000;"
            >
              <g
                fill="#ffffff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                //   style="mix-blend-mode: normal"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M4,15v25c0,1.65 1.35,3 3,3h36c1.65,0 3,-1.35 3,-3v-25zM29,23.82v8.18c0,3.31 -2.69,6 -6,6c-3.31,0 -6,-2.69 -6,-6v-5.41l3.71,3.7c0.39,0.39 0.39,1.03 0,1.42c-0.39,0.39 -1.03,0.39 -1.42,0l-0.29,-0.3v0.59c0,2.21 1.79,4 4,4c2.21,0 4,-1.79 4,-4v-8.18c-1.17,-0.4 -2,-1.51 -2,-2.82c0,-1.66 1.34,-3 3,-3c1.66,0 3,1.34 3,3c0,1.31 -0.83,2.42 -2,2.82zM43,7h-36c-1.65,0 -3,1.35 -3,3v3h42v-3c0,-1.65 -1.35,-3 -3,-3zM8,11c-0.55,0 -1,-0.45 -1,-1c0,-0.55 0.45,-1 1,-1c0.55,0 1,0.45 1,1c0,0.55 -0.45,1 -1,1zM11,11c-0.55,0 -1,-0.45 -1,-1c0,-0.55 0.45,-1 1,-1c0.55,0 1,0.45 1,1c0,0.55 -0.45,1 -1,1zM14,11c-0.55,0 -1,-0.45 -1,-1c0,-0.55 0.45,-1 1,-1c0.55,0 1,0.45 1,1c0,0.55 -0.45,1 -1,1z"></path>
                </g>
              </g>
            </svg>
            <h3 className="mb-2 text-xl font-bold">Beware of Phishing</h3>
            <p className="font-semibold">
              Be cautious of emails or messages that ask for personal
              information. Verify the sender's identity before clicking on any
              links.
            </p>
          </div>
        </AnimationOnScroll>
      </div>

      <div className="grid grid-cols-1 gap-6 mt-8 detailed-explanations lg:grid-cols-2">
        <h3 className="mb-4 text-2xl font-bold col-span-full md:text-center">
          <AnimationOnScroll animateOnce={true} animateIn="fadeInDown">
            Detailed Explanations
          </AnimationOnScroll>
        </h3>

        <div className="mb-6 explanation-item">
          <h4 className="mb-2 text-xl font-semibold md:text-center">
            Use a VPN
          </h4>
          <p className="md:text-center text-slate-200">
            A VPN creates a secure connection between your device and the
            internet. It hides your IP address and encrypts your data, making it
            difficult for hackers to intercept your information. This is
            especially important when using public Wi-Fi networks.
          </p>
        </div>
        <div className="mb-6 explanation-item">
          <h4 className="mb-2 text-xl font-semibold md:text-center">
            Don't Share OTPs
          </h4>
          <p className="md:text-center text-slate-200">
            OTPs are used for two-factor authentication (2FA) to add an extra
            layer of security to your accounts. Sharing your OTP with others can
            compromise your account security. Always keep your OTPs
            confidential.
          </p>
        </div>
        <div className="mb-6 explanation-item">
          <h4 className="mb-2 text-xl font-semibold md:text-center">
            Use Strong Passwords
          </h4>
          <p className="md:text-center text-slate-200">
            Strong passwords are essential for protecting your accounts from
            unauthorized access. Avoid using easily guessable information like
            your name or birthdate. Consider using a password manager to keep
            track of your passwords.
          </p>
        </div>
        <div className="mb-6 explanation-item">
          <h4 className="mb-2 text-xl font-semibold md:text-center">
            Beware of Phishing
          </h4>
          <p className="md:text-center text-slate-200">
            Phishing attacks are attempts to trick you into revealing personal
            information by pretending to be a trustworthy entity. Always verify
            the authenticity of the sender and avoid clicking on suspicious
            links or downloading attachments from unknown sources.
          </p>
        </div>
      </div>
    </div>
  );
}

export default StaySafeOnline;
