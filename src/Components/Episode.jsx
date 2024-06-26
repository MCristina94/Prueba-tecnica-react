import React, { useEffect, useState } from 'react'
import CardEpisode from './Generics/CardEpisode';

const Episode = () => {
    const BASEURL = 'https://rickandmortyapi.com/api/episode'
    const [pageInfoEpisode, setPageInfoEpisode] = useState({
        count: 0, 
        pages: 0, 
        next: null, 
        prev: null
    });
   
    const [episodes, setEpisodes] = useState([]);
    const getCurrentPage = () => {
        let pageInfoStorage = localStorage.getItem('pageInfoStorage');
        if(pageInfoStorage){
            pageInfoStorage = JSON.parse(pageInfoStorage)
           if(pageInfoStorage.prev === null) {
                return 1;
            }
            if(pageInfoStorage.next === null) {
                return pageInfoStorage.pages;
            }
            const prev = new URL(pageInfoStorage.prev);
            const prevPage = parseInt(prev.searchParams.get('page'));
            return prevPage + 1
        }
    }
   
    useEffect(() => {
        getEpisodes(`${BASEURL}?page=${getCurrentPage()}`);  
    }, []); 

    const getEpisodes = async(pageUrl) => {
        try{
            const response = await fetch(pageUrl);
            if(!response.ok){
                throw new Error ('error get episode, first then')
            }
            const data = await response.json();
            setEpisodes(data.results);    
            setPageInfoEpisode(data.info)
            localStorage.setItem('pageInfoStorage', JSON.stringify(data.info))
        }catch(error){
            console.error('Error: ', error);
        }
    }


    const getNext = async() => {
        await getEpisodes(pageInfoEpisode.next)
    }

    const getPrev = async() => {
        await getEpisodes(pageInfoEpisode.prev)
    }
  return ( 
    <>
        <h2 className='text-center m-2 font-bold text-3xl'>Episodes</h2>
        <section className='flex justify-center'>
           <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-screen-lg'>
                {episodes && episodes.map(episode => <CardEpisode key={episode.id} episode={episode}/>)}
            </div> 
        </section> 
        <div className='flex flex-col sm:flex-row justify-center items-center gap-2 my-8'>
            <button onClick={getPrev} disabled={pageInfoEpisode.prev === null} className='w-12 h-10 flex items-center justify-center px-10 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-100 disabled:text-indigo-700'>Prev</button>
            <button onClick={getNext} disabled={pageInfoEpisode.next === null} className='w-12 h-10 flex items-center justify-center px-10 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-100 disabled:text-indigo-700'>Next</button>
      </div>
    </>
  )
}

export default Episode