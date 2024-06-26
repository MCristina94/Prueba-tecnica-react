import React from 'react'

const Card = ({character}) => {
  return (
  <article className='max-w-sm rounded overflow-hidden shadow-lg'>
    <img className='w-full' src={character.image}/>
    <div className='px-6 py-4'>
      <h2>{character.name}</h2>     
    </div>
    <div className='px-6 pt-4 pb-2'>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{character.species}</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{character.gender}</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{character.status}</span>
    </div>
  </article>
    
  )
}

export default Card