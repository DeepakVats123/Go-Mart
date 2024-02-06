import {legacy_createStore as createStore} from 'redux';
import { ProductReducer } from '../Reducers/ProductReducer';

export const store = createStore(ProductReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())