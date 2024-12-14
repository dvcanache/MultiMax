import { NavBarMenu } from "../../mockData/data";

const HamburgerMenu = () => {
  return (
    <div className="text-md text-center text-white bg-blue-500 m-0">
      <ul className="sm:flex flex-col justify-center items-center md:flex-row">
        {NavBarMenu.map((item) => (
          <li
            key={item.id}
            className="w-full py-2 transition ease-in-out hover:scale-110 hover:bg-blue-600 duration-150"
          >
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
  );
};

export default HamburgerMenu;