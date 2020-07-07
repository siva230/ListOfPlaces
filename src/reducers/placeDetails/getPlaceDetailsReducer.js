const getPlaceDetailsReducer = (state,payload) => {
    return {
        ...state,
        placeDetailsLoding: false,
    }
}
export default getPlaceDetailsReducer;