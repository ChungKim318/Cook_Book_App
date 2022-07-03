import React from 'react';
import {connect} from 'react-redux';
import {getIsActiveModalSelector} from '../../redux/isActiveModal/selectors';
import {View} from 'react-native';

const withModal = WrappedComponent => {
  const HOC = ({isActive, ...props}) => {
    return (
      <View style={{flex: 1, opacity: isActive ? 0.2 : 1}}>
        <WrappedComponent {...props} />
      </View>
    );
  };

  const mapStateToProps = state => ({
    isActive: getIsActiveModalSelector(state),
  });
  return connect(mapStateToProps, null)(HOC);
};

export default withModal;
