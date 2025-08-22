// import React,{useEffect,useState} from 'react'
// import { Link } from 'react-router-dom'
// import {styles} from '../styles';
// import {navLinks} from '../constants'
// import {logo,menu ,close } from '../assets'
// // import { li } from 'framer-motion/client';


// const Navbar = () => {
//    const [active,setActive] = useState("");
//    const [toggle,setToggle] = useState(false);
   
//   return (
//     <nav className={`${styles.paddingX} w-full flex 
//      items-center py-5 fixed top-0 z-20
//       bg-primary`}>    

//       <div className='w-full flex justify-between
//       items-center max-w-7xl mx-auto'>
//         <Link to="/"
//               className='flex items-center gap-2'
//               onClick={() => {
//                 setActive("");
//                 window.scrollTo(0,0);
//               }}
//         >
//          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
//           <p className='text-white text-[18px] font-bold cursor-pointer flex '> Deepanshu yadav <span className='sm:block hidden'></span> </p>
//         </Link>
//         <ul className='list-none hidden sm:flex flex-row gap-10 '>
//           {navLinks.map((link) => (
//              <li key={link.id} className={`${
//               active === link.title
//                 ? "text-white"
//                 : "text-secondary"
//              } hover:text-white text-[18px] font-medium cursor-pointer`}
//              onClick={() => setActive(link.title)}
//              >

//                 <a href={`#${link.id}`}>{link.title}</a>
//              </li>
//           ))}
//         </ul>



//         <div className='sm:hidden flex flex-1 justify-end items-center'>
//             <img src={toggle? close: menu} alt="Menu" className='w-[28px] h-[28px] object-contain cursor-pointer ' onClick={() => setToggle(!toggle)} />
//         </div>

//   <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
//       <ul className='list-none flex justify-end items-start flex-col gap-4'>
//           {navLinks.map((link) => (
//              <li key={link.id} className={`${
//               active === link.title
//                 ? "text-white"
//                 : "text-secondary"
//              }font-poppins font-medium cursor-pointer text-[16px]`}
//              onClick={() => {
//               setToggle(!toggle);
//               setActive(link.title);
//             }}
//              >

//                 <a href={`#${link.id}`}>{link.title}</a>
//              </li>
//           ))}
//         </ul>

//   </div>

//       </div>                   
//     </nav>
//   )
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "light" ? false : true;
  });

  const [showIcons, setShowIcons] = useState(false);
  const menuRef = useRef(null);

  const handleLinkClick = (id, title) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(title);
      setToggle(false);
    }
  };

  useEffect(() => {
    const outsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", outsideClick);
    return () => document.removeEventListener("mousedown", outsideClick);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.body.className = darkMode ? "bg-[#050816] text-white" : "bg-white text-black";
  }, [darkMode]);

  // ✅ NEW: About section visibility logic
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      setShowIcons(inView);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getGlowColor = (title) => {
    switch (title.toLowerCase()) {
      case "about":
        return "text-sky-400 hover:text-white hover:drop-shadow-[0_0_6px_#38bdf8]";
      case "work":
        return "text-pink-400 hover:text-white hover:drop-shadow-[0_0_6px_#f472b6]";
      case "contact":
        return "text-emerald-400 hover:text-white hover:drop-shadow-[0_0_6px_#34d399]";
      default:
        return darkMode ? "text-white" : "text-black";
    }
  };

  const bgColor = darkMode ? "bg-primary" : "bg-white";

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${bgColor} transition-all duration-300`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

        {/* Logo + Name */}
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className={`relative cursor-pointer text-[18px] font-bold transition-colors duration-300
            ${darkMode ? 'text-[#7dd3fc] hover:text-white hover:drop-shadow-[0_0_6px_#7dd3fc]' : 'text-blue-600 hover:text-blue-500 hover:drop-shadow-[0_0_6px_#3b82f6]'}
            after:content-[''] after:absolute after:w-0 after:h-[2px] after:${darkMode ? 'bg-white' : 'bg-black'} after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300`}>
            Deepanshu Yadav
          </p>
        </Link>

        {/* Nav Links + Contact Icons */}
        <ul className='list-none hidden sm:flex flex-row gap-8 items-center'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`relative cursor-pointer text-[18px] font-medium transition-all duration-300
                ${getGlowColor(link.title)}
                after:content-[''] after:absolute after:w-0 after:h-[2px] after:${darkMode ? 'bg-white' : 'bg-black'}
                after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300`}
              onClick={() => handleLinkClick(link.id, link.title)}
            >
              {link.title}
            </li>
          ))}

          {/* ✅ WhatsApp & Call Icons (appear only when About is visible) */}
          <div className={`flex items-center gap-3 transition-all duration-500 ${showIcons ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <motion.a
              href="https://wa.me/918765432100"
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp"
              initial={{ y: 0 }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full shadow-md backdrop-blur-sm bg-green-600/80 hover:bg-green-700"
            >
              <FaWhatsapp className="text-white text-[18px]" />
            </motion.a>

            <motion.a
              href="tel:+918765432100"
              title="Call Me"
              rel="noopener noreferrer"
              initial={{ y: 0 }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full shadow-md backdrop-blur-sm bg-blue-600/80 hover:bg-blue-700"
            >
              <FaPhoneAlt className="text-white text-[16px]" />
            </motion.a>
          </div>
        </ul>

        {/* Mobile Menu Button */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt="Menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          ref={menuRef}
          className={`${!toggle ? 'hidden' : 'flex'} p-6 ${darkMode ? 'black-gradient' : 'bg-gray-100'} absolute top-20 right-4 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-md`}
        >
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`text-[16px] font-medium font-poppins transition-colors duration-300 
                  ${getGlowColor(link.title)}`}
                onClick={() => handleLinkClick(link.id, link.title)}
              >
                {link.title}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
