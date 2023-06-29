import React from "react";

const DesktopMenu = ({ renderList }) => {
  return (
    <div className=" hidden xs:block p-2">
      <ul className="flex space-x-6">{renderList}</ul>
    </div>
  );
};

export default DesktopMenu;
