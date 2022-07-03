import {IS_ACTIVE_MODAL} from './constants';

const initialState = {
  isActive: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_ACTIVE_MODAL.START: {
      return {isActive: true};
    }
    case IS_ACTIVE_MODAL.END: {
      return {isActive: false};
    }
  }
  return state;
};

export default modalReducer;
