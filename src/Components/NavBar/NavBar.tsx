import React from "react";
import { NavBarMenu } from "../../mockData/data";
import SearchBar from "./SearchBar";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

const LogoUrl = `https://multimax.com.ve/wp-content/uploads/2024/11/Logo-Multimax-web.png`;

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav className="bg-blue-500 w-full px-4">
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
          <div className="w-1/2 xl:w-1/3">
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
          {/*Seccion Hamburger Menu*/}
          <div className="xl:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl text-white" />
          </div>
        </div>
      </nav>
      <ResponsiveMenu open={open}/>
    </>
  );
};

export default NavBar;
