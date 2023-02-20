import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../content";
const Education = () => {
  const [theme] = useContext(AppContext);

  const [education, setEducation] = useState([]);
  useEffect(() => {
     setEducation(theme.education);
  }, []);

  return (
    <section id="education" className="bg-gray-200 py-20 px-20 sm:px-10 pb-10 sm:text-center">
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ y: [-50, 0], opacity: 1 }}
         transition={{
           duration: 1,
           // delay: 0.7,
           ease: [0, 0.71, 0.2, 1.01], }}
        className="text-center"
      >
        <h2 className="lg:text-4xl sm:text-3xl text-black  font-bold ">
          <i className="fas fa-graduation-cap mr-4"></i>
          My <span className="text-[#7303A7]"> Education</span>
        </h2>
        <p className="mt-3 font-medium pb-5">
          Education is not the learning of facts, but the training of the mind
          to think.
        </p>
      </motion.div>

      <div className=" m-auto flex flex-col gap-4 ">
        {education &&
          education.map((item,index) => (
            <div
              key={`${item.id} ${index}`}
              className="visible opacity-100 transform transform-[matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)] transition-all flex lg:w-4/5 md:w-full sm:w-full mt-5 rounded-lg shadow-sm bg-white hover:shadow-xl m-auto"
            >
              <div className="lg:max-h-48 overflow-hidden">
                <img
                  className="w-full h-full  object-cover relative"
                  src={item.img_school}
                  alt=""
                />
              </div>
              <div className="relative flex flex-col flex-auto p-4 ml-4 text-left">
                <h3 className="text-xl text-[#012970] py-3 font-semibold ">
                  {item.school_name}
                </h3>
                <p className="text-base ">{item.description}</p>
                <h4 className="text-lg text-green-700 font-bold">
                  {item.time}
                </h4>
              </div>
            </div>
          ))}
      </div>
   
    </section>
  );
};

export default Education;
