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


function App() {
  const [characters, setCharacters] = useState([]);

  const location = useLocation();
  let navigate = useNavigate();

const [access, setAccess] = useState(false);
const email = 'sebas@gmail.com';
const password = 'sebas2023';

function login(userData) {
  if (userData.password === password && userData.userData.email === email ) {
    console.log(userData.userData.email)
     setAccess(true);
     navigate('/home');
  }
 
}



  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("ID NO ENCONTRADO");
      }
      }
    );
  }

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
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
