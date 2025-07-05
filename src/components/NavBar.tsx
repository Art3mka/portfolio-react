const NavBar = () => {
  return (
    <nav className="bg-white shadow-sm py-4 fixed top-0 left-0 right-0 z-50">
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
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
