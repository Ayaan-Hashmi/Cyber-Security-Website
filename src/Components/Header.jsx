import React from "react";
import Headroom from "react-headroom";

function Header() {
  return (
    <Headroom
      style={{
        webkitTransition: "all .10s ease-in-out",
        mozTransition: "all .10s ease-in-out",
        oTransition: "all .10s ease-in-out",
        transition: "all .1s ease-in-out",
        opacity: 50,
      }}
    >
      <div className="navbar bg-base-300">
        <div className=" navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-neutral lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="p-2 mt-3 bg-transparent shadow menu menu-compact dropdown-content rounded-box w-52"
            >
              <li>
                <a href="#vulnerabilities">Vulnerabilities</a>
              </li>
              <li>
                <a href="#https">HTTP(s)</a>
              </li>
              <li>
                <a href="#bestpractices">Best Practices</a>
              </li>
              <li>
                <a href="#resources">Resources</a>
              </li>
            </ul>
          </div>
          <a
            href="/"
            className="text-xl normal-case btn btn-ghost hove:bg-base-100"
          >
            CYBERSEC101
          </a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="p-0 menu menu-horizontal">
            <li>
              <a href="/#vulnerabilities">Vulnerabilities</a>
            </li>
            <li>
              <a href="/#https">HTTP(s)</a>
            </li>
            <li>
              <a href="#bestpractices">Best Practices</a>
            </li>
            <li>
              <a href="#resources">Resources</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </Headroom>
  );
}

export default Header;
