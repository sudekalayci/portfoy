import { Link } from "react-scroll";

const navItems = [
  { id: "home", label: "Anasayfa" },
  { id: "about", label: "Hakkımda" },
  { id: "projects", label: "Projeler" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "İletişim" },
];

const Navbar = () => {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl px-4">
      <nav className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full 
                      px-4 py-3 md:px-8 md:py-6 shadow-lg overflow-hidden">
        <ul className="flex justify-around md:justify-between items-center 
                       text-white text-xs sm:text-sm md:text-base font-medium">
          {navItems.map((item) => (
            <li key={item.id} className="relative group px-1 sm:px-2 md:px-4">
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                duration={500}
                activeClass="active-link"
                className="cursor-pointer transition-colors duration-300 hover:text-pink-400"
              >
                {item.label}
              </Link>
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-pink-400 
                               scale-x-0 group-hover:scale-x-100 transition-transform 
                               origin-left duration-300"></span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
