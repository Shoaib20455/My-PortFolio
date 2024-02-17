import React from 'react';
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import chattApp from "../assets/portfolio/chattApp.png"
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      mylink: "https://smytodoapps.netlify.app/", // Replace with your demo link
      githubLink: "https://github.com/Shoaib20455/My-Todo-app", // Replace with your GitHub link
    },
    {
      id: 2,
      src: navbar,
      mylink: "https://myyecommerceapp.netlify.app/", // Replace with your demo link
      githubLink: "https://github.com/Shoaib20455/my_Ecommerce_app", // Replace with your GitHub link
    },
    {
      id: 3,
      src: installNode,
      mylink: "https://threejs3dshirt.netlify.app/", // Replace with your demo link
      githubLink: "https://github.com/Shoaib20455/Three-D-Shirt", // Replace with your GitHub link
    },
    {
      id: 4,
      src: chattApp,
      mylink: "https://shoaibsapp-86d63.web.app/", // Replace with your demo link
      githubLink: "https://github.com/Shoaib20455/Chatt-App-2024_Firebase-tailwind", // Replace with your GitHub link
    },
  ];

  const handleDemoClick = (demoLink) => {
    window.open(demoLink, "_blank"); // Open the demo link in a new tab/window
  };

  const handleCodeClick = (githubLink) => {
    window.open(githubLink, "_blank"); // Open the GitHub link in a new tab/window
  };

  return (
    <div
      name="portfolio"
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src, mylink, githubLink }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
              <div className='flex items-center justify-center'>
                <button
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                  onClick={() => handleDemoClick(mylink)}
                >
                  Demo
                </button>
                <button
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                  onClick={() => handleCodeClick(githubLink)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
