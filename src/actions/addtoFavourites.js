import { ADD_TO_FAVOURITES } from '../constants/CONSTANTS'

const addtoFavourites = (id) => ({
    type: ADD_TO_FAVOURITES,
    payload: id,
});

export default addtoFavourites;