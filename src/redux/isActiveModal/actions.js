import {IS_ACTIVE_MODAL} from './constants';

const startModal = () => {
  return {type: IS_ACTIVE_MODAL.START};
};

const endModal = () => {
  return {type: IS_ACTIVE_MODAL.END};
};

export {startModal, endModal};
