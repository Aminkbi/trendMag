import { React, useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = (e) => {
    setIsMenuOpen(!isMenuOpen);
  };
  const linkStyles =
    "text-blue-600 hover:text-black sm:text-lg md:text-2xl xl:text-3xl font-bold ";
  const liNames = ["Home", "Categories", "About", "Contact"];
  const renderList = liNames.map((liName) => (
    <li key={liName}>
      <Link to={`/${liName.toLowerCase()}`} className={linkStyles}>
        {liName}
      </Link>
    </li>
  ));

  return (
    <div className="w-full items-center flex flex-col xs:h-12 ss:h-14 sm:h-16 md:h-24 z-10 bg-slate-200 drop-shadow-lg">
      <div className="flex justify-between items-center w-full h-full md:max-w-[2000px] px-4">
        <Logo />
        <DesktopMenu renderList={renderList} />
        <HamburgerMenu toggleMenu={toggleMenu} />
      </div>
      <MobileMenu renderList={renderList} isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default Navbar;
