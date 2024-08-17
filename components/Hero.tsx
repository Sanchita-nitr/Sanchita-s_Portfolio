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
          <span className="text-transparent shadow-lg shadow-purple bg-clip-text bg-gradient-to-r to-sky-300 from-green-400 inline-block animate-subtleWiggle">
            A Full-Stack Web Developer
          </span>
        </h1>

        <figure className="mt-10 rounded-3xl shadow-sm  shadow-purple max-w-sm px-3 md:mx-0 md:my-0 mx-10">
          <img className="py-5 shadow-2xl shadow-black-300 rounded-br-full size-[400px]" src="/Screenshot 2024-08-17 at 5.01.09 PM.png" alt="Profile" />
        </figure>
        
      </div>
    </div>
  );
};

export default Hero;
