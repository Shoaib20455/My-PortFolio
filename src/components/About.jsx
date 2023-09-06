import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b
         from-gray-800 to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
             justify-center w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
                 border-gray-500"
          >
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        Hi, my name is Shoaib and I'm a skilled web developer with expertise in HTML, CSS, JavaScript, Bootstrap, PHP, and currently working in React and Laravel. I have a passion for creating beautifully designed, responsive, and functional websites that exceed my client's expectations.
        </p>
        <br />
        <p className="text-xl">
        In addition to my professional experience, I'm also a computer science student at Numl University. I have a basic knowledge of languages like C++ and Java, and I'm constantly seeking opportunities to expand my knowledge and skills. I enjoy exploring new technologies and staying up-to-date with the latest trends in the industry.
        </p>
      </div>
    </div>
  );
};

export default About;
