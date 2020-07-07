import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from  'redux-logger';
import favouritePlaceReducer from './reducers/favouritePlaceReducer';

function configureStore(){
    return createStore(favouritePlaceReducer, applyMiddleware(thunk, logger));

}
export default configureStore();