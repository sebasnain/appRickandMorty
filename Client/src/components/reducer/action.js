import { ADD_FAV,REMOVE_FAV, FILTER, ORDER } from "./actionsTypes";
import axios from "axios";


// ACTION | addFav
export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
      try {
         const response = await axios.post(endpoint, character)
       return dispatch({
            type: ADD_FAV,
            payload: response.data,
         });
      
      } catch (error) {
         throw error.message;
      }
   };
     
};


export const removeFav = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  return async (dispatch) => {
   try {
      const response = await axios.delete(endpoint)
          return dispatch({
           type: REMOVE_FAV,
           payload: response.data,
     });
   } catch (error) {
     throw error.message;
   }
    
     
  };
};


export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(order) {
  return {
    type: ORDER,
    payload: order ,
  };
}
