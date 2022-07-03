import userAdminActionType from './userAdmin.actionType';
import {dataRecipe} from '../../constants/dataRecipeFeed';

const getUserAdmin = dispatch => () => {
  return dispatch({
    type: userAdminActionType.GET_USER_ADMIN,
    payload: dataRecipe[0],
  });
};

export {getUserAdmin};
