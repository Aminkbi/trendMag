import React from "react";

const MobileMenu = ({ renderList, isMenuOpen }) => {
  return (
    <div className={` xs:hidden block ${isMenuOpen ? "" : "hidden"}`}>
      <ul className="w-screen flex flex-col items-center py-4 bg-slate-200 space-y-5">
        {renderList}
      </ul>
    </div>
  );
};

export default MobileMenu;
