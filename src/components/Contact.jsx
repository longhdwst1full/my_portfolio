import { motion } from "framer-motion";
const Contact = () => {
  return (
    <section className="bg-emerald-400 p-20 pb-10">
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

      <div className="max-w-[1200px] m-auto rounded-3xl bg-white flex shadow mt-10 p-10  justify-between items-center flex-wrap">
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

              <div className="relative m-4 h-full outline-none  pr-4 pl-12  w-full rounded-xl  p-3 bg-blue-300 text-black">
                <textarea
                  placeholder="Message"
                  name="message"
                  className="min-h-[130px] max-h-[230px] bg-transparent max-w-full border border-gray-700 min-w-full pt-3 pr-5 pl-12"
                ></textarea>
                <i className="absolute top-6 text-lg left-4 fas fa-comment-dots"></i>
              </div>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
