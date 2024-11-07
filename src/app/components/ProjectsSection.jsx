"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A personal portfolio website built with React, showcasing projects, skills, and an interactive contact form.",
    image: "/images/projects/1a.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Food Ordering Application",
    description: " Authentication and CRUD functionality.",
    image: "/images/projects/a2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/razaOnGit/GoFood1",
    previewUrl: "https://gofood-raza.netlify.app/",
  },
  {
    id: 3,
    title: "Ai Gpt Clone Application",
    description: "Conversational AI application built to simulate chat interactions, featuring dynamic responses and customizable prompts.",
    image: "/images/projects/b.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/razaOnGit/chatgpt-clone",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "E-commerce Application",
    description: "Shopping_app_ description- Processing",
    image: "/images/projects/3.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },

 
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
