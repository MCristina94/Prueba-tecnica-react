import React, { useEffect, useState } from 'react'
import Card from './Generics/Card';

const Home = () => {
  const URL = 'https://rickandmortyapi.com/api/character';
  const GENDERS = [
    {label: 'All', value: 'all'},
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
    if(genderSelected === 'all'){
      getCharacters(URL);
    }else{
      getCharacters(`${URL}?gender=${genderSelected}`);
    }
  }

  return (
    <>
      <h1 className='text-center m-2 font-bold text-3xl'>Characters</h1>
      <form className='max-w-sm mx-auto my-5'>
        <label className='block mb-2 text-sm font-medium text-gray-900'>Select an option</label>
        <select 
        value={genderSelect}
        onChange={handleGenderChange}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'>
          {GENDERS.map((gender, index) => <option key={index} value={gender.value}>{gender.label}</option>)}
        </select>
      </form>
      <section className='flex justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-screen-lg'>
          {characters && characters.map(character => <Card key={character.id} character={character} />)}
        </div>
      </section>
      <div className='flex flex-col sm:flex-row justify-center items-center gap-2 my-8'>
        <button
          onClick={getPrevPage}
          disabled={pageInfo.prev === null}
          className='w-12 h-10  flex items-center justify-center px-10 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-100 disabled:text-indigo-700'>
          Prev
        </button>
        <button
          onClick={getNextPage}
          disabled={pageInfo.next === null}
          className='w-12 h-10 flex items-center justify-center px-10 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-100 disabled:text-indigo-700'>
          Next
        </button>
      </div>


      
    </>
  )
}

export default Home