import React from 'react';
import portfolios from '../assets/data/data';

const Portfolios = () => (
  <section name="portfolio" id="portfolios" className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-10 lg:px-40">
      <h1 className="text-4xl mb-8 font-bold text-white">
        My Portfolio
      </h1>
      <div className="flex flex-wrap -m-4">
        {portfolios.map((portfolio) => (
          <div
            key={portfolio.id}
            className="sm:w-1/2 w-100 p-4"
          >
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={portfolio.image}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  {portfolio.subtitle}
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  {portfolio.title}
                </h1>
                <p className="leading-relaxed">{portfolio.description}</p>
                <div className="flex gap-6 justify-center">
                  <a
                    href={portfolio.repo}
                    className="border-2 px-6 md:px-10 rounded bg-[#2ebc2e] hover:bg-[#E8E8FF] hover:text-black text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Check project source"
                  >
                    Source
                  </a>
                  <a
                    href={portfolio.live}
                    className="border-2 px-6 md:px-10 bg-[#2ebc2e] rounded hover:bg-[#E8E8FF] hover:text-black text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Check project demo"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolios;
