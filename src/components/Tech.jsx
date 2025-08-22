
// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";
// import { motion } from "framer-motion";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.1,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// };

// const Tech = () => {
//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       className="flex flex-row flex-wrap justify-center gap-10"
//     >
//       {technologies.map((technology, index) => (
//         <motion.div
//           key={technology.name}
//           custom={index}
//           variants={fadeInUp}
//           whileHover={{
//             scale: 1.1,
//             rotate: [0, 5, -5, 0],
//             boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)",
//           }}
//           transition={{
//             duration: 0.6,
//             ease: "easeInOut",
//             type: "tween",
//           }}
//           className="relative w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-[#232323] to-[#2f2f2f] shadow-md group"
//         >
//           <BallCanvas icon={technology.icon} />
//           <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//             {technology.name}
//           </div>
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// };

// // export default SectionWrapper(Tech, "");



import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";

// Animation variant for fade-up effect
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// Tech section component
const Tech = () => {
  return (
    <>
      {/* 🔥 Professional Section Title */}
    <h2 className="text-center text-[28px] sm:text-[32px] font-bold bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 bg-clip-text text-transparent mb-10">
  ⚙️ My Tech Arsenal & DevOps Toolkit
</h2>


      {/* 🧩 Tech Icons Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap justify-center gap-8 sm:gap-10"
      >
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            custom={index}
            variants={fadeInUp}
            whileHover={{
              scale: 1.12,
              rotate: [0, 4, -4, 0],
              boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              type: "tween",
            }}
            className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-br from-[#1e1e1e] to-[#292929] shadow-xl group"
          >
            {/* Tech icon sphere */}
            <BallCanvas icon={technology.icon} />

            {/* Tooltip */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#111] text-white text-[11px] px-2 py-[2px] rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
              {technology.name}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
