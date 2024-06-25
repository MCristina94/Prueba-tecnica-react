import React from 'react'

const CardLocation = ({location}) => {
  return (
    <section className='w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <article className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{location.name}</h5>
            <p className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                {location.type}
            </p>
        </article>
        <article>
            <p className='text-cod-gray-header-hover'>Dimension: {location.dimension}</p>
            <p className='text-cod-gray-header-hover'>Created: {location.created}</p>
        </article>
    </section>
    
  )
}

export default CardLocation