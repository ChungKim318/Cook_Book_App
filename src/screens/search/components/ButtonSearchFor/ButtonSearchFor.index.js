import React from 'react';
import stylesOri from '../../../../constants/stylesOri';
import styles from './ButtonSearchFor.styles';
import {ButtonCustom} from '../../../../components';

const ButtonSearchFor = ({title, isActive, onPress, ...props}) => {
  // console.log('ButtonSearchFor re-render');
  return (
    <ButtonCustom
      styleButton={{
        ...stylesOri.buttonSmall,
        ...styles(isActive).button,
      }}
      styleText={{
        ...stylesOri.buttonSmallText,
        ...styles(isActive).buttonText,
      }}
      title={title}
      onPress={onPress}
    />
  );
};

export default React.memo(ButtonSearchFor);
