import { motion, AnimatePresence } from 'framer-motion'
import { NavBarMenu } from "../../mockData/data";

const ResponsiveMenu = ({open} : {open: boolean}) => {
    return <AnimatePresence> {open && (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className='absolute top-20 left-0 right-0 w-full z-50'>
            <div className='text-md text-center text-white bg-blue-500 m-0'>
                <ul className='flex flex-col justify-center items-center'>
              {NavBarMenu.map((item) => (
                <li key={item.id} className='w-full py-2 transition ease-in-out hover:scale-110 hover:bg-blue-600 duration-150'>
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

        </motion.div>
    )}
    </AnimatePresence>
}

export default ResponsiveMenu