import React, {useContext} from 'react';
import UserProfileView from './userProfile.view';
import {Context as ConTextUserAdmin} from '../../contexts/userAdmin/userAdmin.context';

const UserProfileContainer = props => {
  const {state} = useContext(ConTextUserAdmin);

  return <UserProfileView user={state.userAdmin} />;
};

export default UserProfileContainer;
