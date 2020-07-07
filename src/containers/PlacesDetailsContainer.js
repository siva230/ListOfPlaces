import {
    connect
} from 'react-redux';
import SelectedPlace from '../components/SelectedPlace';

const mapStateToProps = state => ({
    selectedPlace: state.selectedPlace,
    selectedPlaceDetailsLoading: state.selectedPlaceDetailsLoading
})

const PlacesContainer = connect(
    mapStateToProps
)(SelectedPlace)

export default PlacesContainer;