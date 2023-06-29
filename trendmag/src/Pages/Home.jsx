import React, { useEffect } from "react";
import Blogs from "../Components/Blogs/Blogs";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full flex items-center flex-col justify-between min-h-screen">
      <div className="flex flex-col max-w-[2000px] items-center">
        <Blogs />
      </div>
    </div>
  );
};

export default Home;
