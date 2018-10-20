import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import vehicleInfoReducer from '../reducers/vehicleInfo';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      vehicleInfo: vehicleInfoReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
