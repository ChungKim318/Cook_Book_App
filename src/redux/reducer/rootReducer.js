import {combineReducers} from 'redux';
import modalReducer from '../isActiveModal/reducer';

const rootReducer = combineReducers({
  modal: modalReducer,
});

export default rootReducer;
