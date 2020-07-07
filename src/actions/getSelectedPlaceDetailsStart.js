import { GET_SELECTED_PLACE_DETAILS_START } from '../constants/CONSTANTS';

const getSelectedPlaceDetailsStart = payload => ({
    type: GET_SELECTED_PLACE_DETAILS_START,
    payload
});

export default getSelectedPlaceDetailsStart;