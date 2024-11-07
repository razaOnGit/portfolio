"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { AiFillLinkedin , AiOutlineGithub} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
          style={{ fontFamily: "'Courgette', cursive", textDecoration: "underline" }}
        >
          Raza
        </Link>

        <span className='navbar-text'>
            <div className="socail-icons flex gap-2 ">
            <a  rel="noopener noreferrer"className="w-[40px] h-[40px] flex justify-center items-center border-[1px] border-opacity-75 text-white hover:bg-white  border-white rounded-full  " href="https://www.linkedin.com/in/mdraza7/" target='_blank'>
                <AiFillLinkedin 
                className=' text-lg'/>
              </a>
              <a rel="noopener noreferrer" className="w-[40px] h-[40px] flex justify-center items-center border-[1px] border-opacity-75 border-white rounded-full  text-white  hover:bg-white  " href="https://github.com/razaOnGit" target='_blank'>               
               <AiOutlineGithub
                className=' text-lg'/>
              </a>
              <a rel="noopener noreferrer" className="w-[40px] h-[40px] flex justify-center items-center border-[1px] border-opacity-75 border-white rounded-full   text-white  hover:bg-white  " href="https://leetcode.com/u/the_razaOnLeetcode/" target='_blank'>
                <SiLeetcode
                className=' text-lg'/>
              </a>
            </div>
            </span>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
