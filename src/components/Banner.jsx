import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { AppContext } from "../content";

const Banner = () => {
  const [icon, setIcon] = useState([]);
  const [theme] = useContext(AppContext);
  const cv = theme?.cv;
  useEffect(() => {
    setIcon(theme.icon_contacts);
  }, []);
  return (
    <section className=" w-full  relative flex min-h-screen items-center">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 2,
          delay: 0.5,
        }}
        className="w-full h-full flex justify-between items-center px-10 pt-20  md:px-20 lg:px-40 overflow-hidden"
      >
        <motion.div
          className="overflow-hidden flex-grow md:text-left md:flex-grow-0 md:min-w-[350px] sm:m-auto "
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-10, 0], opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
        >
          <h2 className="lg:text-4xl pb-3 sm:text-2xl font-extrabold px-1 py-3 leading-tight">
            Hi There,
            <br />
            I'm <span className="text-yellow-700 ">Hoàng Đình Long</span>
            <p className="text-black pt-2.5 font-semibold text-3xl">
              I am 
              <TypeAnimation
                className="ml-2 text-cyan-800 text-2xl  font-semibold "
                sequence={["Web Developer", 1000, ""]}
                speed={1}
                // Custom Speed from 1-99 - Default Speed: 40
                style={{ fontSize: "38px" }}
                wrapper="span" // Animation will be rendered as a <span>
                repeat={Infinity}
              />
            </p>
          </h2>
          <button className="rounded-3xl bg-blue-700 text-white text-2xl text-center px-5 py-2 my-3">
            <a href={cv}> My resume</a>
          </button>

       
        </motion.div>
        <div className="pb-8 w-[45%] flex-grow-0 m-auto pt-3 max-w-4/6">
          <img
            src="https://res.cloudinary.com/dy1jlseae/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1676643455/my-portfolio/dev-ed-wave_opmp9k.png"
            className="object-cover rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
            alt=""
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
