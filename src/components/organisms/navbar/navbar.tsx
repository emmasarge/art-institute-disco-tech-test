import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as BurgerMenu } from "../../../assets/icons/burger_bar.svg";
import { ReactComponent as CloseIcon } from "../../../assets/icons/close.svg";

export const NavbarOrganism = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <nav className="navbar w-full flex  flex-shrink flex-row justify-around z-[100] sticky top-0 right-0 left-0  h-14 ">
      <div className="w-11/12  flex lg:pt-2 flex-row items-center justify-between">
        <div className=" w-auto ">
          <Link className="font-bold" to="/ " aria-label="home">
            <div>
              <h1 className="text-dark text-[1.25em] pt-2 font-light uppercase tracking-wider hover:italic transition duration-300 hover:duration-300 hover:scale-105 cursor-pointer">
                Art Insitute of Chicago
              </h1>
            </div>
          </Link>
        </div>
        <div className="flex w-auto">
          <div onClick={handleMenu} className="flex w-7 sm:w-8 z-50 ">
            {menuOpen ? (
              <div className=" md:ml-5 flex w-full ">
                <CloseIcon className="close_button" />
              </div>
            ) : (
              <div className="w-full flex z-50 cursor-pointer" >
                <BurgerMenu />
              </div>
            )}
          </div>
        </div>
        {menuOpen && (
          <div
            id="menu"
            className={`w-1/3 relative border-l-[5px] border-dark md:right-10 md: -ml-2 h-screen navbar-menu ${
              menuOpen ? "nav_active" : "nav_closing"
            }`}
          >
            <div
              onClick={closeMenu}
              className="h-[40vh] absolute w-8/12 pl-7 lg:pl-8 text-[1.05em] lg:text-[1.125em]  pt-8 flex-col flex justify-start items-start"
            >
              <Link
                className="text-dark  mt-[24%] font-light text-[1.125em] hover:bg-[#F1B417] hover:px-2 uppercase tracking-wide hover:italic transition duration-300 hover:duration-300 hover:scale-105 cursor-pointer"
                to="/"
                aria-label="home"
              >
                Home
              </Link>
              
              <Link
                className="text-dark font-light mt-4 text-[1.125em] hover:bg-[#F1B417] hover:px-2  uppercase tracking-wide hover:italic transition duration-300 hover:duration-300 hover:scale-105 cursor-pointer"
                to="#"
                aria-label="about"
              >
                About
              </Link>
              <Link
                className="text-dark font-light mt-4 text-[1.125em] hover:bg-[#F1B417] hover:px-2  uppercase tracking-wide hover:italic transition duration-300 hover:duration-300 hover:scale-105 cursor-pointer"
                to="#"
                aria-label="contact"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
