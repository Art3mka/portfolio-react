import { useState, type JSX } from "react";
import { motion } from "framer-motion";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiReact, SiBootstrap } from "react-icons/si";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/data";

type Filter = "Все" | "Frontend" | "FullStack" | "React" | "TypeScript" | "Node.js";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("Все");

  const filters = ["Все", "React", "Express", "MongoDB", "TypeScript", "Node.js"];

  const filteredProjects =
    activeFilter === "Все" ? projects : projects.filter((project) => project.technologies.includes(activeFilter));

  const technologyIcons: Record<string, JSX.Element> = {
    React: <SiReact className="text-blue-500" />,
    TypeScript: <SiTypescript className="text-blue-600" />,
    "Node.js": <FaNodeJs className="text-green-500" />,
    Tailwind: <SiTailwindcss className="text-cyan-400" />,
    MongoDB: <SiMongodb className="text-green-600" />,
    Express: <SiExpress className="text-green-600" />,
    Bootstrap: <SiBootstrap className="text-purple-500" />,
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 dark:text-white"
        >
          Мои проекты
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto"
        >
          Вот несколько моих недавних проектов. Каждый из них был создан с использованием современных технологий.
        </motion.p>

        {/* Фильтры */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter as Filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Проекты */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} icons={technologyIcons} />
          ))}
        </div>

        {/* Кнопка "Показать еще" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Art3mka?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            Показать все проекты
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
