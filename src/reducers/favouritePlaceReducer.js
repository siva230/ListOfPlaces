import INITIAL_STATE from "../constants/INITIAL_STATE";
import { 
    GET_PLACE_DETAILS_START,
    GET_PLACE_DETAILS_FAILURE,
    GET_PLACE_DETAILS_SUCCESS,
    GET_SELECTED_PLACE_DETAILS_SUCCESS,
    GET_SELECTED_PLACE_DETAILS_FAILURE,
    GET_SELECTED_PLACE_DETAILS_START
 } from "../constants/CONSTANTS";
import getPlacesDetailsStartReducer from "./placeDetails/getPlacesDetailsStartReducer";
import getPlaceDetailsFailureReducer from "./placeDetails/getPlaceDetailsFailureReducer";
import getPlaceDetailsSuccessReducer from "./placeDetails/getPlaceDetailsSuccessReducer";
import getSelectedPlaceDetailsSuccessReducer from "./selectedPlaceDetails/getSelectedPlaceDetailsSuccessReducer";
import getSelectedPlaceDetailsFailureReducer from "./selectedPlaceDetails/getSelectedPlaceDetailsFailureReducer";
import getSelectedPlacesDetailsStartReducer from "./selectedPlaceDetails/getSelectedPlacesDetailsStartReducer";


const reducers = {
    [GET_PLACE_DETAILS_START]: getPlacesDetailsStartReducer,
    [GET_PLACE_DETAILS_FAILURE]: getPlaceDetailsFailureReducer,
    [GET_PLACE_DETAILS_SUCCESS]: getPlaceDetailsSuccessReducer,
    [GET_SELECTED_PLACE_DETAILS_START]: getSelectedPlacesDetailsStartReducer,
    [GET_SELECTED_PLACE_DETAILS_SUCCESS]: getSelectedPlaceDetailsSuccessReducer,
    [GET_SELECTED_PLACE_DETAILS_FAILURE]: getSelectedPlaceDetailsFailureReducer,
}

const favouritePlaceReducer = (state = INITIAL_STATE, action) => {
    const {type,payload} = action;
    const reducer = reducers[type];
    return reducer ? reducer(state,payload) :state;
}
export default favouritePlaceReducer;