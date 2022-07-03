import userAdminActionType from './userAdmin.actionType';

const initialState = {
  userAdmin: [],
};

const userAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case userAdminActionType.GET_USER_ADMIN:
      return {
        userAdmin: action.payload,
      };
  }
  return state;
};

export default userAdminReducer;
