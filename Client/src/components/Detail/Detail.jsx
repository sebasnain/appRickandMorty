import React from 'react';
import styles from './Detail.module.css'
import { useParams } from 'react-router-dom';
import { useState , useEffect } from 'react'
import axios from 'axios';



export default function Detail(){

    console.log(useParams())
const { id } = useParams()


const [ character , setCharacter] = useState({})

useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

    return(
        <div className={styles.container}>
            <div  className={styles.containerDetail}>
            <h1>Detail card</h1>
          
            <h2>Status: {character.status} </h2>
            <h2>Species: {character.species} </h2>
            <h2>Gender: {character.gender} </h2>
            <h3>Origin: {character.origin?.name}</h3> 
           </div>
           <div className={styles.containerImg}>
           <h1>Name: {character.name}</h1>
           <img alt='imagen' src={character.image}/>
           </div>
        </div>
    )
}