import { combineReducers } from 'redux'

const initialState = {
    categories: [],
    experiences: [],
    homes: [],
    popular: [],
    asyncStorage: ""
}

const listingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LISTINGS': // On traite le cas 'PULL_TO_REFRESH' uniquement
            return {
                ...state, // On recopie le state d'origine, on ne le modifie JAMAIS directement
                //categories: action.payload.categories,
                experiences: action.payload.results,
                //homes: action.payload.homes.listings,
                //popular: action.payload.popular.listings
                // On ajoute les valeurs à modifier et on retourne un NOUVEAU state
            }
        case 'SET_ASYNCSTORAGE':
            return {
                ...state,
                asyncStorage: action.payload.userToken
            }
        default:
            return state // pour les cas restant on renvoie le state d'origine
    }
}
export default combineReducers({
    listings: listingsReducer
})