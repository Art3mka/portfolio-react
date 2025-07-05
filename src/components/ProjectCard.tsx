import { motion } from "framer-motion";
import React from "react";
import { SiGithub } from "react-icons/si";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  icons: { [key: string]: React.ReactNode };
}

const ProjectCard = ({ project, icons }: ProjectCardProps) => {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col min-h-[20rem]"
    >
      <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
        <span className="text-white text-xl font-bold">{project.title}</span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-3 mb-6 mt-auto">
          {project.technologies.map((tech) => (
            <span key={tech} className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm">
              {icons[tech] || null}
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 ">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <SiGithub /> Код
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
