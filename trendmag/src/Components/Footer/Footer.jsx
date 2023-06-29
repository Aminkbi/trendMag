import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const fontStyles = "sm:text-lg md:text-2xl xl:text-3xl";
  return (
    <footer className="w-full bg-gray-800 text-gray-300 py-4 mt-auto text-center">
      <div className="md:max-w-[2000px] p-3 mx-auto flex flex-wrap items-center justify-between xl:text-2xl">
        <div className="flex flex-col mb-4 md:mb-0 md:w-1/4 ">
          <h3 className="text-lg xl:text-4xl font-bold mb-2 text-red-500">
            Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col mb-4 md:mb-0 md:w-1/4 ">
          <Link to="/categories">
            <h3 className="text-lg font-bold mb-2 xl:text-4xl text-red-500">
              Categories
            </h3>
          </Link>
          <ul className="space-y-2">
            <li>
              <Link to="/categories/technology" className="hover:text-gray-400">
                Technology
              </Link>
            </li>
            <li>
              <Link to="/categories/science" className="hover:text-gray-400">
                Science
              </Link>
            </li>
            <li>
              <Link
                to="/categories/entertainment"
                className="hover:text-gray-400"
              >
                Entertainment
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col mb-4 md:mb-0 md:w-1/4 ">
          <h3 className="text-lg font-bold mb-2 xl:text-4xl text-red-500">
            Social Media
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Amin's Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
