
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import demo from './demo.reducer';


const reducers = combineReducers({
  demo,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let middle;
if (process.env.NODE_ENV === 'development') {
  middle = composeEnhancers(applyMiddleware(thunkMiddleware));
} else {
  middle = applyMiddleware(thunkMiddleware);
}

function configureStore() {
  return createStore(reducers, middle);
}

export default configureStore;
