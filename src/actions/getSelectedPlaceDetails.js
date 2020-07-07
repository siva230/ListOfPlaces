import axios from 'axios';
import getSelectedPlaceDetailsStart from './getSelectedPlaceDetailsStart';
import getSelectedPlaceDetailsSuccess from './getSelectedPlaceDetailsSuccess';
import getSelectedPlaceDetailsFailure from './getSelectedPlaceDetailsFailure';

const getSelectedPlaceDetails = (payload) => (dispatch) => {
    dispatch(getSelectedPlaceDetailsStart());
    axios.get(`https://cors-anywhere.herokuapp.com/https://roadtrippers.herokuapp.com/api/v1/place/${payload}/`)
    .then((response) => {
       dispatch(getSelectedPlaceDetailsSuccess(response));

    })
    .catch((error)=>{
        dispatch(getSelectedPlaceDetailsFailure(error));
    })
};

export default getSelectedPlaceDetails;
