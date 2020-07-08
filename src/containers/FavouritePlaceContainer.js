import {
    connect
} from 'react-redux';
import FavouritePlaces from '../components/FavouritePlaces';

const mapStateToProps = state => ({
    favouritePlaces: state.places.filter(item => item.favourite === true),
});

const FavouritePlaceContainer = connect(
    mapStateToProps
)(FavouritePlaces)

export default FavouritePlaceContainer;