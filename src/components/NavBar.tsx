const NavBar = () => {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-gray-800">
          Портфолио
        </a>

        <div className="flex items-center space-x-6">
          <a href="#skills" className="text-gray-600 hover:text-primary-light transition">
            Навыки
          </a>
          <a href="#projects" className="text-gray-600 hover:text-primary-light transition">
            Проекты
          </a>
          <a href="#contact" className="text-gray-600 hover:text-primary-light transition">
            Контакты
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
