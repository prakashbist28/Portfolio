import React from "react";
import { BiUser } from "react-icons/bi";
import { FaCode } from "react-icons/fa6";
import { SlFolderAlt, SlSpeech } from "react-icons/sl";
import { Link } from "react-scroll";

const Nav = () => {
  const navLinks = [
    { id: 1, to: "home", icon: <BiUser />, label: "Profile", offset: -200 },
    { id: 2, to: "tech", icon: <FaCode />, label: "Skills", offset: -200 },
    { id: 3, to: "work", icon: <SlFolderAlt />, label: "Projects", offset: -150 },
    { id: 4, to: "Contact", icon: <SlSpeech />, label: "Contact", offset: 30 },
  ];

  return (
    <nav className="fixed px-4 bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="relative">
        <div className="absolute bg-teal-800 blur-xl"></div>
        <div className="w-full mb-4 border-[1px] md:border-[2px] border-teal-400 bg-teal-900/60 h-[56px] md:h-[76px] lg:h-[96px] backdrop-blur-3xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white items-center">

          {navLinks.map(({ id, to, icon, label, offset }) => (
            <div key={id} className="flex borde flex-col items-center group relative">
              <Link
                to={to}
                activeClass="border-b-2 border-dashed border-teal-500  text-teal-500"
                smooth={true}
                spy={true}
                offset={offset}
                className="cursor-pointer w-[35px] h-[35px] md:w-[45px] md:h-[45px] justify-center flex items-center"
              >
                <span className="h-5 md:h-8 md:p-1  transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-2">
                  {icon}
                </span>
              </Link>
              <span className="absolute font-fifth border border-teal-500 -bottom-8 text-[10px] px-2 py-1 rounded-md bg-teal-950/90 text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-400 pointer-events-none">
                {label}
              </span>
            </div>
          ))}

        </div>
      </div>
    </nav>
  );
};

export default Nav;
