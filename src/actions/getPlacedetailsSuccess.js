import { GET_PLACE_DETAILS_SUCCESS } from '../constants/CONSTANTS';

const getPlacedetailsSuccess = payload => ({
    type:GET_PLACE_DETAILS_SUCCESS,
    payload
});

export default getPlacedetailsSuccess;