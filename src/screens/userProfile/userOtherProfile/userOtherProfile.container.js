import React from 'react';
import UserOtherProfileView from './userOtherProfile.view';
import {useRoute} from '@react-navigation/native';

const UserOtherProfileContainer = props => {
  const user = useRoute().params.user;
  return <UserOtherProfileView user={user} />;
};

export default UserOtherProfileContainer;
