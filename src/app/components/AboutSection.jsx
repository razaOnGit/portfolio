"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="list-disc pl-2">
        <h3 className="text-xl font-semibold mb-2 text-purple-500">Technical Skills</h3>
        <ul className="list-disc pl-4 mb-4">
          <li>Data Structures and Algorithms</li>
         <li> <span className="text-[#ADB7BE]">Frontend :</span> HTML, CSS, JavaScript, React.js</li>
          <li><span className="text-[#ADB7BE]">Backend :</span> Node.js, Express.js</li>
          <li><span className="text-[#ADB7BE]">Database</span> MongoDB</li>
          <li><span className="text-[#ADB7BE]">Programming Languages :</span> C, C++, Python</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 text-purple-500">Core CS Skills</h3>
        <ul className="list-disc pl-4 mb-4">
          <li>Operating Systems</li>
          <li>Database Management Systems (DBMS)</li>
          <li>Object-Oriented Programming (OOP)</li>
          <li>Computer Networks</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 text-purple-500">Tools & Version Control</h3>
        <ul className="list-disc pl-4">
          <li>Git & GitHub</li>
          <li>Postman</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="space-y-4">
        <li className="border-l-2 border-primary-500 pl-4">
          <h3 className="text-lg font-semibold">Bachelor of Technology (B.TECH)</h3>
          <p className="text-[#ADB7BE]">Government Engineering College, Siwan</p>
          <p className="text-sm text-primary-500">BEU, Patna | 2020 - 2024</p>
          <p className="text-sm">CGPA: 7.89</p>
        </li>
        
        <li className="border-l-2 border-primary-500 pl-4">
          <h3 className="text-lg font-semibold">12th Grade (PCM)</h3>
          <p className="text-[#ADB7BE]">J.D Public School</p>
          <p className="text-sm text-primary-500">CBSE | 2017 - 2019</p>
          <p className="text-sm">Percentage: 69%</p>
        </li>
        
        <li className="border-l-2 border-primary-500 pl-4">
          <h3 className="text-lg font-semibold">10th Grade</h3>
          <p className="text-[#ADB7BE]">Holy Kids International School</p>
          <p className="text-sm text-primary-500">CBSE | 2005 - 2017</p>
          <p className="text-sm">CGPA: 10.0</p>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="space-y-4">
        <ul className="grid gap-4">
          <li className="bg-[#1a1a1a] p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all">
            <div className="flex justify-between items-start">
              <h4 className="text-lg font-semibold text-purple-400">Cloud Computing with AWS</h4>
              <span className="text-sm text-purple-300/60">July 2022</span>
            </div>
            <p className="text-[#ADB7BE] text-sm mt-1">Internshala</p>
          </li>

          <li className="bg-[#1a1a1a] p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all">
            <div className="flex justify-between items-start">
              <h4 className="text-lg font-semibold text-purple-400">Intro to Cybersecurity</h4>
              <span className="text-sm text-purple-300/60">Nov 2022</span>
            </div>
            <p className="text-[#ADB7BE] text-sm mt-1">CISCO</p>
          </li>

          <li className="bg-[#1a1a1a] p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all">
            <div className="flex justify-between items-start">
              <h4 className="text-lg font-semibold text-purple-400">Intro to Network</h4>
              <span className="text-sm text-purple-300/60">June 2023</span>
            </div>
            <p className="text-[#ADB7BE] text-sm mt-1">CISCO</p>
          </li>

          <li className="bg-[#1a1a1a] p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all">
            <div className="flex justify-between items-start">
              <h4 className="text-lg font-semibold text-purple-400">Arduino Training</h4>
              <span className="text-sm text-purple-300/60">Feb 2023</span>
            </div>
            <p className="text-[#ADB7BE] text-sm mt-1">Spoken Tutorial Lab, IIT Bombay</p>
          </li>

          <li className="bg-[#1a1a1a] p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all">
            <div className="flex justify-between items-start">
              <h4 className="text-lg font-semibold text-purple-400">Developer Superset</h4>
              <span className="text-sm text-purple-300/60">Jan 2024</span>
            </div>
            <p className="text-[#ADB7BE] text-sm mt-1">Salesforce</p>
          </li>
        </ul>
      </div>
    ),
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-12 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Modern Image Container with Animation */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          <div className="relative">
            <Image 
              src="/images/raza-image.jpg" 
              width={500} 
              height={500} 
              className="rounded-lg shadow-2xl transform group-hover:scale-105 transition duration-500"
              alt="Raza's Profile"
            />
          </div>
        </div>

        {/* Modern Content Container */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            
            <div className="relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-transparent"></div>
              <p className="text-base lg:text-lg pl-6 text-gray-300 leading-relaxed">
                I am a <span className="text-purple-400 font-semibold">full stack web developer</span> with a passion 
                for creating interactive and responsive web applications. My expertise includes:
              </p>
              
              <ul className="mt-4 pl-6 space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">▹</span>
                  Building with JavaScript, React, and Node.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">▹</span>
                  Creating responsive and intuitive UIs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">▹</span>
                  Developing RESTful APIs and backend services
                </li>
              </ul>
              
              <p className="mt-4 pl-6 text-gray-300">
                I'm always eager to learn new technologies and collaborate with teams 
                to build exceptional digital experiences.
              </p>
            </div>
          </div>

          {/* Tab Buttons and Content remain unchanged */}
          <div className="flex flex-col sm:flex-row gap-2 mt-8">
            {TAB_DATA.map((tabItem) => (
              <button
                key={tabItem.id}
                onClick={() => handleTabChange(tabItem.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium 
                  ${tab === tabItem.id 
                    ? "bg-purple-500 text-white shadow-lg shadow-purple-500/50"
                    : "bg-[#1a1a1a] text-[#ADB7BE] hover:bg-[#2a2a2a] hover:text-white"
                  } transition-all duration-300 ease-in-out
                  border border-purple-500/20 hover:border-purple-500/50
                  flex items-center justify-center gap-2`}
              >
                {/* Add icons based on tab type */}
                {tabItem.id === "skills" && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
                {tabItem.id === "education" && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7" />
                  </svg>
                )}
                {tabItem.id === "certifications" && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                )}
                {tabItem.title}
              </button>
            ))}
          </div>

          {/* Add animation to tab content */}
          <div className="mt-8 transition-all duration-300 ease-in-out">
            <div className={`transform ${isPending ? 'scale-95 opacity-75' : 'scale-100 opacity-100'}`}>
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
