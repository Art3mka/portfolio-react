import type { JSX } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";
import { skills } from "../data/data";

const Skills = () => {
  const iconComponents: { [key: string]: JSX.Element } = {
    FaHtml5: <FaHtml5 />,
    FaCss3Alt: <FaCss3Alt />,
    FaJs: <FaJs />,
    FaReact: <FaReact />,
    FaNodeJs: <FaNodeJs />,
    SiTypescript: <SiTypescript />,
    SiMongodb: <SiMongodb />,
    SiExpress: <SiExpress />,
  };

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
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
