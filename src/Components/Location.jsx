import React, { useEffect, useState } from 'react'
import CardLocation from './Generics/CardLocation';

const Location = () => {
  const [pageInfoLocations, setPageInfoLocations] = useState({
    count: 0, 
    page: 0, 
    next: null, 
    prev: null
  });
  const [locations, setLocations] = useState([]);
  const URL = 'https://rickandmortyapi.com/api/location'

  useEffect(() => {
    getLocactions(URL)
  },[])

  const getLocactions = async(pageUrl) =>{
    try{
      const response = await fetch(pageUrl);
      if(!response.ok){
          throw new Error ('error get location, first then')
        }
      const data = await response.json();
      setLocations(data.results)
      setPageInfoLocations(data.info)          
    }catch(error){
      console.error('Error: ', error);
    }
  }

  const getNext = async() => {
    await getLocactions(pageInfoLocations.next)
  }

  const getPrev = async() => {
    await getLocactions(pageInfoLocations.prev)
  }
  console.log(locations);
  console.log(pageInfoLocations);
  return (
    <>
      <h2 className='text-center m-2 font-bold text-3xl'>Location</h2>
      <section className='flex justify-center'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-screen-lg'>
          {locations && locations.map(location => <CardLocation key={location.id} location={location}/>)}
        </div> 
      </section> 
      <div className='flex flex-col sm:flex-row justify-center gap-2 m-2'>
            <button onClick={getPrev} disabled={pageInfoLocations.prev === null} className='w-5 h-10 flex items-center justify-center px-2 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 sm:py-4 sm:text-lg sm:px-10 disabled:bg-indigo-100 disabled:text-indigo-700'>Prev</button>
            <button onClick={getNext} disabled={pageInfoLocations.next === null} className='w-5 h-10 flex items-center justify-center px-2 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 sm:py-4 sm:text-lg sm:px-10 disabled:bg-indigo-100 disabled:text-indigo-700'>Next</button>
      </div>
    </>
  )
}

export default Location