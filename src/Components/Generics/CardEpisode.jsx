import React, { useEffect, useState } from 'react'

const CardEpisode = ({episode}) => {
    
  return (
    <section className='w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <article className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{episode.name}</h5>
            <p className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                {episode.episode}
            </p>
        </article>
        <article>
            <p className='text-cod-gray-header-hover'>Air Date: {episode.air_date}</p>
            <p className='text-cod-gray-header-hover'>Created: {episode.created}</p>
        </article>
        <div>
            <button className='my-5 px-6 py-2 min-w-[120px] text-center text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white active:bg-blue-500 focus:outline-none focus:ring'>View Characers</button>
        </div>
    </section>
  )
}

export default CardEpisode