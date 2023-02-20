import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../content";
import styles from "./css/about.module.scss";
import classNames from "classnames/bind";

const About = () => {
  const cx = classNames.bind(styles);
  const [theme] = useContext(AppContext);
  const cv = theme?.cv;

  const [info, setInfo] = useState([]);
  useEffect(() => {
    setInfo(theme.about_me);
  }, []);

  return (
    <div id="about" className="bg-gradient-to-r from-[#5bb94254] via-[#60ff827a] to-[#97ce1600] m-auto p-20 pb-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{
          duration: 1,
          // delay: 0.7,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h2 className="lg:text-4xl sm:text-3xl p-2 font-extrabold text-center">
          <i className=" mr-4 fa-solid fa-user"></i>
          About
          <span className="ml-4 text-violet-900">Me</span>
        </h2>
      </motion.div>
      {info &&
        info.map((item) => (
          <div key={item.id} className={`${cx("row")} p-1.5 mx-auto my-4  rounded-xl sm:text-center`}>
          
            <motion.div
              className={`${cx("image")} sm:ml-5 sm:mt-8`}
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [-240, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src={item.avatar}
                className={`${cx("tilt")} sm:ml-5`}
                // className="w-[20rem] rounded-xl m-auto h-auto ml-[100px] hover:shadow-xl hover:from-transparent cursor-pointer"
                alt={item.name}
              />
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [250, 0], opacity: 1 }}
              transition={{ duration: 1 }}
              className={`${cx("content")} sm:text-justify`}
            >
              <h1 className="lg:text-3xl sm:text-2xl font-bold">I'm {item.name}</h1>
              <p className={cx("tag")}>{item.desc_job}</p>
              <p>{item.description}</p>
              <div className="grid grid-cols-2">
                <div>
                  <p className="mt-4 font-semibold">
                    <span className="text-[#011aff] font-normal">Age : </span>
                    {item.age}
                  </p>
                  <p className="mt-4 font-semibold">
                    <span className="text-[#011aff] font-normal ">
                      Phone :{" "}
                    </span>
                    {item.phone}
                  </p>
                </div>
                <div>
                  <p className="mt-4 font-semibold ">
                    <span className="text-[#011aff] font-normal">Email : </span>
                    {item.email}
                  </p>
                  <p className="mt-4 font-semibold">
                    <span className="text-[#011aff] font-normal ">Place :</span>
                    {item.address}
                  </p>
                </div>
              </div>
              <button className="bg-[#2506ad] mt-10 py-4 text-white px-7 text-lg font-semibold rounded-xl shadow-[0px_5px_10px_rgb(48_68_247_/_60%)]">
              <a href={cv} className="">  Resume &gt;</a>
              </button>
            </motion.div>
          </div>
        ))}
    </div>
  );
};

export default About;
