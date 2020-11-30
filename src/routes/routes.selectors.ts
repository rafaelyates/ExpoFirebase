import { createSelector, createStructuredSelector } from 'reselect';

import { ReduxState } from '../models/state.models';
import { RoutesSelection } from './routes.models';

const selectAuth = (state: ReduxState) => state.auth;

export default createStructuredSelector<ReduxState, RoutesSelection>({
  idToken: createSelector(selectAuth, (auth) => auth.idToken),
});
