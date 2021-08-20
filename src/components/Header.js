import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

const NavLinks = ({ match, top, page, text, isNavOpen }) => {
  return (
    <li className="h-full pb-8">
      <Link
        to={`/${page}`}
        className={`text-2xl font-medium h-full flex items-start ${
          match?.params.page === page
            ? "text-white bg-primary-c"
            : "text-primary-k hover:text-white hover:bg-primary-c"
        } px-8 py-5 flex items-center transition duration-150 ease-in-out`}
      >
        <div className="self-end">{text}</div>
      </Link>
    </li>
  );
};

function Header() {
  const [top, setTop] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const match = useRouteMatch("/:page");
  // detect whether user has scrolled the page down by 10px
  // useEffect(() => {
  //   const scrollHandler = () => {
  //     window.pageYOffset > 10 ? setTop(false) : setTop(true);
  //   };
  //   window.addEventListener("scroll", scrollHandler);
  //   return () => window.removeEventListener("scroll", scrollHandler);
  // }, [top]);
  return (
    <header
      className={`w-full transition duration-300 ease-in-out py-5 lg:py-0 bg-primary-a ${
        (!top || isNavOpen) && "bg-white shadow-lg"
      } ${
        !isNavOpen && "md:bg-opacity-90"
      } transition-all ease-in-out duration-150`}
    >
      {/* <div
        className={`absolute top-0 to-transparent from-black-transparent bg-gradient-to-b w-full h-full transition-opacity duration-150 ease-in-out pointer-events-none ${
          top
            ? isNavOpen
              ? "opacity-0 lg:opacity-100"
              : "opacity-100"
            : "opacity-0"
        }`}
      /> */}

      <div className="max-w-screen-2xl mx-auto px-0 2xl:px-0">
        <div className="flex flex-col lg:flex-row items-cenzter justify-between">
          <div className="flex justify-between w-full lg:w-auto items-center">
            {/* Site branding */}

            <div className="flex-shrink-0 pt-8">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2">
                <img
                  alt="logo"
                  src={"/assets/graphics/logo.png"}
                  className="h-32"
                />
              </Link>
            </div>
            <button
              className="block lg:hidden"
              onClick={(e) => {
                e.preventDefault();
                setIsNavOpen((a) => !a);
              }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className={`w-6 h-6 ${!top || isNavOpen ? "" : "text-white"}`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
              </svg>
            </button>
          </div>

          {/* Site navigation */}
          <nav
            className={`flex flex-grow ${
              isNavOpen
                ? ""
                : "max-h-0 lg:max-h-full -translate-y-full transform lg:transform-none opacity-0 lg:opacity-100"
            } lg:h-auto overflow-hidden lg:overflow-auto top-0 lg:top-auto bg-white lg:bg-transparent w-full lg:w-auto transition-transform ease-in-out duration-150`}
          >
            <ul className="flex flex-grow justify-end flex-wrap items-center flex-col lg:flex-row gap-5">
              <NavLinks
                match={match}
                page={"home"}
                top={top}
                text="Home"
                isNavOpen={isNavOpen}
              />
              <NavLinks
                match={match}
                page={"menu"}
                top={top}
                text="Menu"
                isNavOpen={isNavOpen}
              />
              <NavLinks
                match={match}
                page={"aboutus"}
                top={top}
                text="About Us"
                isNavOpen={isNavOpen}
              />
              <NavLinks
                match={match}
                page={"gallery"}
                top={top}
                text="Gallery"
                isNavOpen={isNavOpen}
              />
              <NavLinks
                match={match}
                page={"csr"}
                top={top}
                text="CSR"
                isNavOpen={isNavOpen}
              />

              <NavLinks
                match={match}
                page={"contactus"}
                top={top}
                text="Contact Us"
                isNavOpen={isNavOpen}
              />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
