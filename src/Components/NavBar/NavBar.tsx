import { useState } from "react";
import { NavBarMenu } from "../../mockData/data";
import SearchBar from "./SearchBar";
import { MdMenu } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import ResponsiveAnimation from "./ResponsiveAnimation";
import HamburgerMenu from "./HamburgerMenu";

const LogoUrl = `https://multimax.com.ve/wp-content/uploads/2024/11/Logo-Multimax-web.png`;

const NavBar = () => {
  const [navState, setNavState] = useState<"menu" | "search" | null>(null);

  const toggleNavState = (state: "menu" | "search") => {
    setNavState((prev) => (prev === state ? null : state));
  };

  return (
    <>
      <nav className="bg-blue-500 w-full">
        <div className="container flex justify-between items-center p-4">
          {/* Logo */}
          <div className="text-2xl flex items-center">
            <a href={NavBarMenu[0].link} className="min-w-[40px]">
              <img
                src={LogoUrl}
                alt="Multimax Logo"
                className="object-cover h-10"
              />
            </a>
          </div>
          {/* Search Bar */}
          <div className="w-1/2 xl:w-1/3 hidden md:block">
            <SearchBar />
          </div>
          {/* Menu */}
          <div className="hidden xl:block">
            <ul className="inline-flex m-0 p-0 gap-2">
              {NavBarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="text-white hover:text-gray-300 font-semibold px-2 text-center text-md text-nowrap"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile Buttons */}
          <div className="flex items-center gap-2">
            <div
              className="cursor-pointer text-white md:hidden"
              onClick={() => toggleNavState("search")}
            >
              <FaSearch className="text-2xl" />
            </div>
            <div
              className="cursor-pointer text-white xl:hidden"
              onClick={() => toggleNavState("menu")}
            >
              <MdMenu className="text-4xl" />
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-blue-500 p-0 m-0">
        <ResponsiveAnimation open={navState === "menu"}>
          <div className="xl:hidden z-10">
          <HamburgerMenu />
            <div className="fixed inset-0 bg-black bg-opacity-0 z-10 sm:inset-0 top-72 lg:inset-0 top-28" onClick={() => setNavState(null)}>
            </div>
          </div>
        </ResponsiveAnimation>
        <ResponsiveAnimation open={navState === "search"}>
          <div className="md:hidden z-10 p-2">
            <SearchBar />
            <div className="fixed inset-0 bg-black bg-opacity-0 z-10 sm:inset-0 top-" onClick={() => setNavState(null)}>
            </div>
          </div>
        </ResponsiveAnimation>
      </div>
    </>
  );

};

export default NavBar;
