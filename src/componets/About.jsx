import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-950 to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hi, I'm Sachin — a passionate and curious Java Developer with a solid foundation in object-oriented programming, data structures, and software development. 
        As a recent graduate,I’ve been building my skills through academic projects and hands-on coding in Java, along with tools like Spring Boot, JDBC, and MySQL.
        I enjoy solving real-world problems with clean, efficient code and love learning new technologies to stay updated in this ever-evolving tech world. 
        Whether it's back-end logic or debugging a tricky issue, I’m always up for a challenge. I'm currently looking for opportunities where I can grow as a developer and contribute to impactful projects in a collaborative environment.
        When I’m not coding, you’ll probably find me exploring tech blogs, practicing DSA, or experimenting with new tools to sharpen my skills.
        </p>

        <br />

        <p className="text-xl">
        In addition to Java, I’ve also worked with front-end basics like HTML, CSS, and JavaScript, giving me a full-stack perspective during project development. 
        I thrive in collaborative environments and enjoy contributing to team goals through clear communication and a proactive attitude.
        I’m currently seeking a challenging opportunity where I can grow as a developer, contribute meaningfully to real-world projects, 
        and continuously evolve my skills in the ever-changing tech landscape.
        </p>
      </div>
    </div>
  );
};

export default About;