import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-purple-600">
      <nav className="bg-purple-400 w-full h-[60px] flex flex-row gap-130 ">
        <img
          className="w-[50px] h-[50px] rounded-full m-2 ml-2 pb-1 ring-2 ring-amber-300"
          src="../logo.webp"
          alt=""
        />
        <div className="flex flex-row justify-center items-center gap-15">
          <Link className="cursor-pointer text-xl" to="/">
            <lord-icon
              src="https://cdn.lordicon.com/wmwqvixz.json"
              trigger="hover"
            ></lord-icon>
          </Link>
          <Link className="cursor-pointer text-xl" to="/about">
            <lord-icon
              src="https://cdn.lordicon.com/jnzhohhs.json"
              trigger="hover"
            ></lord-icon>
          </Link>
          <Link className="cursor-pointer text-xl" to="/contact">
            <lord-icon
              src="https://cdn.lordicon.com/srsgifqc.json"
              trigger="hover"
            ></lord-icon>
          </Link>
          <Link className="cursor-pointer text-xl" to="/blogs">
            <lord-icon
              src="https://cdn.lordicon.com/depeqmsz.json"
              trigger="hover"
            ></lord-icon>
          </Link>
          <Link className="cursor-pointer text-xl" to="/service">
            <lord-icon
              src="https://cdn.lordicon.com/ojnjgkun.json"
              trigger="hover"
            ></lord-icon>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
