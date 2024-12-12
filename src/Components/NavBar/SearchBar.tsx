import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { words } from './words'
// Remember to import words or whatever you're using to store all the words the user can search for

const SearchBar = () => {

  return (
    <form className='md:min-w-[200px] lg:min-w-[400px] relative'>
        <div className="relative">
            <input type="search" placeholder='¿En que estas pensando?' className=' hidden md:block w-full py-2 px-4 rounded-full bg-white-800 border-4 hover:border-grey-400 focus:border-grey-400 focus:outline-none'/>
            <button className='absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white-100 rounded-full'>
                <AiOutlineSearch className='w-6 h-6 text-gray-500' />
            </button>
        </div>
    </form>
  )
}

export default SearchBar