import {AiOutlineSearch} from 'react-icons/ai'

// Remember to import words or whatever you're using to store all the words the user can search for

const SearchBar = () => {

  return (
    <form className='w-400px z-50'>
        <div className="relative">
            <input type="search" placeholder='¿En que estas pensando?' className='w-full py-1 px-4 text-sm rounded-full bg-white-100 border-4 hover:border-grey-400 focus:border-grey-400 focus:outline-none'/>
            <button className='absolute right-2 top-1/2 -translate-y-1/2 py-1 px-2 rounded-full bg-white'>
                <AiOutlineSearch className='w-6 h-4 text-gray-500' />
            </button>
        </div>
    </form>
  )
}

export default SearchBar