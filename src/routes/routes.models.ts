import { Theme } from '@react-navigation/native';

import { authInitialState } from '../state/ducks/auth/auth.reducers';

export declare type RoutesProps = {
  readonly theme?: Theme;
};

export declare type RoutesSelection = Pick<typeof authInitialState, 'idToken'>;
