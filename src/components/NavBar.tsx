const NavBar = () => {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-gray-800">
          Портфолио
        </a>

        <div className="flex items-center space-x-6">
          <a href="#skills" className="p-2 text-gray-600 hover:-translate-y-1 transition">
            Навыки
          </a>
          <a href="#projects" className="p-2 text-gray-600 hover:-translate-y-1 transition">
            Проекты
          </a>
          <a href="#contact" className="p-2 text-gray-600 hover:-translate-y-1 transition">
            Контакты
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
