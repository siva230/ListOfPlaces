const addToFavouritesReducer = (state, payload) => {
    const updatedPlaces = state.places.map(item => {
        if(item.id === payload.id) {
            return {
                ...item,
                favourite: payload.favourite
            };
        }
        return item;
    });
    return {
        ...state,
        places: updatedPlaces
    }
}
export default addToFavouritesReducer;