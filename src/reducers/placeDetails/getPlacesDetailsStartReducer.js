const getPlacesDetailsStartReducer = (state,payload) => {
    return {
        ...state,
        placeDetailsLoading: true,
    }
}
export default getPlacesDetailsStartReducer;