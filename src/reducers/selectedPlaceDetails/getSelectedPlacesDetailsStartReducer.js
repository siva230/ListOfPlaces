const getSelectedPlacesDetailsStartReducer = (state,payload) => {
    return {
        ...state,
        selectedPlaceDetailsLoading: true,
    }
}
export default getSelectedPlacesDetailsStartReducer;