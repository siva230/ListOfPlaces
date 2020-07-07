import get from 'lodash/get';

const getPlaceDetailsSuccessReducer = (state, payload) => {
    return {
        ...state,
        places: get(payload, 'data.places', []),
        placeDetailsLoading: false,
    }
}
export default getPlaceDetailsSuccessReducer;