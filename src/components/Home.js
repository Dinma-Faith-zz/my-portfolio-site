import React from 'react';
import { Link } from 'react-scroll';
import Socials from './Socials';
import Userimage from '../assets/userimage.jpeg';

const Home = () => (

  <div
    name="home"
    className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white lg:mr-20">
          I&apos;m Dinma
          {' '}
          <br />
          Glad to see you!
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
          I&apos;m a software developer! I can help you build a product , feature
          or website Look through some of my work and experience! If you like
          what you see and have a project you need coded, don&apos;t hestiate to
          contact me.
        </p>

        <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:items-center">
          <Link
            to="contact"
            smooth
            duration={500}
            className="text-center text-[#fff] hover:bg-[#E8E8FF] hover:text-black border-2 ml-10 mr-10 p-2 rounded-lg bg-[#2ebc2e] md:px-2 md:py-2 md:m-4"
          >
            Get in touch
          </Link>
          <Socials />

        </div>
      </div>

      <div>
        <img
          src={Userimage}
          alt="userimage"
          className="hidden md:block rounded-2xl mx-auto w-48 h-72"
        />
      </div>
    </div>
  </div>
);

export default Home;
