import { motion } from "framer-motion";

const Skill = () => {
  return (
    <section className="bg-gradient-to-b from-[#57059e] to-[#4a00e0] min-h-[90vh] pb-10">
      <h2 className="text-4xl text-white text-center font-bold py-6 mb-5">
        <i className="fas fa-laptop-code mr-4"></i>
        Skills & <span className="text-[#FFe600]">Abilities</span>
      </h2>
      <motion.div
        className="max-w-[1200px] m-auto bg-[#00001666] rounded-2xl border-gray-800 opacity-75 p-6 mb-4 overflow-hidden "
        initial={{ opacity: 0 }}
       
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
      >
        <motion.div
          // whileHover={{ scale: 1.1 }}
          // transition={{ duration: 0.3 }}
          className="grid grid-cols-6 gap-7 flex-wrap "
        >
          <div className="  hover:shadow-md  p-2.5  rounded-lg shadow-[0_4px_10px_#00000033] bg-[#000016e6] transition-all">
            <div className="flex flex-col items-center gap-4 mt-4">
              <img
                className=""
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
                alt="anh"
              />
              <p className="p-2 ml-2 tracking-wide text-white text-xl font-semibold">
                taildwind
              </p>
            </div>
          </div>

          <div className="  hover:shadow-md  p-2.5  rounded-lg shadow-[0_4px_10px_#00000033] bg-[#000016e6] transition-all">
            <div className="flex flex-col items-center gap-4 mt-4">
              <img
                className=""
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
                alt="anh"
              />
              <p className="p-2 ml-2 tracking-wide text-white text-xl font-semibold">
                taildwind
              </p>
            </div>
          </div>

          <div className="  hover:shadow-md  p-2.5  rounded-lg shadow-[0_4px_10px_#00000033] bg-[#000016e6] transition-all">
            <div className="flex flex-col items-center gap-4 mt-4">
              <img
                className=""
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
                alt="anh"
              />
              <p className="p-2 ml-2 tracking-wide text-white text-xl font-semibold">
                taildwind
              </p>
            </div>
          </div>

          <div className="  hover:shadow-md  p-2.5  rounded-lg shadow-[0_4px_10px_#00000033] bg-[#000016e6] transition-all">
            <div className="flex flex-col items-center gap-4 mt-4">
              <img
                className=""
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
                alt="anh"
              />
              <p className="p-2 ml-2 tracking-wide text-white text-xl font-semibold">
                taildwind
              </p>
            </div>
          </div>

          <div className="  hover:shadow-md  p-2.5  rounded-lg shadow-[0_4px_10px_#00000033] bg-[#000016e6] transition-all">
            <div className="flex flex-col items-center gap-4 mt-4">
              <img
                className=""
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
                alt="anh"
              />
              <p className="p-2 ml-2 tracking-wide text-white text-xl font-semibold">
                taildwind
              </p>
            </div>
          </div>

          <div className="  hover:shadow-md  p-2.5  rounded-lg shadow-[0_4px_10px_#00000033] bg-[#000016e6] transition-all">
            <div className="flex flex-col items-center gap-4 mt-4">
              <img
                className=""
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
                alt="anh"
              />
              <p className="p-2 ml-2 tracking-wide text-white text-xl font-semibold">
                taildwind
              </p>
            </div>
          </div>

          <div className="  hover:shadow-md  p-2.5  rounded-lg shadow-[0_4px_10px_#00000033] bg-[#000016e6] transition-all">
            <div className="flex flex-col items-center gap-4 mt-4">
              <img
                className=""
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
                alt="anh"
              />
              <p className="p-2 ml-2 tracking-wide text-white text-xl font-semibold">
                taildwind
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skill;
