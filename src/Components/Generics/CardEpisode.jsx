import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const CardEpisode = ({episode}) => {
  
  return (
    <section className='w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8'>
        <article className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900">{episode.name}</h5>
            <p className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                {episode.episode}
            </p>
        </article>
        <article>
            <p className='text-cod-gray-header-hover'>Air Date: {episode.air_date}</p>
            <p className='text-cod-gray-header-hover'>Created: {episode.created}</p>
        </article>
        <Link to={`/episode/detail-episode/${episode.id}`} >
        <div className='mt-8 flex justify-start'>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">characters</button>
        </div>
        </Link>
    </section>
  )
}

export default CardEpisode