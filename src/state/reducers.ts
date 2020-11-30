import { combineReducers } from 'redux';

import authReducers from './ducks/auth/auth.reducers';

export default combineReducers({
  auth: authReducers,
});
