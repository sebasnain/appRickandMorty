import style from './Card.module.css'
import { Link } from "react-router-dom";
import { addFav , removeFav } from '../reducer/action';
import { useState , useEffect } from 'react';
import { connect } from 'react-redux';

 function Card(props) {
  const {
    onClose,
    name,
    image,
    gender,
    species,
    id,
    removeFav,
    addFav,
    myFavorites,
  } = props;
   const [isFav , setIsFav] = useState(false)

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         removeFav(id)
      } else {
         setIsFav(true)
         addFav(props)
      }
   }

   

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites,id]);

   return (
     <div className={style.container}>
       <div className={style.contenedorCard}>
         <div className={style.buttons}>
         
         {isFav ? (
           <button className={style.button} onClick={handleFavorite}>
             ❤️
           </button>
         ) : (
           <button className={style.button} onClick={handleFavorite}>🤍</button>
         )}
         <button className={style.button} onClick={onClose}>
           <strong>x</strong>
         </button>
         </div>
      
         <img className={style.img} src={image} alt="Not Font" />
         <Link to={`/detail/${id}`}>
           <h2 className={style.h2}>Name: {name}</h2>
         </Link>
         <h2 className={style.h2}>Species:{species}</h2>
         <h2 className={style.h2}>Gender: {gender}</h2>
         
       </div>
     </div>
   );
}
const mapStateToProps = (state) => {
   return{
       myFavorites: state.myFavorites,
   }
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFav: (character) => {
      dispatch(addFav(character))
      },
      removeFav: (id) =>{
      dispatch(removeFav(id))
      }
   }
}

export default connect(mapStateToProps , mapDispatchToProps)(Card);