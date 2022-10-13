import React, { useEffect } from 'react';
import Aos from 'aos';
import skills from '../assets/data/skills';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section name="experience" id="skills" className="bg-gradient-to-b from-black to-gray-800">
      <div className="container px-5 py-10 lg:px-40 text-white">
        <div className=" mb-20">
          <h1 className="text-4xl mb-8 font-bold">
            Experience
          </h1>
          <p className="text-[#2ebc2e] py-6">
            This are few skills I have worked with and I am still open to learning more.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill.id} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center" data-aos="fade-up">
                <span className="title-font font-medium text-white">
                  {skill.skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
