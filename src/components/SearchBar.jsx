import style from './Search.module.css'

export default function SearchBar(props) {
   
   return (
      <div className={style.divImput}>
          <input className={style.input} type='search' />
         <button className={style.button} onClick={()=> props.onSearch("holis")}>Agregar</button> 
      </div>
   );
}
