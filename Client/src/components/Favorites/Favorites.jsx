import React from 'react'
import { connect } from 'react-redux'
import Card from '../Card/Card'
import { useDispatch } from 'react-redux';
import { orderCards, filterCards , } from '../reducer/action';



 function Favorites(props) { 
    const { myFavorites } = props;
    const dispatch = useDispatch()
  
    return (
      <div>
        <div>

          <select
            name="order"
         onClick={(e) => {
              dispatch(orderCards(e.target.value));
            }}
          >
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
          </select>
          <select
            name="filter"
            onClick={(e) => {
            //  if(e.target.value === "todos"){
              //  const arrGender = ["Male", "Female","unknown","Genderless"]
                //arrGender.forEach( gender => filterCards(gender)) 
              //} else{ }
                dispatch(filterCards(e.target.value));
         }}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="todos">todos</option>
          </select>
        </div>
           
        {myFavorites &&
          myFavorites.map((char) => {
            return (
              <Card
                key={char.id}
                id={char.id}
                name={char.name}
                status={char.status}
                species={char.species}
                gender={char.gender}
                origin={char.origin?.name}
                image={char.image}
              />
            );
          })}

      </div>
    );
  };
  
  const mapStateToProps = (state) => {
    return {
      myFavorites: state.myFavorites,
    }; 
  };
  
 export default connect(mapStateToProps, null)(Favorites); 