import {
    connect
} from 'react-redux';
import Places from "../components/Places";
import getPlaceDetails from '../actions/getPlaceDetails';
import getSelectedPlaceDetails from '../actions/getSelectedPlaceDetails';
import addtoFavourites from '../actions/addtoFavourites';

const mapStateToProps = state => ({
    places: state.places,
    selectedPlace: state.selectedPlace,
    placeDetailsLoading: state.placeDetailsLoading,
    favouritePlaces: state.places.filter(item => item.favourite === true),
});

const mapDispatchToProps = (dispatch) => ({
    getPlaceDetails: () => dispatch(getPlaceDetails()),
    getSelectedPlaceDetails: (id) => dispatch(getSelectedPlaceDetails(id)),
    addToFavourites: (id) => dispatch(addtoFavourites(id)),
});

const PlacesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Places)

export default PlacesContainer;