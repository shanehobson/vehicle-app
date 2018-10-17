import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import vehicleInfoReducer from '../reducers/vehicleInfo';
import isLoadingReducer from '../reducers/isLoading';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      vehicleInfo: vehicleInfoReducer,
      isLoading: isLoadingReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
