import type { IconType } from "react-icons";
import type { Skill } from "../types";

interface SkillCardProps {
  skill: Skill;
  Icon: IconType;
}

const SkillCard = ({ skill, Icon }: SkillCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1 hover:shadow-lg">
      <div className={`text-4xl mb-4 flex justify-center items-center`} style={{ color: skill.color }}>
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
        <div
          className="h-2 rounded-full"
          style={{
            width: `${skill.level * 10}%`,
            backgroundColor: skill.color,
          }}
        />
      </div>
      <span className="text-sm text-gray-600">{skill.level}/10</span>
    </div>
  );
};

export default SkillCard;
