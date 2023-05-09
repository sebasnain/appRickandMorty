import style from './Card.module.css'
import { Link } from "react-router-dom";
import { addFavorite , deleteFavorite } from '../reducer/action';
import { useState } from 'react';
import { connect } from 'react-redux';

 function Card(props) {

   const [isFav , setIsFav] = useState(false)

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         deleteFavorite(props.id)
      } else {
         setIsFav(true)
         addFavorite(props)
      }
   }
   return (
      
      <div className={style.container}>
        <div className={style.contenedorCard}>
           <button className={style.button} onClick={props.onClose}>X</button>
           {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
           <img className={style.img} src={props.image } alt='Not Font' /> 
           <Link to={`/detail/${props.id}`} >
           <h2 className={style.h2}>Name: {props.name}</h2>
           </Link>
        
         <h2 className={style.h2}>Status: {props.status}</h2>
         <h2 className={style.h2}>Species:{ props.species}</h2>
         <h2 className={style.h2}>Gender: {props.gender}</h2>
         <h2 className={style.h2}>Origin: {props.origin}</h2>
         
      </div>

      </div>
    
   );
}
const mapStateToProps = (state) => {
   return{
       myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFavorite: (character) => {
      dispatch(addFavorite)
      },
      deleteFavorite: (id) =>{
      dispatch(deleteFavorite(id))
      }
   }
}

export default connect(null , mapDispatchToProps)(Card);