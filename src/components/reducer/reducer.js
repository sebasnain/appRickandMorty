import { ADD_FAVORITE, DELETE_FAVORITE } from "./actionsTypes"

const initialState = {
    myFavorite: []
}

const reducer = (state = initialState, {type , payload}) => {
    switch (type){
        case ADD_FAVORITE: 
         return{
            ...state,
            myFavorite: [...state.myFavorite, payload]
         }
         case DELETE_FAVORITE:
            const filtered = state.myFavorite.filter((character) => character.id !== Number(payload))
            return{
                ...state,
                myFavorite : filtered
            }
        default:
            return {...state}
    }
}

export default reducer