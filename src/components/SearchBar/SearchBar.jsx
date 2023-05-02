import style from './SearchBar.module.css'
import { useState  } from 'react';

export default function SearchBar(props) {
    
   const [ id , setId ] = useState('');

   const handleChange = (event)=>{
       setId(event.target.value)
   }
   const handleClick = ()=>{
      onSearch(id);
      setId('');
   }

   const { onSearch } = props
   
   return (
      <div className={style.divImput}>
          <input className={style.input} type='search' onChange={ handleChange }  value={id}/>
         <button className={style.button}  onClick={ handleClick }>Agregar</button> 
      </div>
   );
}
