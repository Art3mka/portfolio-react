import { motion } from "framer-motion";
import { FaTelegram, FaGithub, FaLinkedin } from "react-icons/fa";

import type { ContactInfo } from "../types";

const Contact = () => {
  const socialLinks: ContactInfo[] = [
    { icon: <FaGithub className="text-2xl" />, link: "https://github.com/Art3mka", name: "GitHub", color: "#000000" },
    {
      icon: <FaLinkedin className="text-2xl" />,
      link: "https://www.linkedin.com/in/artem-shein-054262247",
      name: "LinkedIn",
      color: "#0077B5",
    },
    { icon: <FaTelegram className="text-2xl" />, link: "https://t.me/rtq_shein", name: "Telegram", color: "#2AABEE" },
  ];

  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь со мной</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Есть вопросы или предложения? Напишите мне, и я отвечу в ближайшее время.
          </p>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="">
              <h4 className="text-xl font-bold mb-4 text-center">Социальные сети</h4>
              <div className="flex gap-4 justify-center">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    aria-label={social.name}
                    style={{ color: social.color }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
