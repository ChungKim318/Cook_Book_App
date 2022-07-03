import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './TextInputCustom.styles';

const TextInputCustom = ({
  title,
  value,
  isSecure,
  errorMessage,
  forgotPassword,
  keyboardType,
}) => {
  //  console.log('TextInputCustom re-render');
  return (
    <View style={styles.inputView}>
      <View style={styles.titleView}>
        {!!title && <Text style={styles.titleInput}>{title}</Text>}
        {!!forgotPassword && (
          <Text style={styles.titleInput}>{forgotPassword}</Text>
        )}
      </View>
      <TextInput
        style={styles.textInput}
        value={value.value}
        onChangeText={value.onChange}
        secureTextEntry={!!isSecure}
        keyboardType={keyboardType}
      />
      {!!errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

export default React.memo(TextInputCustom);
