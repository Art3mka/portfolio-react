import type { JSX } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";
import type { Skill } from "../types";

const Skills = () => {
  const skills: Skill[] = [
    { name: "HTML5", level: 9, icon: "FaHtml5", color: "#E44D26" },
    { name: "CSS3", level: 9, icon: "FaCss3Alt", color: "#264DE4" },
    { name: "JavaScript", level: 8, icon: "FaJs", color: "#F0DB4F" },
    { name: "TypeScript", level: 7, icon: "SiTypescript", color: "#007ACC" },
    { name: "React", level: 8, icon: "FaReact", color: "#61DAFB" },
    { name: "Node.js", level: 7, icon: "FaNodeJs", color: "#68A063" },
    { name: "MongoDB", level: 6, icon: "SiMongodb", color: "#4DB33D" },
  ];

  const iconComponents: { [key: string]: JSX.Element } = {
    FaHtml5: <FaHtml5 />,
    FaCss3Alt: <FaCss3Alt />,
    FaJs: <FaJs />,
    FaReact: <FaReact />,
    FaNodeJs: <FaNodeJs />,
    SiTypescript: <SiTypescript />,
    SiMongodb: <SiMongodb />,
  };

  return (
    <section id="skills" className="py-16 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Мои навыки
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <SkillCard skill={skill} Icon={iconComponents[skill.icon].type} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
