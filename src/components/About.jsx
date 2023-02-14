import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { intance } from "../api";

const About = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    intance.get("/about_me").then(({ data }) => setInfo(data));
  }, []);

  return (
    <div  className="  my-5 max-w-[1200px] m-auto mb-8">
      <motion.div id="about"
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{
          duration: 1,
          // delay: 0.7,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h2 className="text-4xl p-2 font-extrabold text-center">
          <i className=" mr-4 fa-solid fa-user"></i>
          About
          <span className="ml-4 text-violet-900">Me</span>
        </h2>
      </motion.div>
      {info &&
        info.map((item) => (
          <div
            key={item.id}
            className="p-10 grid grid-cols-2 gap-x-4 place-items-center"
          >
            <motion.div
              className="m-10 rounded-3xl overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [-240, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src={item.avatar}
                className="w-full hover:shadow-xl hover:from-transparent cursor-pointer"
                alt={item.name}
              />
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [250, 0], opacity: 1 }}
              transition={{ duration: 1 }}
              className="p-7.5"
            >
              <h1 className="text-3xl font-bold">I'm {item.name}</h1>
              <p className="font-bold my-1">{item.desc_job}</p>
              <p>{item.description}</p>
              <div className="grid grid-cols-2">
                <div>
                  <p className="mt-4 font-semibold">
                    <span className="text-[#011aff] font-normal">Age : </span>
                    {item.age}
                  </p>
                  <p className="mt-4 font-semibold">
                    <span className="text-[#011aff] font-normal ">Phone :</span>
                    {item.phone}
                  </p>
                </div>
                <div>
                  <p className="mt-4 font-semibold ">
                    <span className="text-[#011aff] font-normal">Email : </span>
                    jigarsable21@gmail.com
                  </p>
                  <p className="mt-4 font-semibold">
                    <span className="text-[#011aff] font-normal ">Place :</span>
                    {item.address}
                  </p>
                </div>
              </div>
              <button className="bg-[#2506ad] mt-10 py-4 text-white px-7 text-lg font-semibold rounded-xl shadow-[0px_5px_10px_rgb(48_68_247_/_60%)]">
                Resume &gt;
              </button>
            </motion.div>
          </div>
        ))}
    </div>
  );
};

export default About;
