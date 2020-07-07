import {
    connect
} from 'react-redux';
import Places from "../components/Places";
import getPlaceDetails from '../actions/getPlaceDetails';
import getSelectedPlaceDetails from '../actions/getSelectedPlaceDetails';

const mapStateToProps = state => ({
    places: state.places,
    selectedPlace: state.selectedPlace,
    placeDetailsLoading: state.placeDetailsLoading
});

const mapDispatchToProps = (dispatch) => ({
    getPlaceDetails: () => dispatch(getPlaceDetails()),
    getSelectedPlaceDetails: (id) => dispatch(getSelectedPlaceDetails(id)),
});

const PlacesContainer = connect(
    mapStateToProps,
    mapDispatchToProps

)(Places)

export default PlacesContainer;