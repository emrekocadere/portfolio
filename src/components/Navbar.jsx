const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0d0d14]/90 backdrop-blur-md border-b border-primary-500/15 z-50 py-4">
      <div className="max-w-[1100px] mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold font-mono flex items-center gap-0.5">
          <span className="text-primary-500">{'<'}</span>
          <span className="text-gray-100">Emre</span>
          <span className="text-primary-500">{'/>'}</span>
        </a>
        
        <ul className="flex gap-8 items-center">
          <li>
            <a href="#about" className="text-gray-400 font-medium text-[15px] hover:text-gray-100 transition-colors relative group">
              About
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all"></span>
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-400 font-medium text-[15px] hover:text-gray-100 transition-colors relative group">
              Projects
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all"></span>
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-400 font-medium text-[15px] hover:text-gray-100 transition-colors relative group">
              Contact
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
