"use client";
import React, { useState } from "react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="home">
      <nav className="mt-10">
        <div className="sm:block md:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          {isOpen && (
            <ul className=" mt-10 md:hidden grid grid-rows-4 pt-10 rounded-xl bg-black-300 text-center">
              <li className=" mb-10">
                <a
                  className="p-4 rounded-2xl hover:text-purple hover:underline font-medium font-serif bg-black-200 "
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="p-4 rounded-2xl hover:text-purple hover:underline font-medium font-serif bg-black-200"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="p-4 rounded-2xl hover:text-purple hover:underline font-medium font-serif bg-black-200"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="p-4 rounded-2xl hover:text-purple hover:underline font-medium font-serif bg-black-200"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>

        <ul className="hidden md:grid grid-cols-4 justify-center text-center rounded-xl p-5 bg-black-300">
        
          <li>
            <a
              className="p-4 rounded-2xl hover:text-purple hover:underline font-medium font-serif bg-black-200"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="p-4 rounded-2xl hover:text-purple hover:underline font-medium font-serif bg-black-200"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="p-4 rounded-2xl hover:text-purple hover:underline font-medium font-serif bg-black-200"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="p-4 rounded-2xl hover:text-purple hover:underline font-medium font-serif bg-black-200"
              href="#contact"
            >
              Contact
            </a>
          </li>
          
        </ul>
      </nav>
      <div className="flex flex-col items-center justify-center">
        <h1 className="lg:my-16 md:my-16 my-8 text-center text-3xl font-serif font-extrabold md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-sky-300 from-green-400">
            A Frontend Web Developer
          </span>
        </h1>

        <figure className="mt-10 h-auto shadow-lg shadow-purple max-w-sm px-3 lg:mx-0 md:mx-0 mx-16">
          <img className="rounded-full" src="/pp.jpg" alt="Profile" />
        </figure>
      </div>
    </div>
  );
};

export default Hero;

