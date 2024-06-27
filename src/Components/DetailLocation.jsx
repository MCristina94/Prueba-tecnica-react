import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from './Generics/Card';

const DetailLocation = () => {
    const [residents, setResidents] = useState([]);
    const [charactersLocation, setCharactersLocation] = useState([]);
    const params = useParams();
    //console.log(params);
    const urlLocation = `https://rickandmortyapi.com/api/location/${params.id}`

    useEffect(() => {
        getLocation(urlLocation);
    },[urlLocation]);

    useEffect(() => {
        if (residents.length > 0) {
          getCharactersLocation();
        }
      }, [residents]);

    const getLocation = async(url) => {
        try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error('error in response, get location')
            }
            const data = await response.json();
            setResidents(data.residents);
        }catch(error) {
            console.error('error', error);
        }
    }

    const getCharactersLocation = async() => {
        try{
            const responses = await Promise.all(residents.map(url => fetch(url)));
            const data = await Promise.all(responses.map(res => res.json()));
            setCharactersLocation(data)
        }catch(error){
            console.error('error', error);
        }
    }
   console.log(charactersLocation);
  return (
    <section>
        <h2 className='text-center m-2 font-bold text-3xl'>Residents</h2>
        <article className='flex justify-center'>
           <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-screen-lg'>
                {charactersLocation.length > 0 
                ? 
                charactersLocation.map(character => <Card key={character.id} character={character}/>) 
                : 
                <p className='my-8'>This Location Has No Residents</p>
                }
            </div> 
        </article>
    </section>
  )
}

export default DetailLocation