import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import features from './features.reducer';
import applications from './applications.reducer';

export default combineReducers({
  routing,
  features,
  applications,
});
