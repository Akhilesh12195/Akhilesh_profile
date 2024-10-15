import { FaPython, FaAws, FaGitAlt } from "react-icons/fa";
import { SiPowerbi, SiTableau, SiMysql, SiJavascript,SiPandas, SiMicrosoftazure, SiNumpy, SiScikitlearn } from "react-icons/si";
import { AiOutlineCloudServer } from "react-icons/ai"; // Placeholder for Snowflake
import { GrMysql } from "react-icons/gr"; // MySQL
import { BsFileEarmarkExcel } from "react-icons/bs"; // Excel
import { DiJqueryLogo } from "react-icons/di"; // Placeholder for JSS

import { motion } from "framer-motion";

// Define the floating animation
const iconVariants = (duration) => ({
  intial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Python */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPython className="text-7xl text-blue-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGitAlt className="text-7xl text-blue-400" />
        </motion.div>
        
        {/* AWS */}
        <motion.div
          variants={iconVariants(2.6)}
          initial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaAws className="text-7xl text-orange-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.6)}
          initial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-orange-400" />
        </motion.div>

        {/* Power BI */}
        <motion.div
          variants={iconVariants(5.5)}
          initial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPowerbi className="text-7xl text-yellow-500" />
        </motion.div>

        {/* Snowflake (Placeholder icon) */}
        <motion.div
          variants={iconVariants(3)}
          initial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <AiOutlineCloudServer className="text-7xl text-blue-500" />
        </motion.div>

        {/* Tableau */}
        <motion.div
          variants={iconVariants(4.5)}
          initial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTableau className="text-7xl text-blue-600" />
        </motion.div>

        {/* JSS (Placeholder for JSS - using JQuery icon as placeholder) */}
        <motion.div
          variants={iconVariants(3.2)}
          initial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiJqueryLogo className="text-7xl text-blue-600" />
        </motion.div>

        {/* MySQL */}
        <motion.div
          variants={iconVariants(4.5)}
          initial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <GrMysql className="text-7xl text-orange-500" />
        </motion.div>

        {/* Pandas (Placeholder - no official icon in react-icons) */}
        <motion.div
          variants={iconVariants(3.5)}
          initial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPandas className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(3.5)}
          initial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-7xl text-green-500" />
        </motion.div>

        {/* Numpy */}
        <motion.div
          variants={iconVariants(2.8)}
          initial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiNumpy className="text-7xl text-green-500" />
        </motion.div>

        {/* Scikit-learn */}
        <motion.div
          variants={iconVariants(3.8)}
          initial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiScikitlearn className="text-7xl text-orange-500" />
        </motion.div>

        {/* Excel */}
        <motion.div
          variants={iconVariants(4.5)}
          initial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BsFileEarmarkExcel className="text-7xl text-green-600" />
        </motion.div>

        {/* Airflow (Placeholder for Airflow - as no official icon exists in react-icons) */}
        <motion.div
          variants={iconVariants(2.8)}
          initial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <AiOutlineCloudServer className="text-7xl text-purple-600" />
        </motion.div>

        {/* Azure Studio */}
        <motion.div
          variants={iconVariants(3.8)}
          initial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMicrosoftazure className="text-7xl text-blue-600" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
