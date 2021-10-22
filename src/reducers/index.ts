import { combineReducers } from 'redux';
import LayersReducers from './layers';

const allReducers = combineReducers({
    layers: LayersReducers,
});

export default allReducers;
