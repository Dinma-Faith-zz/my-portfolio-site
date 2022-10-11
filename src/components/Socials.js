import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Socials = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/chidinma-faith/',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/Dinma-Faith?tab=repositories',
    },
    {
      id: 3,
      child: (
        <>
          <FaTwitter size={30} />
        </>
      ),
      href: 'https://www.twitter.com',
    },
    {
      id: 4,
      child: (
        <>
          {' '}
          <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:phaytep@gmail.com',
    },
    {
      id: 5,
      child: (
        <>
          Resume
          {' '}
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '/resume.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <div className="md:hidden w-full pr-8 b fixed">
      <ul className="flex">
        {links.map(({
          id, child, href, style, download,
        }) => (
          <li
            key={id}
            className={
            `${'px-4'
          + ' '}${
              style}`
        }
          >
            <a
              href={href}
              className="w-full text-white mr-20"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
