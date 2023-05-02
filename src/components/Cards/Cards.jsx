import Card from '../Card/Card';
import style from './Cards.module.css'

export default function Cards(props) {
  // console.log(props.characters)
   const { characters } = props
   return ( <div className={style.contenedor}>
       {
        characters.map((char)=>{
          return     <Card
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            onClose={() => props.onClose(char.id)}
         />
        })
       }
   </div> 
    );
}
