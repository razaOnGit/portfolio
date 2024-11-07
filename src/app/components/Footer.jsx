import React from "react";
import { AiFillLinkedin , AiOutlineGithub} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>md.raza khan</span>
        <div className="col-sm-6 text-center ml-auto">
                    <div className="socail-icons flex gap-2 ">
                        <a className="w-[40px] h-[40px] flex justify-center items-center border-[1px] border-opacity-75 text-white hover:bg-white  border-white rounded-full  " href="/">
                            <AiFillLinkedin 
                            className=' text-lg'/>
                        </a>
                        <a className="w-[40px] h-[40px] flex justify-center items-center border-[1px] border-opacity-75 border-white rounded-full  text-white  hover:bg-white  " href="/">                <AiOutlineGithub
                            className=' text-lg'/>
                        </a>
                        <a className="w-[40px] h-[40px] flex justify-center items-center border-[1px] border-opacity-75 border-white rounded-full   text-white  hover:bg-white  " href="/">
                            <SiLeetcode
                            className=' text-lg'/>
                        </a>
                        <p className="text-slate-600">All rights reserved.</p> 
                        </div>
                    </div>
                    </div>
                   
      
      
    </footer>
  );
};

export default Footer;
