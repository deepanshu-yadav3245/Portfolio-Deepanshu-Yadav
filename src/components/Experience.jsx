// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import { motion } from 'framer-motion';

// import 'react-vertical-timeline-component/style.min.css';

// import { styles } from '../styles';
// import { experiences } from '../constants';
// import { SectionWrapper } from '../hoc';
// import { textVariant } from '../utils/motion';

// const ExperienceCard = ({ experience, index }) => (
//   <VerticalTimelineElement
//     contentStyle={{
//       background: 'rgba(29, 24, 54, 0.6)',
//       backdropFilter: 'blur(10px)',
//       WebkitBackdropFilter: 'blur(10px)',
//       color: '#fff',
//       boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
//       borderRadius: '15px',
//       transition: 'transform 0.3s ease-in-out',
//     }}
//     contentArrowStyle={{ borderRight: '7px solid #232631' }}
//     date={
//       <motion.div
//         initial={{ opacity: 0, y: -10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: index * 0.2 }}
//         className='text-sm text-gray-300'
//       >
//         {experience.date}
//       </motion.div>
//     }
//     iconStyle={{ background: experience.iconBg, boxShadow: '0 0 20px rgba(0,0,0,0.4)' }}
//     icon={
//       <motion.div
//         initial={{ scale: 0 }}
//         whileInView={{ scale: 1 }}
//         animate={{ y: [0, -5, 0] }}
//         transition={{
//           duration: 3,
//           repeat: Infinity,
//           repeatType: 'loop',
//           delay: index * 0.3,
//         }}
//         className='flex justify-center items-center w-full h-full'
//       >
//         <img
//           src={experience.icon}
//           alt={experience.company_name}
//           className='w-[60%] h-[60%] object-contain'
//         />
//       </motion.div>
//     }
//   >
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.2 }}
//       whileHover={{ scale: 1.02 }}
//       className="group"
//     >
//       <h3
//         className='text-[24px] font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text transition-all duration-500 group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:via-sky-400'
//       >
//         {experience.title}
//       </h3>

//       <p
//         className='text-[16px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-300 transition-all duration-500 group-hover:from-yellow-400 group-hover:via-pink-500 group-hover:to-red-400'
//         style={{ margin: 0 }}
//       >
//         {experience.company_name}
//       </p>
//     </motion.div>

//     <ul className='mt-5 list-disc ml-5 space-y-2'>
//       {experience.points.map((point, idx) => (
//         <motion.li
//           key={`experience-point-${idx}`}
//           className='text-white-100 text-[14px] pl-1 tracking-wider'
//           initial={{ opacity: 0, x: -10 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.4, delay: idx * 0.1 }}
//           whileHover={{ scale: 1.02, color: '#93c5fd' }}
//         >
//           {point}
//         </motion.li>
//       ))}
//     </ul>
//   </VerticalTimelineElement>
// );

// const Experience = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true }}>
//         <p className={`${styles.sectionSubText} text-purple-300`}>
//           From Learning to Building — sounds like growth
//         </p>
//         <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-yellow-400 via-green-400 to-blue-500 text-transparent bg-clip-text`}>
//           Practical Experience
//         </h2>
//       </motion.div>

//       <div className='mt-20 flex flex-col'>
//         <VerticalTimeline>
//           {experiences.map((experience, index) => (
//             <ExperienceCard key={index} index={index} experience={experience} />
//           ))}
//         </VerticalTimeline>
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Experience, 'work');

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

// 🎯 Unique hover style generator based on card index
const getHoverEffect = (index) => {
  const effects = [
    { scale: 1.05, rotate: 2 },
    { scale: 1.02, rotateX: 5 },
    { scale: 1.03, rotateY: 5 },
    { scale: 1.06, y: -10 },
    { scale: 1.04, x: 5 },
    { rotate: -3, scale: 1.03 },
    { scale: 1.05, rotateX: -5, rotateY: 3 },
  ];
  return effects[index % effects.length];
};

const ExperienceCard = ({ experience, index }) => {
  const hoverEffect = getHoverEffect(index);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'rgba(29, 24, 54, 0.6)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        color: '#fff',
        boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
        borderRadius: '15px',
        transition: 'all 0.4s ease-in-out',
      }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="text-sm text-gray-300"
        >
          {experience.date}
        </motion.div>
      }
      iconStyle={{
        background: experience.iconBg,
        boxShadow: '0 0 20px rgba(0,0,0,0.4)',
      }}
      icon={
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'loop',
            delay: index * 0.3,
          }}
          className="flex justify-center items-center w-full h-full"
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </motion.div>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        whileHover={{
          ...hoverEffect,
          boxShadow: '0 10px 30px rgba(0,255,255,0.3)',
        }}
        className="group transition-all duration-700"
      >
        <h3
          className="text-[24px] font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text transition-all duration-500 group-hover:from-blue-400 group-hover:via-green-400 group-hover:to-yellow-300"
        >
          {experience.title}
        </h3>

        <p
          className="text-[16px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-300 blur-[0.3px] opacity-90 transition-all duration-500 group-hover:blur-0 group-hover:opacity-100 group-hover:text-white"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </motion.div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, idx) => (
          <motion.li
            key={`experience-point-${idx}`}
            className="text-white-100 text-[14px] pl-1 tracking-wide transition-all duration-300"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{
              scale: 1.05,
              color: '#38bdf8',
              textShadow: '0 0 5px rgba(56, 189, 248, 0.6)',
            }}
          >
            {point}
          </motion.li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className={`${styles.sectionSubText} text-purple-300`}>
          From Learning to Building — sounds like growth
        </p>
        <h2
          className={`${styles.sectionHeadText} bg-gradient-to-r from-yellow-400 via-green-400 to-blue-500 text-transparent bg-clip-text`}
        >
          Practical Experience
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} index={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
