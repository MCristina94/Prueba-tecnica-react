import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isSelect, setIsSelect] = useState('');
  const handleClick = (link) => {
    setIsSelect(link);
  }
  return (
    <div className='flex justify-between font-bold text-center py-5 bg-headerColor'>
        <h2 className='mx-5'>Welcome to <span className='text-cod-gray-header-namePage'>Rick and Morty</span> Page</h2>
        <div className='mx-5'>
          <Link to={'/'} onClick={() => handleClick('character')} className= {`mx-5  hover:text-cod-gray-header-hover ${isSelect === 'character'? 'text-cod-gray-header-namePage text-decoration-line: underline' : null}`}>Characters</Link>
          <Link to={'/episode'} onClick={() => handleClick('episode')} className= {`mx-5  hover:text-cod-gray-header-hover ${isSelect === 'episode' ? 'text-cod-gray-header-namePage text-decoration-line: underline' : null}`}>Episode</Link>
          <Link to={'/location'} onClick={() => handleClick('location')} className= {`mx-5  hover:text-cod-gray-header-hover ${isSelect === 'location' ? 'text-cod-gray-header-namePage text-decoration-line: underline ' : null}`}>Location</Link>
        </div>
    </div>
  )
}

export default Header