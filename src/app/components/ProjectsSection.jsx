"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Huellas De Esperanza",
    description: "Proyecto grupal con Nest y Next",
    image: "/images/projects/Huellas.png",
    tag: ["Todos", "Grupal"],
    gitUrl: "https://github.com/mauro8778/huellas",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Ecommerce",
    description: "Proyecto venta de celulares con Express y React",
    image: "/images/projects/ecommerce.png",
    tag: ["Todos", "Individual"],
    gitUrl: "https://github.com/pi-rym/PM4-Jongabee",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Turnos",
    description: "Gestor de turnos",
    image: "/images/projects/turnos.png",
    tag: ["Todos", "Individual"],
    gitUrl: "https://github.com/pi-rym/PM3-Jongabee",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Pelis",
    description: "Posteo de peliculas",
    image: "/images/projects/pelis.png",
    tag: ["Todos", "Individual"],
    gitUrl: "https://github.com/pi-rym/PM2-Jongabee",
    previewUrl: "/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
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
        Mis Proyectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Grupal"
          isSelected={tag === "Grupal"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Individual"
          isSelected={tag === "Individual"}
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
