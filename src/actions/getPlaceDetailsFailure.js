import { GET_PLACE_DETAILS_FAILURE } from '../constants/CONSTANTS';

const getPlaceDetailsFailure = payload => ({
    type:GET_PLACE_DETAILS_FAILURE,
    payload
});

export default getPlaceDetailsFailure;