import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaYoutube,
} from 'react-icons/fa';

const FadeRotatingWords = ({ words, duration = 2000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(timer);
  }, [words.length, duration]);

  const techColors = {
    'MERN Stack': 'text-green-400',
    'Docker': 'text-blue-400',
    'Kubernetes': 'text-sky-400',
    'Jenkins': 'text-orange-400',
    'AWS': 'text-amber-400',
    'CI/CD': 'text-purple-400',
    'Linux': 'text-yellow-300',
    'GitHub Actions': 'text-gray-300',
  };

  return (
    <div className="flex items-center gap-1 h-[32px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className={`${techColors[words[index]] || 'text-white'} text-lg sm:text-xl font-bold`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4 }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      <span className="text-white text-xl animate-blink">|</span>
    </div>
  );
};

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/me/',
    icon: <FaLinkedin className="text-white text-[23px]" />,
    bg: 'bg-blue-600/80',
    title: 'LinkedIn',
  },
  {
    href: 'https://github.com/deepanshu-yadav3245',
    icon: <FaGithub className="text-white text-[23px]" />,
    bg: 'bg-gray-700/80',
    title: 'GitHub',
  },
  {
    href: 'https://instagram.com',
    icon: <FaInstagram className="text-white text-[23px]" />,
    bg: 'bg-pink-600/80',
    title: 'Instagram',
  },
  {
    href: 'mailto:someone@example.com',
    icon: <FaEnvelope className="text-white text-[23px]" />,
    bg: 'bg-yellow-500/80',
    title: 'Email',
  },
  {
    href: 'https://youtube.com',
    icon: <FaYoutube className="text-white text-[23px]" />,
    bg: 'bg-red-600/80',
    title: 'YouTube',
  },
];

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="relative w-full h-screen mx-auto">
      {/* 🌐 Social Icons */}
      <div className="absolute top-[100px] right-4 z-10 flex flex-col items-center gap-4 sm:gap-5">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            title={link.title}
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2 + index * 0.15,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className={`p-4 rounded-full shadow-xl backdrop-blur-sm ${link.bg} hover:brightness-125 glow`}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>

      {/* Hero Text */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <motion.div
            className="w-1 sm:h-80 h-40 violet-gradient origin-top"
            animate={{ height: ['160px', '320px', '160px'] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Deepanshu Yadav</span>
          </h1>

          <p className="text-[20px] font-light mt-2 text-white-100 max-w-lg leading-relaxed font-[Poppins]">
            I'm a
            <span className="text-cyan-400 font-medium hover:text-cyan-300 hover:scale-105 transition-all duration-200 cursor-pointer">
              &nbsp;web developer
            </span>
            &nbsp;who not only builds
            <span className="text-pink-400 font-medium hover:text-pink-300 hover:scale-105 transition-all duration-200 cursor-pointer">
              &nbsp;beautiful UIs
            </span>
            &nbsp;but is also diving deep into
            <span className="relative text-orange-400 font-medium group cursor-pointer">
              &nbsp;⚙️ DevOps
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-300 group-hover:w-full transition-all duration-300"></span>
            </span>
            &nbsp;—
            <span className="text-purple-400 font-medium hover:text-purple-300 hover:scale-105 transition-all duration-200 cursor-pointer">
              &nbsp;automating
            </span>
            ,
            <span className="text-sky-400 font-medium hover:text-sky-300 hover:scale-105 transition-all duration-200 cursor-pointer">
              &nbsp;scaling
            </span>
            , and
            <span className="text-emerald-400 font-medium hover:text-emerald-300 hover:scale-105 transition-all duration-200 cursor-pointer">
              &nbsp;🚀 deploying
            </span>
            &nbsp;with confidence.
          </p>

          <div className="mt-4">
            <FadeRotatingWords
              words={[
                "web developer ",
                "Docker",
                "Kubernetes",
                "Jenkins",
                "AWS",
                "CI/CD",
                "Linux",
                "GitHub Actions",
              ]}
              duration={2000}
            />
          </div>
        </div>
      </div>

      {/* 🧠 3D Canvas */}
      <ComputersCanvas />

      {/* 👤 DP Bottom Left with Circle, Pulse, Glow, and Modal */}
     {/* 👤 Profile Image with animated border */}
<div
  className="absolute bottom-4 left-4 z-30 group cursor-pointer"
  onClick={() => setShowModal(true)}
>
  <div className="dp-glow-border w-25 h-25 sm:w-28 sm:h-28 rounded-full flex items-center justify-center">
    <motion.img
      src="/dp.jpg"
      alt="Profile"
      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-[3px] border-white shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
    />
  </div>
  <p className="text-white text-[10px] sm:text-xs mt-1 text-center font-light opacity-80 group-hover:opacity-100 transition duration-300">
    ~ my dp • click me
  </p>
</div>


      {/* 🔍 Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex flex-col justify-center items-center"
          onClick={() => setShowModal(false)}
        >
          <motion.img
            src="/dp.jpg"
            alt="Enlarged"
            className="w-80 h-80 sm:w-[22rem] sm:h-[22rem] object-cover rounded-full border-4 border-white shadow-2xl mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="text-white text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold">Deepanshu Yadav</h2>
            <p className="text-sm sm:text-base text-white/80 mt-1">Web Developer & DevOps Enthusiast</p>
          </motion.div>
        </div>
      )}

      {/* 🔻 Scroll Down */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4">
        <a href="#about">
          <div className="w-[33px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
