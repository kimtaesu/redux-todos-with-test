import { createStore } from 'redux';
import rootReducer, { RootState } from '../modules';

function configureStore(initialState?: RootState) {
  return createStore(rootReducer, initialState);
}

export default configureStore;
