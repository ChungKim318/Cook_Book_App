import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import colors from '../../../../constants/colors';
import styles from './SwitchCustom.styles';

const SwitchCustom = ({title, onEnabledTrue, onEnabledFalse, styleSwitch}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  // console.log('SwitchCustom re-render');

  return (
    <View style={[styles.container, styleSwitch]}>
      <Text style={styles.titleText}>{title}</Text>
      <Switch
        trackColor={{false: colors.grey, true: colors.primary}}
        thumbColor={colors.white}
        ios_backgroundColor={colors.grey}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default React.memo(SwitchCustom);
