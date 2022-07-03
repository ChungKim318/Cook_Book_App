import React, {useState} from 'react';
import {View, Text} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import styles from './MultiSliderCustom.styles';

const MultiSliderCustom = ({sliderLength, valueDefault, title, ...prop}) => {
  const [multiSliderValue, setMultiSliderValue] = useState([
    valueDefault[0],
    valueDefault[0] + 1,
  ]);
  const multiSliderValuesChange = values => setMultiSliderValue(values);
  // console.log('MultiSliderCustom re-render');
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.valueText}>
          {multiSliderValue[0]}-{multiSliderValue[1]} mins
        </Text>
      </View>
      <View style={styles.footerContainer}>
        <MultiSlider
          values={[multiSliderValue[0], multiSliderValue[1]]}
          sliderLength={sliderLength}
          onValuesChange={multiSliderValuesChange}
          min={valueDefault[0]}
          max={valueDefault[1]}
          step={1}
          snapped
          selectedStyle={styles.sliderStyle}
          markerStyle={styles.sliderStyle}
          trackStyle={styles.trackSlider}
        />
      </View>
    </View>
  );
};

export default React.memo(MultiSliderCustom);
