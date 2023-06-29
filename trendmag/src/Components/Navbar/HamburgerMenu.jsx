import React from "react";

const HamburgerMenu = ({ toggleMenu }) => {
  return (
    <div className="xs:hidden p-2">
      <button
        className="text-gray-800 hover:text-black focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default HamburgerMenu;
