import React from 'react';
import { NavBarMenu } from "../../mockData/data"
import SearchBar  from './SearchBar';

const LogoUrl = `https://multimax.com.ve/wp-content/uploads/2024/11/Logo-Multimax-web.png`;

const NavBar = () => {
  return (
    <nav className="bg-blue-500 w-full px-4">
      <div className="container flex justify-between items-center p-4">
        {/*Seccion logo*/}
        <div className="text-2xl flex justify-start gap-2">
          <a href={NavBarMenu[0].link} className='min-w-[200px]'>
            <img src={LogoUrl} alt="Multimax Logo" className="object-cover h-10" />
          </a>
        </div>
        <div>
          <SearchBar />
        </div>
        {/*Seccion Menu*/}
        <div className="hidden md:block">
          <ul className="flex justify-end gap-2">
            {NavBarMenu.map((item) => (
              <li key={item.id}>
                <a href={item.link}
                  className="text-white hover:text-gray-300 font-semibold">{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
