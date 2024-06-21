import React, { useEffect, useState } from 'react'
import Card from './Generics/Card';

const Home = () => {
  const URL = 'https://rickandmortyapi.com/api/character';
  const GENDERS = [
    {label: 'Female', value: 'female'}, 
    {label: 'Male', value: 'male'}, 
    {label: 'Genderless', value: 'genderless'},
    {label: 'Unknown', value: 'unknown'}
  ];
  const [genderSelect, setGenderSelect] = useState('');
  const [pageInfo, setPageInfo] = useState({
    count: 0,
    pages: 0,
    next: null,
    prev: null
  });
  const [characters, setCharacters] = useState([]);
  
  useEffect(() =>{
    getCharacters(URL);
  },[]);

  const getNextPage = async() =>{
    await getCharacters(pageInfo.next);
  }

  const getPrevPage = async() => {
    await getCharacters(pageInfo.prev)
  }

  const getCharacters = async(pageUrl) => {
    try {
      const response = await fetch(pageUrl);
      if(!response.ok) {
        throw new Error ('Error in get info')
      }
      const data = await response.json();
      setCharacters(data.results);
      setPageInfo(data.info);
    }
    catch(error) {
      console.error('error', error);
    }
  };
  console.log(characters);

  const handleGenderChange = (e) => {
    const genderSelected = e.target.value
    setGenderSelect(genderSelected);
    getCharacters(`${URL}?gender=${genderSelected}`);
  }

  return (
    <>
      <h1 className='text-center m-2'>Characters</h1>
      <form className='max-w-sm mx-auto my-5'>
        <label className='block mb-2 text-sm font-medium text-gray-900'>Select an option</label>
        <select 
        value={genderSelect}
        onChange={handleGenderChange}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
          {GENDERS.map(gender => <option value={gender.value}>{gender.label}</option>)}
        </select>
      </form>
      <section className='grid grid-cols-3 gap-5'>
        {characters && characters.map(character => <Card key={character.id} character={character}/>)}
      </section>
      <div className='flex justify-center gap-2 m-2'>
        <button onClick={getPrevPage} disabled={pageInfo.prev === null} className='border border-slate-600 rounded-md px-2 py disabled:bg-red-400'>Prev</button>
        <button onClick={getNextPage} disabled={pageInfo.next === null} className='border border-slate-600 rounded-md px-2 py disabled:bg-red-400'>Next</button>
      </div>
      
    </>
  )
}

export default Home