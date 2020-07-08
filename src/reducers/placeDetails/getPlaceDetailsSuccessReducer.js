import get from 'lodash/get';

const getPlaceDetailsSuccessReducer = (state, payload) => {
    const data = get(payload, 'data.places', []);
    const updatedPlaces = data.map(item => ({
        ...item,
        favourite: false,
    }));
    return {
        ...state,
        places: updatedPlaces,
        placeDetailsLoading: false,
    }
}
export default getPlaceDetailsSuccessReducer;