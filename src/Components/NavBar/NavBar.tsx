import React from 'react';
import { NavBarMenu } from "../../mockData/data"

const LogoUrl = `https://prioritymaxve.com/images/multimaxlogo.svg`;

const NavBar = () => {
  return (
    <nav>
      <div className="container bg-blue-500 flex justify-between items-center p-4">
        {/*Seccion logo*/}
        <div className="text-2xl flex items-center gap-2">
          <p>Multimax</p>
        </div>
        {/*Seccion Menu*/}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4">
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
