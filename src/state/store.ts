import promises from 'redux-promise';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import reducers from './reducers';

// import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

const middleware = getDefaultMiddleware({
  // serializableCheck: {
  //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  // },
});

/**
 * Creates the store.
 */
export default configureStore({
  devTools: __DEV__,
  reducer: reducers,
  middleware: middleware.concat([promises]),
});
