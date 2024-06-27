import React from 'react'
import { Link } from 'react-router-dom';

const CardLocation = ({location}) => {
  console.log(location);
  return (
    <section className='w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8'>
        <article className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900">{location.name}</h5>
            <p className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                {location.type}
            </p>
        </article>
        <article>
            <p className='text-cod-gray-header-hover'>Dimension: {location.dimension}</p>
            <p className='text-cod-gray-header-hover'>Created: {location.created}</p>
        </article>
        <Link to={`/location/detail-location/${location.id}`}>
        <div className='mt-8 flex justify-start'>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Residents</button>
        </div>
        </Link>
    </section>
    
  )
}

export default CardLocation