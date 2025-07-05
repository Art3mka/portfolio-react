import type { Project, Skill } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Интернет-магазин",
    description:
      "Полнофункциональный интернет-магазин с корзиной, фильтрами, авторизацией, распечаткой заказа и системой оплаты.",
    technologies: ["Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/Art3mka/Node-MVC",
  },
  {
    id: 2,
    title: "Портфолио",
    description: "Персональное портфолио с анимациями.",
    technologies: ["React", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/Art3mka/portfolio-react",
  },
  {
    id: 3,
    title: "Сервис для аренды автомобилей",
    description: "Сервис для аренды автомобилей с возможностью бронирования и оплаты онлайн.",
    technologies: ["React", "Node.js", "Bootstrap"],
    githubUrl: "https://github.com/Art3mka/car-rent",
  },
  {
    id: 4,
    title: "Музыкальный сервис",
    description: "Сервис для прослушивания музыки с возможностью создания плейлистов и добавления в избранное.",
    technologies: ["React", "Express", "MongoDB", "Bootstrap"],
    githubUrl: "https://github.com/Art3mka/mushub-front",
  },
  {
    id: 5,
    title: "Сервис для бронирования поездок",
    description: "Приложение для бронирования поездок в другие города.",
    technologies: ["React", "Bootstrap"],
    githubUrl: "https://github.com/Art3mka/mining_express-front",
  },
];

export const skills: Skill[] = [
  { name: "HTML5", level: 9, icon: "FaHtml5", color: "#E44D26" },
  { name: "CSS3", level: 9, icon: "FaCss3Alt", color: "#264DE4" },
  { name: "JavaScript", level: 8, icon: "FaJs", color: "#F0DB4F" },
  { name: "TypeScript", level: 7, icon: "SiTypescript", color: "#007ACC" },
  { name: "React", level: 8, icon: "FaReact", color: "#61DAFB" },
  { name: "Node.js", level: 7, icon: "FaNodeJs", color: "#68A063" },
  { name: "Express.js", level: 7, icon: "SiExpress", color: "#3e3a39" },
  { name: "MongoDB", level: 6, icon: "SiMongodb", color: "#4DB33D" },
];
