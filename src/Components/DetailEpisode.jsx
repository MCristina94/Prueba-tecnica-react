import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from './Generics/Card';

const DetailEpisode = () => {
  const [characters, setCharacters] = useState([]);
  const [charactersEpisode, setCharactersEpisode] = useState([]);
  const params = useParams();
  const urlEpisode = `https://rickandmortyapi.com/api/episode/${params.id}`;
  
  useEffect(() => {
    getEpisode(urlEpisode);
  }, [urlEpisode]);

  useEffect(() => {
    if(characters.length > 0){
        getCharactersEpisode();
    }
  },[characters]);

  const getEpisode = async(url) =>{
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('error in response, get episode')
        }
        const data = await response.json();
        setCharacters(data.characters);
    }catch(error) {
        console.error('error', error);
    }
  }

  const getCharactersEpisode = async() =>{
    try {
        const responses = await Promise.all(characters.map(url => fetch(url)));
        const data = await Promise.all(responses.map(res => res.json()));
        setCharactersEpisode(data);
        console.log(data);
    }catch(error){
            console.error('error', error);
        }
  }

  return (
    <section>
        <h2 className='text-center m-2 font-bold text-3xl'>Episode Characters</h2>
        <article className='flex justify-center'>
           <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-screen-lg'>
                {charactersEpisode.length > 0 
                ? 
                charactersEpisode.map(character => <Card key={character.id} character={character}/>) 
                : 
                <p className='my-8'>This Episode Has No Residents</p>
                }
            </div> 
        </article>
    </section>
  )
}

export default DetailEpisode