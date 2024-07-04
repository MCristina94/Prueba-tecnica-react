import React, { useEffect, useState } from 'react'

const MessageGame = ({answers}) => {
    const [characters, setCharacters] = useState([]);
    const [characterQuiz, setCharacterQuiz] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const BASEURL = 'https://rickandmortyapi.com/api/character'

    useEffect(() => {
        getCharactersGame(BASEURL);
    },[]);
    const getCharactersGame = async(url) => {
        try{
            const response = await fetch(url);
            const data = await response.json()
            setCharacters(data.results);
        }catch(error){
            console.error('error', error);
        }
    }

    useEffect(() => {
        if(characters.length > 0){
            const findCharacter = (answers, characters) => {
                for(let char of characters){
                    console.log('Comparing character:', char.name);
                    console.log('Gender:', char.gender.toLowerCase(), '==', answers.genderIdentify.toLowerCase());
                    console.log('Species:', char.species.toLowerCase(), '==', answers.species.toLowerCase());
                    console.log('Origin:', char.origin.name.toLowerCase(), '==', answers.location.toLowerCase());
                    if(char.gender.toLowerCase() === answers.genderIdentify.toLowerCase() &&
                    char.species.toLowerCase() === answers.species.toLowerCase()
                    ){
                        return char;
                    }
                }
                return characters[0];
            }
            setCharacterQuiz(findCharacter(answers, characters));
            setIsLoading(false);
        }
    }, [answers, characters]);

    if(isLoading){
        return <p>loading...</p>
    }

  return (
    <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={characterQuiz.image} alt=""></img>
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Hello! {answers.name}</h5>
            <p class="mb-3 font-normal text-gray-700">Congratulations, Your associated Character is {characterQuiz.name}</p>
        </div>
    </div>
  )
}

export default MessageGame