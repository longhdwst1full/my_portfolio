import { motion } from "framer-motion";
const Contact = () => {
  return (
    <section className=" p-20 pb-10" id="contact_me">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="text-center"
      >
        <h2 className="text-4xl text-black  font-bold ">
          <i className="fas fa-headset mr-4"></i>Get In
          <span className="text-[#7303A7]"> Touch</span>
        </h2>
      </motion.div>
      <p className="text-lg text-center w-3/5 m-auto my-3 py-2 text-gray-600 font-semibold">
        I am available on almost every social media. You can message me, I will
        reply within 24 hours. I can help you with ML, AI, React, Android, Cloud
        and Opensource Development.
      </p>
      <div className="flex mt-4 w-3/5 items-center justify-center m-auto text-2xl gap-5">
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"></path>
          </svg>
        </div>
      </div>
      <div className="max-w-[1200px] m-auto rounded-3xl bg-white shadow mt-10 p-10  ">
        <h1 className="py-3 text-center  text-3xl font-semibold  text-stone-800">
          Leave a message
        </h1>
        <div className="flex justify-between items-center flex-wrap">
          <div className=" max-w-[60%] ml-4">
            <motion.img
              className=" object-cover"
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [-240, 0], opacity: 1 }}
              src="https://jigarsable.netlify.app/assets/images/contact1.png"
              alt=""
            />
          </div>
          <div className="text-center p-5 w-[50%] mr-8">
            <form action="" className="">
              <motion.div
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ x: [240, 0], opacity: 1 }}
                className="flex flex-col justify-center items-center"
              >
                <div className="flex flex-wrap-reverse h-[50px] relative w-full m-4">
                  <input
                    className="h-full outline-none pr-4 pl-12  w-full rounded-xl border border-gray-700 bg-blue-300 text-black  focus:pl-12 focus:border-[2px]"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                  <i className="fas fa-user  absolute top-1/2 left-[18px] text-black font-bold text-lg -translate-y-1/2 "></i>
                </div>
                <div className="flex flex-wrap-reverse h-[50px] relative w-full m-4">
                  <input
                    className="h-full outline-none  pr-4 pl-12  w-full rounded-xl border border-gray-700 bg-blue-300 text-black  focus:pl-12 focus:border-[2px]"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  <i className="fas fa-envelope  absolute top-1/2 left-[18px] text-black font-bold text-lg -translate-y-1/2 "></i>
                </div>
                <div className="flex flex-wrap-reverse h-[50px] relative w-full m-4">
                  <input
                    className="h-full outline-none  pr-4 pl-12  w-full rounded-xl border border-gray-700 p-3 bg-blue-300 text-black  focus:pl-12 focus:border-[2px]"
                    type="text"
                    name="phone"
                    placeholder="Phone"
                  />
                  <i className="fas fa-phone-alt absolute top-1/2 left-[18px] text-black font-bold text-lg -translate-y-1/2 "></i>
                </div>

                <div className="flex flex-wrap-reverse relative w-full m-4 text-black">
                  <textarea
                    placeholder="Message"
                    name="message"
                    className="min-h-[130px] rounded-xl outline-none  max-h-[230px] bg-blue-300 max-w-full min-w-full pl-12 pt-3 pr-5 border-[1px]  border-gray-700 focus:border-[2px]"
                  ></textarea>
                  <i className="absolute top-6 text-lg left-4 fas fa-comment-dots"></i>
                </div>
                <button className="flex-end float-right text-white outline-none text-xl cursor-pointer rounded-md py-3 px-6 bg-[#2506ad] shadow-[0px_5px_10px_#3044f799] transition-all delay-[0.3s] hover:bg-[#421cecf5]  ">
                  Submit
                  <i className="fa fa-paper-plane relative left-2 text-lg transition-all text-white hover:translate-x-1"></i>
                </button>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
