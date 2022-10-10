import React from 'react';

const About = () => (
  <div
    name="about"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div>
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          About Me
        </p>
      </div>

      <p className="text-xl mt-8">
        Hello, I am a software developer from Lagos Nigeria.
        I&apos;ve spent couple of months undergoing
        training remotely,collaborating with developers from different ethnicities and
        cultures which has really helped improve not just my technical
        skill but also soft skills too. I have built projects with JavaScript,
        Webpack, ReactJs, Redux, PostgreSql, Ruby, Ruby On Rails...
        I get across to people and
        adjust to changes with ease.I am also a
        fun person 😊 and a fitness enthusiast.🏋️‍♀️
      </p>
    </div>
  </div>
);

export default About;
