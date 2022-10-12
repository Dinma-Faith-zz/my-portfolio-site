import React from 'react';
import {
  FaGithub, FaTwitter, FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Socials = () => (
  <div className="md:hidden flex m-auto md:m-5">
    <a
      className="pr-14 md:pr-5"
      href="mailto:phaytep@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Send me an email"
    >
      <HiOutlineMail className="text-[#B5B4B8] md:text-[#F9F9FA] text-lg hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
    </a>
    <a
      className="pr-14 md:pr-5"
      href="https://github.com/Dinma-Faith?tab=repositories"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="My Github profile"
    >
      <FaGithub className="text-[#B5B4B8] md:text-[#F9F9FA] text-lg hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
    </a>
    <a
      className="pr-14 md:pr-5"
      href="https://www.linkedin.com/in/chidinma-faith/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="My Linkedin profile"
    >
      <FaLinkedin className="text-[#B5B4B8] md:text-[#F9F9FA] text-lg hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
    </a>
    <a
      href="https://twitter.com/p_phayte"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="My Twitter profile"
    >
      <FaTwitter className="text-[#B5B4B8] md:text-[#F9F9FA] text-lg hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
    </a>
  </div>
);

export default Socials;
