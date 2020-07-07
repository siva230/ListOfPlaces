import axios from 'axios';
import getPlaceDetailsStart from './getPlaceDetailsStart'
import getPlaceDetailsFailure from './getPlaceDetailsFailure';
import getPlaceDetailsSuccess from './getPlacedetailsSuccess';

const getPlaceDetails = (payload) => (dispatch, getState) => {
    dispatch(getPlaceDetailsStart());
    axios.get('https://cors-anywhere.herokuapp.com/http://roadtrippers.herokuapp.com/api/v1/places/')
    .then((response) => {
       dispatch(getPlaceDetailsSuccess(response));

    })
    .catch((error)=>{
        dispatch(getPlaceDetailsFailure(error));
    })
};

export default getPlaceDetails;
