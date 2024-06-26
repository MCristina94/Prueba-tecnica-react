import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isSelect, setIsSelect] = useState('character');
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClick = (link) => {
    setIsSelect(link);
  }
  const toggleMenu = () =>{
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className='flex justify-between font-bold text-center py-5 bg-headerColor'>
        <h2 className='mx-5'>Welcome to <span className='text-cod-gray-header-namePage'>Rick and Morty</span> Page</h2>
         {/* Menu links for medium and larger screens */}
        <nav className='hidden md:flex mx-5'>
          <Link to={'/'} onClick={() => handleClick('character')} className= {`mx-5  hover:text-cod-gray-header-hover ${isSelect === 'character'? 'text-cod-gray-header-namePage text-decoration-line: underline' : null}`}>Characters</Link>
          <Link to={'/episode'} onClick={() => handleClick('episode')} className= {`mx-5  hover:text-cod-gray-header-hover ${isSelect === 'episode' ? 'text-cod-gray-header-namePage text-decoration-line: underline' : null}`}>Episode</Link>
          <Link to={'/location'} onClick={() => handleClick('location')} className= {`mx-5  hover:text-cod-gray-header-hover ${isSelect === 'location' ? 'text-cod-gray-header-namePage text-decoration-line: underline ' : null}`}>Location</Link>
        </nav>
         {/* Hamburger button for small screens */}
        <nav className='md:hidden flex flex-col'>
          <button onClick={toggleMenu}>
            <i className="fa-solid fa-bars mr-12 text-xl"></i>
          </button>
         {isOpen && (
          <article className='md:hidden my-5'>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              <li>
              <Link to={'/'} className='block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0'>Characters</Link>
              </li>
              <li>
              <Link to={'/episode'} className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'>Episodes</Link>
              </li>
              <li>
              <Link to={'/location'} className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'>Locations</Link>
              </li>
            </ul>
          </article>
         )}
         </nav>
      </div>
    </>
  )
}

export default Header