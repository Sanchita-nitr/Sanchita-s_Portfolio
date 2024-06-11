import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
     
      <div id="about">
        <h1 className=" mt-20 text-3xl text-center font-serif font-extrabold md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-200 from-pink-200">
            About Me
          </span>
        </h1>
        <div className="content text-justify justify-normal whitespace-normal text-xl pt-5 lg:mx-52 md:mx-16
            mx-10 lg:text-2xl md:text-2xl ">
          <h1>
            {" "}
            I&apos;m{" "}
            <span className=" lg:text-4xl md:text-3xl text-2xl font-semibold text-purple">
              Sanchita Priyadarshinee
            </span>
            , a dedicated and enthusiastic technology professional with a keen
            interest in Machine Learning and Artificial Intelligence, currently
            pursuing a B.Tech in{" "}
            <span className=" lg:text-4xl md:text-3xl text-2xl text-purple font-semibold">
              Electronics and Communication Engineering
            </span>{" "}
            at NIT Rourkela. I have successfully developed and completed several
            projects in these fields, showcasing my strong technical abilities
            and problem-solving skills. Known for my exceptional organizational
            skills, punctuality, and consistency in work, I have also
            demonstrated strong leadership by organizing various well-being and
            professional events. In addition to my technical pursuits, I enjoy
            playing badminton, which underscores my commitment to physical
            fitness and teamwork.
          </h1>
        </div>
      </div>

      <div className="lg:mt-32 mt-20 ">
      <div className="absolute">
        <p className=" lg:text-6xl md:text-6xl font-serif text-center lg:my-10 md:my-10  text-transparent bg-clip-text bg-gradient-to-r to-yellow-200 from-pink-200  "><u>Skills</u></p>
        <div className="li lg:text-4xl  md:text-2xl mx-10">
          <li className="lg:mt-32">Languages: Python, C++, Java, JavaScript, TypeScript</li>
          <li className="lg:mt-5 md:mt-5">Version Control: Git, GitHub</li>
          <li className="lg:mt-5 md:mt-5">Frontend Technologies: React.js, Next.js</li>
          <li className="lg:mt-5 md:mt-5">Databases: SQL</li>
          <li className="lg:mt-5 md:mt-5">ML: CNN, ANN</li>
        </div>
      </div>
        <img className="opacity-35" src="/IT.png" alt="IT" />
      </div>
    </>
  );
};

export default About;
