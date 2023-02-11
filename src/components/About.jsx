import React from "react";
const About = () => {
  return (
    <div className="  my-5 w-[1200px] m-auto mb-8">
      <h2 className="text-4xl p-2 font-extrabold text-center">
        <i className=" mr-4 fa-solid fa-user"></i>
        About
        <span className="ml-4 text-violet-900">Me</span>
      </h2>

      <div className="p-10 grid grid-cols-2 gap-x-4 place-items-center">
        <div className="m-10 rounded-3xl overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <img
            src="https://jigarsable.netlify.app/assets/images/hero.png"
            className="w-full"
            alt=""
          />
        </div>
        <div className="p-7.5">
          <h1 className="text-3xl font-bold">I'm Hoàng Đình Long</h1>
          <p className="font-bold my-1">Full Stack Developer</p>
          <p>
            I am a Full-Stack developer based in Pune, India. I am an
            Information Technology undergraduate from SPPU. I am very passionate
            about improving my coding skills & developing applications &
            websites. I build WebApps and Websites using MERN Stack. Working for
            myself to improve my skills. Love to build Full-Stack clones.
          </p>
          <div className="grid grid-cols-2">
            <div>
              <p className="mt-4 font-semibold">
                <span className="text-[#011aff] font-normal">Age : </span>
                Age: 19
              </p>
              <p className="mt-4 font-semibold">
                <span className="text-[#011aff] font-normal "> Phone : </span>
                +91 704-302-4736
              </p>
            </div>
            <div>
              <p className="mt-4 font-semibold ">
                <span className="text-[#011aff] font-normal">Email : </span>
                jigarsable21@gmail.com
              </p>
              <p className="mt-4 font-semibold">
                <span className="text-[#011aff] font-normal "> Place : </span>:
                Pune, India - 412206
              </p>
            </div>
          </div>
          <button className="bg-[#2506ad] mt-10 py-4 text-white px-7 text-lg font-semibold rounded-xl shadow-[0px_5px_10px_rgb(48_68_247_/_60%)]">
            Resume &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
