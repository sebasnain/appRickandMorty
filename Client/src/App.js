import './App.css';
import Form from './components/Form/Form.jsx';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/nav/Nav';
import { useState , useEffect} from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import  Favorites  from './components/Favorites/Favorites.jsx';


function App() {
  const [characters, setCharacters] = useState([]);

  const location = useLocation();
  let navigate = useNavigate();

const [access, setAccess] = useState(false);
//const email = 'sebas@gmail.com';
//const password = 'sebas2023';

async function login(userData) {
  const { email, password } = userData;
  const URL = 'http://localhost:3001/rickandmorty/login/';

  try {
    const {data} =  await axios(URL + `?email=${email}&password=${password}`) 
    const { access } = data;
     setAccess(data);
     access && navigate('/home');
  } catch (error) {
    alert(error)
  }
}
  


  async function onSearch(id) {

    try {
      let datita =( await  axios(`https://rickandmortyapi.com/api/character/${id}`)).data
      if (datita) {
        setCharacters((oldChars) => [...oldChars, datita]);
       
      } else {
        alert("ID NO ENCONTRADO");
    }
    } catch (error) {
      alert(error.message)
    }}
    
  

  function onClose(id) {
    const idNumber = Number(id);

    const flitrados = characters.filter(
      (character) => character.id !== idNumber
    );
    setCharacters(flitrados);
  }



 useEffect(() => {
  !access && navigate('/');
}, [access ,navigate]);

  return (
    <div className="App">
      {location.pathname === "/" ? (
        null
      ) : (
        <Nav onSearch={onSearch} />
      )}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
