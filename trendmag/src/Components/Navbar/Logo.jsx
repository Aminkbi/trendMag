import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center w-full">
      <Link to={"/Home"}>
        <div className="text-center p-2">
          <h1 className="xs:text-xl ss:text-2xl sm:text-3xl md:text-4xl xl:text-6xl font-bold text-gray-800">
            Trend<span className="text-purple-600">Mag</span>
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
