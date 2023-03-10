import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { intance } from "../api";
import { AppContext } from "../content";

const Skill = () => {
  // const [theme] = useContext(AppContext);

  const [skill, setSkill] = useState([]);

  useEffect(() => {
    intance.get("/skills").then((data) =>  setSkill(data))
  }, []);

  return (
    <section
      id="skill"
      className="bg-gradient-to-b from-[#57059e] to-[#4a00e0] min-h-[90vh]  py-20 pb-10"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{
          duration: 1,
          // delay: 0.7,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h2 className="lg:text-4xl sm:text-3xl text-white text-center font-bold py-6 mb-5">
          <i className="fas fa-laptop-code mr-4"></i>
          Skills & <span className="text-[#FFe600]">Abilities</span>
        </h2>
      </motion.div>
      <motion.div
        className="lg:max-w-[1200px] md:max-w-3xl m-auto bg-[#00001666] rounded-2xl border-gray-800 opacity-75 p-6 mb-4 overflow-hidden "
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
      >
        <div
        
          className="grid lg:grid-cols-6 gap-7 flex-wrap md:grid-cols-4 md:gap-6 sm:grid-cols-3 sm:gap-5"
        >
          {skill &&
            skill.map((item) => (
              <div
                key={`${item.id}hi`}
                className="hover:shadow-md  p-2.5  rounded-lg shadow-[0_4px_10px_#00000033] bg-[#000016e6] transition-all"
              >
                <div className="flex flex-col items-center gap-4 mt-4">
                  <img className="" src={item.image} alt={item.name} />
                  <p className="p-2 ml-2 tracking-wide text-white text-xl font-semibold">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skill;
