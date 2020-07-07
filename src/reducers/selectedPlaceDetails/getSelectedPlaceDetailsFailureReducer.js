const getSelectedPlaceDetailsFailureReducer = (state) => {
    return {
        ...state,
        selectedPlaceDetailsLoading:false,
    }
}
export default getSelectedPlaceDetailsFailureReducer;