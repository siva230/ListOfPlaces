import { GET_PLACE_DETAILS_START } from '../constants/CONSTANTS';

const getPlaceDetailsStart = payload => ({
    type:GET_PLACE_DETAILS_START,
    payload
});

export default getPlaceDetailsStart;