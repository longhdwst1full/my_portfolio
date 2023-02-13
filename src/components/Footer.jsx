import { motion } from "framer-motion";
export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="text-[#7f8daa] text-center font-semibold py-4 text-lg"
    >
      Make with <span className="px-1">❤️</span> Hoàng Đình Long
    </motion.div>
  );
}
