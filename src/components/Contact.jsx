import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../content";
import { useForm } from "react-hook-form";

const Contact = () => {
  
  const [theme] = useContext(AppContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  
  };

  const [icon, setIcon] = useState([]);
  useEffect(() => {
    setIcon(theme.icon_contacts);
    // console.log(icon)
  }, []);



  return (
    <section className="p-20 pb-10" id="contact_me">
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
        <div className="text-3xl flex justify-center gap-10 py-3 text-gray-600 dark:text-gray-400">
          {icon &&
            icon.map((item, index) => (
              <a
                href={item?.link}
                key={index}
                title={item.name}
                className={`${item.class} hover: texxt-white cursor-pointer`}
              />
            ))}
        </div>
      </div>
      <div className="max-w-[1200px] m-auto rounded-3xl bg-white shadow mt-10 p-10  ">
        <h1 className="py-3 text-center  text-3xl font-semibold  text-stone-800">
          Leave A Message
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
          <div className="text-center p-5 lg:w-[50%] sm:w-full mr-8 sm:m-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <motion.div
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ x: [240, 0], opacity: 1 }}
                className="flex flex-col justify-center items-center"
              >
                <div className="w-full m-4 flex flex-col flex-wrap-reverse ">
                  <div className="flex flex-wrap-reverse h-[50px] relative w-full ml-4">
                    <input
                      {...register("name", { required: true })}
                      className="h-full outline-none pr-4 pl-12  w-full rounded-xl border border-gray-700 bg-blue-300 text-black  focus:pl-12 focus:border-[2px]"
                      type="text"
                      placeholder="Name"
                    />
                    <i className="fas fa-user  absolute top-1/2 left-[18px] text-black font-bold text-lg -translate-y-1/2 "></i>
                  </div>

                  {errors.name && (
                    <span className="text-red-500">Name is required</span>
                  )}
                </div>
                <div className="w-full m-4 flex flex-col flex-wrap-reverse ">
                  <div className="flex flex-wrap-reverse h-[50px] relative w-full ml-4">
                    <input
                      className="h-full outline-none  pr-4 pl-12  w-full rounded-xl border border-gray-700 bg-blue-300 text-black  focus:pl-12 focus:border-[2px]"
                      type="email"
                      {...register("email", {
                        required: true,
                        pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      })}
                      placeholder="Email"
                    />
                    <i className="fas fa-envelope  absolute top-1/2 left-[18px] text-black font-bold text-lg -translate-y-1/2 "></i>
                  </div>

                  {errors.email && errors.email.type === "required" && (
                    <p className="text-red-500">Email is required</p>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <p className="text-red-500">Invalid email format</p>
                  )}
                </div>
                <div className="w-full m-4 flex flex-col flex-wrap-reverse ">
                  <div className="flex flex-wrap-reverse h-[50px] relative w-full ml-4">
                    <input
                      className="h-full outline-none  pr-4 pl-12  w-full rounded-xl border border-gray-700 p-3 bg-blue-300 text-black  focus:pl-12 focus:border-[2px]"
                      type="text"
                      {...register("phone", { required: true })}
                      placeholder="Phone"
                    />
                    <i className="fas fa-phone-alt absolute top-1/2 left-[18px] text-black font-bold text-lg -translate-y-1/2 "></i>
                  </div>
                  {errors.phone && (
                    <p className="text-red-500">Phone is required</p>
                  )}
                </div>

                <div className="w-full m-4 flex flex-col flex-wrap-reverse ">
                  <div className="flex flex-wrap-reverse relative w-full ml-4 text-black">
                    <textarea
                      placeholder="Message"
                      name="message"
                      {...register("message", { required: true })}
                      className="min-h-[130px] rounded-xl outline-none  max-h-[230px] bg-blue-300 max-w-full min-w-full pl-12 pt-3 pr-5 border-[1px]  border-gray-700 focus:border-[2px]"
                    ></textarea>
                    <i className="absolute top-6 text-lg left-4 fas fa-comment-dots"></i>
                  </div>
                  {errors.message && (
                    <p className="text-red-500">Message is required</p>
                  )}
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
