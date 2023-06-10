import { ADD_FAV , REMOVE_FAV, FILTER , ORDER } from "./actionsTypes"

const initialState = {
    myFavorites: [],
    allCharacters : []
}

const rootReducer = (state = initialState, {type , payload}) => {
    switch (type){
        case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };
         case REMOVE_FAV:
           // const filtered = state.myFavorites.filter((character) => character.id !== Number(payload))
           return { ...state, myFavorites: payload }
           case FILTER:
            const filterByGender = [...state.allCharacters].filter((char)=>char.gender === payload)
         
        
            return{
               ...state,
               myFavorites: filterByGender
            }
        case ORDER:
           const orderCopy = [...state.myFavorites];
           const order = orderCopy.sort((a,b)=>{
                if (payload === 'Ascendente'){
                    return a.id - b.id;
                  } else if (payload === 'Descendente') {
                    return b.id - a.id;
                  } else {
                    return 0;
                  }
            });

            return {
                ...state,
                myFavorites: order
            } 
          
        default:
            return {...state}
    }
}

export default rootReducer;