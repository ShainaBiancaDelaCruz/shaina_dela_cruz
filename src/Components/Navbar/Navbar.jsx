import React from "react";
import Logo from "../../assets/logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";


const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "#home",
  },
  {
    id: 2,
    name: "Skills",
    link: "#skills",
  },
  {
    id: 3,
    name: "Projects",
    link: "#projects",
  },
  {
    id: 4,
    name: "Services",
    link: "#services",
  },
  {
    id: 5,
    name: "Contact",
    link: "#contact",
  }
];

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] bg-black bg-opacity-50 text-white shadow-md">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img src={Logo} alt="SHAINA Logo" className="h-16" />
            <p className="text-3xl">
              <span className="font-bold">HAINA</span>
            </p>
          </div>
          
          {/* Desktop Menu Section */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-3 md:gap-5">
              {NavLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="text-[17px] font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500"
                  >
                    {name}
                  </a>
                </li>
              ))}
              {/* Dark Mode Feature */}
           
            </ul>
          </nav>

          {/* Mobile View Sidebar */}
          <div className="md:hidden block">
            <div className="flex items-center gap-4">
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`${showMenu ? "block" : "hidden"} md:hidden`}>
          <nav className="fixed inset-0 bg-black p-4 transition-transform duration-500">
            <div className="flex justify-between items-center">
              {/* Logo Section for Mobile Menu */}
              <div className="flex items-center gap-3">
                <img src={Logo} alt="SHAINA Logo" className="h-16" />
                <p className="text-3xl">
                  <span className="font-bold">HAINA</span>
                </p>
              </div>
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer"
                size={30}
              />
            </div>
            <ul className="flex flex-col items-center justify-center h-full space-y-12 mt-4">
              {NavLinks.map(({ id, name, link }) => (
                <li key={id}>
                  <a
                    href={link}
                    className="text-xl font-semibold hover:text-primary transition-colors duration-500"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
