import { motion } from "framer-motion";
import { TiHtml5, TiCss3 } from "react-icons/ti";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "linear",
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className=" border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className=" my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className=" flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className=" border-4 border-neutral-800 rounded-2xl p-4"
        >
          <TiHtml5 className=" text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className=" border-4 border-neutral-800 rounded-2xl p-4"
        >
          <TiCss3 className=" text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className=" border-4 border-neutral-800 rounded-2xl p-4"
        >
          <TbBrandJavascript className=" text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className=" border-4 border-neutral-800 rounded-2xl p-4"
        >
          <BiLogoTailwindCss className=" text-7xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className=" border-4 border-neutral-800 rounded-2xl p-4"
        >
          <BiLogoNodejs className=" text-7xl text-green-500" />{" "}
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className=" border-4 border-neutral-800 rounded-2xl p-4"
        >
          <FaReact className=" text-7xl text-cyan-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
