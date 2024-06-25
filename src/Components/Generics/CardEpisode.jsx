import React, { useEffect, useState } from 'react'

const CardEpisode = ({episode}) => {

    const [charactersEpisode, setCharactersEpisode] = useState([]);
    
    useEffect(() => {
        setCharactersEpisode(episode.characters)
    }, [])

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
    </section>
  )
}

export default CardEpisode