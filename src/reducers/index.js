import { combineReducers } from 'redux';
import countryReducer from './country';
import profileReducer from './profile';
import alertReducer from './alert';

export default combineReducers({

  countryReducer,
  profileReducer,
  alertReducer,

});
