import React from 'react';
import {useFormInput} from '../../hooks';
import EditProfileView from './editProfile.view';

const EditProfileContainer = props => {
  const {user} = props?.route?.params;
  const userName = useFormInput(user.userName);
  const address = useFormInput(user.address);
  const email = useFormInput(user.email);
  const phone = useFormInput(user.phone);
  return (
    <EditProfileView
      user={user}
      userName={userName}
      address={address}
      email={email}
      phone={phone}
    />
  );
};

export default EditProfileContainer;
