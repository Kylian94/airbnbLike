import { combineReducers } from 'redux'

const initialState = {
    categories: [],
    experiences: [],
    homes: [],
    popular: []
}

const listingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LISTINGS': // On traite le cas 'PULL_TO_REFRESH' uniquement
            return {
                ...state, // On recopie le state d'origine, on ne le modifie JAMAIS directement
                categories: action.payload.categories,
                experiences: action.payload.experiences,
                homes: action.payload.homes,
                popular: action.payload.popular // On ajoute les valeurs à modifier et on retourne un NOUVEAU state
            }
        default:
            return state // pour les cas restant on renvoie le state d'origine
    }
}
export default combineReducers({
    listings: listingsReducer
})