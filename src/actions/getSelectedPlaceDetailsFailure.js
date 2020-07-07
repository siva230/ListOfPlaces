import { GET_SELECTED_PLACE_DETAILS_FAILURE } from '../constants/CONSTANTS';

const getSelectedPlaceDetailsFailure = payload => ({
    type: GET_SELECTED_PLACE_DETAILS_FAILURE,
    payload
});

export default getSelectedPlaceDetailsFailure;