import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About Me</p>
        </div>

      <p className="text-xl mt-20">
        Hello, I am a software developer from Eastern part of Nigeria, currently resides in Lagos Nigeria.
        I've spent couple of months undergoing training remotely, which has really helped improve not just my technical skill but also soft skills too.
        I have built projects with JavaScript, Webpack, ReactJs, Redux, PostgreSql, Ruby, Ruby On Rails.
        I have worked, collaborated with diverse developers from different ethnicities and cultures.
        </p>
      <br />

    
        <p className="text-xl">
        I am outgoing, dedicated, and open minded. I get across to people and adjust to changes with ease.
        I believe that a person should work on developing their skills and learn new things all the time.
        I am also a fun person 😊 and a fitness enthusiast.🏋️‍♀️
      </p>
      </div>
    </div>
  );
};

export default About;
