import SearchBar from '../SearchBar/SearchBar.jsx';
import style from './Nav.module.css';
import { Link } from "react-router-dom";

export default function Nav(props){
    const { onSearch } = props
    return(
         <div className={style.navegador}>
         
         <Link to={'/about'}><button className={style.btn}> About </button></Link>
         <Link to={'/home'}><button className={style.btn}> Home </button>  </Link>
         <Link to={'/Favorites'}><button className={style.btn}> Favorites </button>  </Link>
         <SearchBar onSearch={ onSearch }/>
         </div>
       
    )

}