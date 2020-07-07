import get from 'lodash/get';

const getSelectedPlaceDetailsSuccessReducer = (state, payload) => {
    return {
        ...state,
        selectedPlace: get(payload, 'data.0'),
        selectedPlaceDetailsLoading: false,
    }
}
export default getSelectedPlaceDetailsSuccessReducer;