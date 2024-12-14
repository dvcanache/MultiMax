import React from "react";
import { NavBarMenu } from "../../mockData/data";
import SearchBar from "./SearchBar";
import { MdMenu } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import ResponsiveAnimation from "./ResponsiveAnimation";
import HamburgerMenu from "./HamburgerMenu";

const LogoUrl = `https://multimax.com.ve/wp-content/uploads/2024/11/Logo-Multimax-web.png`;

const NavBar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openSearch, setOpenSearch] = React.useState(false);
  const handleMenu = (openMenu: boolean) => {
    if (!openMenu) {
      setOpenMenu(true);
      setOpenSearch(false);
    }
  };

  const handleSearch = (openSearch: boolean) => {
    if (!openSearch) {
      setOpenSearch(true);
      setOpenMenu(false);
    }
  };

  return (
    <>
      <nav className="bg-blue-500 w-full">
        <div className="container flex justify-between items-center p-4">
          {/*Seccion logo*/}
          <div className="text-2xl flex items-center">
            <a href={NavBarMenu[0].link} className="min-w-[40px]">
              <img
                src={LogoUrl}
                alt="Multimax Logo"
                className="object-cover h-10"
              />
            </a>
          </div>
          {/*Seccion De Barra De Busqueda*/}
          <div className="w-1/2 xl:w-1/3 hidden md:block">
            <SearchBar />
          </div>

          {/*Seccion Menu*/}
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
          <div className="flex items-center gap-2">
            {/*Seccion Busqueda Responsive*/}
            <div
              className="justify-end cursor-pointer md:hidden"
              onClick={() => setOpenSearch(!openSearch)}
            >
              <FaSearch className="text-2xl text-white" />
            </div>
            {/*Seccion Hamburger Menu*/}
            <div
              className="xl:hidden cursor-pointer"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <MdMenu className="text-4xl text-white" />
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-blue-500 p-0 m-0 md:hidden">
          <ResponsiveAnimation open={openMenu}>
            <HamburgerMenu />
          </ResponsiveAnimation>
          <ResponsiveAnimation open={openSearch}>
            <div className="p-2">
            <SearchBar />

            </div>
          </ResponsiveAnimation>
      </div>
    </>
  );
};

export default NavBar;
