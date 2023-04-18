import style from './Card.module.css'

export default function Card(props) {

   return (
      <div className={style.container}>
        <div className={style.contenedorCard}>
           <button className={style.button} onClick={props.onClose}>X</button>
           <img className={style.img} src={props.image } alt='Not Font' /> 
         <h2 className={style.h2}>Name: {props.name}</h2>
         <h2 className={style.h2}>Status: {props.status}</h2>
         <h2 className={style.h2}>Species:{ props.species}</h2>
         <h2 className={style.h2}>Gender: {props.gender}</h2>
         <h2 className={style.h2}>Origin: {props.origin}</h2>
         
      </div>

      </div>
    
   );
}
