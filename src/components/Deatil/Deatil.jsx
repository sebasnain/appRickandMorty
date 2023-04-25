import React from 'react';
import style from './Deatil.modules.css'
import { useParams } from 'react-router-dom';
import { useState , useEffect } from 'react'
import axios, { formToJSON } from 'axios';



export default function Detail(){

    console.log(useParams())
const { id } = useParams()


const [ character , setCharacter] = useState({})

useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

    return(
        <div>
            <h1>soy detail</h1>
            <h1>Name: {character.name}</h1>
            <h2>Status {character.status} </h2>
            <h2>Species {character.species} </h2>
            <h2>Gender {character.gender} </h2>
           {/* revisar  <h3>Origin: {character.origin.name}</h3> */}
             <img alt='imagen' src={character.image}/>
        </div>
    )
}