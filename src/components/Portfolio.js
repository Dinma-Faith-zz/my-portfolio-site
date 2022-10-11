import React from 'react';
// import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import calculatorApp from '../assets/portfolio/calculatorApp.jpeg';
import navbar from '../assets/portfolio/navbar.jpg';
// import reactParallax from '../assets/portfolio/reactParallax.jpg';
import foodrecipes from '../assets/portfolio/foodrecipes.JPG';
import budgetApp from '../assets/portfolio/budgetApp.jpeg';
import spacetravelHub from '../assets/portfolio/spacetravelHub.jpeg';
// import reactSmooth from '../assets/portfolio/reactSmooth.jpg';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: calculatorApp,
      description: 'It keeps track of users transactions for different categories of needs or wants.It Allows a user to save categories, create transactionns or delete transactions under those categories and Keep records of the total transactions under a given category.',
    },
    {
      id: 2,
      src: foodrecipes,
      description: 'It keeps track of users transactions for different categories of needs or wants.It Allows a user to save categories, create transactionns or delete transactions under those categories and Keep records of the total transactions under a given category.',
    },
    {
      id: 3,
      src: budgetApp,
      description: 'It keeps track of users transactions for different categories of needs or wants.It Allows a user to save categories, create transactionns or delete transactions under those categories and Keep records of the total transactions under a given category.',
    },
    {
      id: 4,
      src: spacetravelHub,
      description: 'It keeps track of users transactions for different categories of needs or wants.'
    },

  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, description }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 md:h-36 md:w-full"
              />
              <p>{description}</p>
              <div className="flex items-center justify-center">
                <button type="button" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button type="button" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
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
