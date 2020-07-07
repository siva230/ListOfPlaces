import { GET_SELECTED_PLACE_DETAILS_SUCCESS } from '../constants/CONSTANTS';

const getSelectedPlaceDetailsSuccess = payload => ({
    type: GET_SELECTED_PLACE_DETAILS_SUCCESS,
    payload
});

export default getSelectedPlaceDetailsSuccess;