import { motion, type Variants } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import type { Contact } from "../types";
import developerPhoto from "../assets/1.webp";

const About = () => {
  const contacts: Contact[] = [
    { icon: <FaGithub />, link: "https://github.com/Art3mka", name: "GitHub", color: "#000000" },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/artem-shein-054262247",
      name: "LinkedIn",
      color: "#0077B5",
    },
    { icon: <FaTelegram />, link: "https://t.me/rtq_shein", name: "Telegram", color: "#2AABEE" },
    { icon: <HiOutlineMail />, link: "mailto:tema34468@gmail.com", name: "Email", color: "#D14836" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 -z-10" />

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="lg:w-1/2 order-1">
            <motion.div variants={itemVariants} className="mb-4 md:mb-6">
              <span className="text-lg text-blue-600">Привет, меня зовут</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Артем Шеин
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-700"
            >
              Веб-разработчик
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed"
            >
              Создаю современные, адаптивные веб-приложения с использованием React, TypeScript и Node.js. Увлечен
              созданием чистого, эффективного кода и интуитивно понятных пользовательских интерфейсов.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-12">
              <a
                href="#contact"
                className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-sm md:text-base"
              >
                Связаться со мной
              </a>
              <a
                href="#projects"
                className="px-4 py-2 md:px-6 md:py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:shadow-lg hover:-translate-y-1 hover:bg-gray-100 transition-all duration-300 text-sm md:text-base"
              >
                Посмотреть работы
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-3 md:gap-4">
              {contacts.map((contact, index) => (
                <div className="flex items-center justify-center bg-white rounded-full p-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={contact.name}
                    className="text-2xl md:text-3xl text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    style={{ color: contact.color }}
                  >
                    {contact.icon}
                  </a>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2 mt-8 lg:mt-0 order-2"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-xl lg:shadow-2xl">
                <img
                  src="https://placehold.co/600x400?text=Скоро+тут+будет+мое+фото)"
                  // src={developerPhoto}
                  alt="Артем Шеин - Веб-разработчик"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
