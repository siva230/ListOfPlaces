const getPlaceDetailsFailureReducer = (state) => {
    return {
        ...state,
        placeDetailsLoading:false,
    }
}
export default getPlaceDetailsFailureReducer;