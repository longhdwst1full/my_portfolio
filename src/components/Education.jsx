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
    <section id="education" className="bg-gray-200 p-20 pb-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="text-center"
      >
        <h2 className="text-4xl text-black  font-bold ">
          <i className="fas fa-graduation-cap mr-4"></i>
          My <span className="text-[#7303A7]"> Education</span>
        </h2>
        <p className="mt-3 font-medium pb-5">
          Education is not the learning of facts, but the training of the mind
          to think.
        </p>
      </motion.div>

      <div className="max-w-[1200px] m-auto flex flex-col gap-4 ">
        {education &&
          education.map((item,index) => (
            <div
              key={`${item.id} ${index}`}
              className="visible opacity-100 transform transform-[matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)] transition-all flex w-4/5 mt-5 rounded-lg shadow-sm bg-white hover:shadow-xl m-auto"
            >
              <div className="max-h-40 overflow-hidden">
                <img
                  className="w-full   object-cover relative"
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
      {/* <div className="max-w-[1200px] m-auto flex flex-col gap-4">
        <div className="visible opacity-100 transform transform-[matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)] transition-all flex w-4/5 mt-5 rounded-lg shadow-sm bg-white hover:shadow-xl m-auto">
          <div className="">
            <img
              className="w-full  object-cover relative"
              src="	https://jigarsable.netlify.app/assets/images/educat/college.jpg"
              alt=""
            />
          </div>
          <div className="relative flex flex-col flex-auto p-4 ml-4 text-left">
            <h3 className="text-xl text-[#012970] py-3 font-semibold ">
              Bachelor of Engineering in Information Technology
            </h3>
            <p className="text-base ">
              Zeal College of engineering and research | SPPU
            </p>
            <h4 className="text-lg text-green-700 font-bold">
              2020-2024 | Pursuing
            </h4>
          </div>
        </div>
        <div className="visible opacity-100 transform transform-[matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)] transition-all flex w-4/5 mt-5 bg-white rounded-lg shadow-sm hover:shadow-xl m-auto">
          <div className="">
            <img
              className="w-full  object-cover relative"
              src="	https://jigarsable.netlify.app/assets/images/educat/college.jpg"
              alt=""
            />
          </div>
          <div className="relative flex flex-col flex-auto p-4 ml-4 text-left">
            <h3 className="text-xl text-[#012970] py-3 font-semibold ">
              Bachelor of Engineering in Information Technology
            </h3>
            <p className="text-base ">
              Zeal College of engineering and research | SPPU
            </p>
            <h4 className="text-lg text-green-700 font-bold">
              2020-2024 | Pursuing
            </h4>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Education;
