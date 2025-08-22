
// import { Tilt } from 'react-tilt';
// import { motion } from 'framer-motion';
// import { styles } from '../styles';
// import { services } from '../constants';
// import { fadeIn, textVariant } from '../utils/motion';
// import { SectionWrapper } from '../hoc';
// import { useEffect, useState } from 'react';

// const Typewriter = ({ text = "", speed = 80 }) => {
//   const [displayed, setDisplayed] = useState("");
//   useEffect(() => {
//     let i = 0;
//     const interval = setInterval(() => {
//       setDisplayed(text.slice(0, i));
//       i++;
//       if (i > text.length) clearInterval(interval);
//     }, speed);
//     return () => clearInterval(interval);
//   }, [text, speed]);
//   return <h2 className={`${styles.sectionHeadText} interactive-heading`}>{displayed}</h2>;
// };

// const ServiceCard = ({ index, title, icon }) => {
//   let description = "Delivering high-quality tech solutions with scalable architecture.";
//   if (title.toLowerCase().includes("web")) {
//     description = "Crafting modern and responsive websites using React & TailwindCSS.";
//   } else if (title.toLowerCase().includes("design")) {
//     description = "Designing visually appealing interfaces with tools like Figma & Illustrator.";
//   } else if (title.toLowerCase().includes("data")) {
//     description = "Handling structured data with MongoDB and Express for efficient storage.";
//   } else if (title.toLowerCase().includes("devops")) {
//     description = "Automating deployments and pipelines with GitHub Actions & Linux.";
//   }

//   return (
//     <Tilt className="xs:w-[250px] w-full">
//       <motion.div
//         variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
//         className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:scale-[1.05] transition-all duration-500"
//       >
//         <div
//           options={{
//             max: 45,
//             scale: 1,
//             speed: 450,
//           }}
//           className="bg-tertiary rounded-[20px] py-5 px-6 min-h-[300px] flex flex-col justify-center items-center text-center"
//         >
//           <img src={icon} alt={title} className="w-16 h-16 object-contain mb-4" />
//           <h3 className="text-white text-[20px] font-bold mb-2">{title}</h3>
//           <p className="text-[14px] leading-[22px] hover:scale-[1.02] transition-all duration-300">
//             {description}
//           </p>
//         </div>
//       </motion.div>
//     </Tilt>
//   );
// };

// const About = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} interactive-text cursor-pointer`}>
//           Introduction
//         </p>
//         <Typewriter text="Services" speed={80} />
//       </motion.div>

//       <motion.p
//         variants={fadeIn('', '', 0.1, 1)}
//         className="mt-4 text-[17px] max-w-3xl leading-[30px] interactive-paragraph"
//       >
//         I specialize in frontend development using tools like React and Tailwind to build responsive,
//         user-friendly websites. I'm also learning backend technologies to grow into a full-stack developer.
//         Alongside this, I'm exploring DevOps — focusing on automation, deployment, and system infrastructure
//         to become a well-rounded software engineer.
//       </motion.p>

//       <div className="mt-20 flex flex-wrap gap-20">
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(About, 'about');
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { useEffect, useState } from 'react';

const Typewriter = ({ text = "", speed = 80 }) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return <h2 className={`${styles.sectionHeadText} interactive-heading`}>{displayed}</h2>;
};

const ServiceCard = ({ index, title, icon }) => {
  let description = "Delivering high-quality tech solutions with scalable architecture.";
  if (title.toLowerCase().includes("web")) {
    description = "Crafting modern and responsive websites using React & TailwindCSS.";
  } else if (title.toLowerCase().includes("design")) {
    description = "Designing visually appealing interfaces with tools like Figma & Illustrator.";
  } else if (title.toLowerCase().includes("data")) {
    description = "Handling structured data with MongoDB and Express for efficient storage.";
  } else if (title.toLowerCase().includes("devops")) {
    description = "Automating deployments and pipelines with GitHub Actions & Linux.";
  }

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.3 * index, 0.75)}
        className="group w-full bg-gradient-to-br from-[#2e2e2e] via-[#1f1f1f] to-[#121212] p-[2px] rounded-[20px] shadow-xl transition-all duration-500 hover:shadow-[0_0_30px_#00ffe5]"
      >
        <div
          options={{
            max: 25,
            scale: 1.05,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-6 px-6 min-h-[300px] flex flex-col justify-center items-center text-center transition-all duration-500 transform group-hover:-translate-y-2 group-hover:scale-[1.03]"
        >
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain mb-4 transition-transform duration-500 group-hover:rotate-[20deg]"
          />
          <h3 className="text-white text-[20px] font-bold mb-2 transition-colors duration-300 group-hover:text-[#00ffe5]">
            {title}
          </h3>
          <p className="text-[14px] leading-[22px] text-gray-300 group-hover:text-white transition-all duration-500">
            {description}
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} interactive-text cursor-pointer`}>
          Introduction
        </p>
        <Typewriter text="Services" speed={80} />
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-[18px] font-sans font-[400] tracking-wide max-w-3xl leading-[28px] text-gray-300"
      >
        👋 Hey there! I'm a passionate <span className="text-white font-medium">Frontend Developer</span> who loves building clean, responsive, and dynamic user interfaces using <span className="text-white font-medium">React</span> and <span className="text-white font-medium">TailwindCSS</span>. <br /><br />
        💻 I'm actively expanding my skills into the backend world — diving into <span className="text-white font-medium">Node.js</span>, <span className="text-white font-medium">Express</span>, and <span className="text-white font-medium">MongoDB</span> to become a complete full-stack developer. <br /><br />
        ⚙️ On top of that, I’m deeply interested in <span className="text-white font-medium">DevOps</span> — automating tasks, creating CI/CD pipelines, working with <span className="text-white font-medium">Docker</span>, and streamlining deployments with <span className="text-white font-medium">GitHub Actions</span> and <span className="text-white font-medium">Linux</span>. <br /><br />
        🚀 My mission is simple: Build powerful applications and streamline development workflows for better performance and reliability.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
