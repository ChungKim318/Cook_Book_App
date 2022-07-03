import React, {useState} from 'react';
import {View, Text} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import styles from './SliderCustom.styles';

const SliderCustom = ({sliderLength, valueMin, valueMax, title, ...prop}) => {
  const [sliderChanging, setSliderChanging] = useState(false);
  const [sliderValue, setSliderValue] = useState([valueMin]);

  const sliderValuesChangeStart = () => setSliderChanging(true);
  const sliderValuesChangeFinish = () => setSliderChanging(false);
  const sliderValuesChange = values => setSliderValue(values);
  // console.log('SliderCustom re-render');
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.valueText}>{sliderValue}</Text>
      </View>
      <View style={styles.footerContainer}>
        <MultiSlider
          values={sliderValue}
          sliderLength={sliderLength}
          onValuesChangeStart={sliderValuesChangeStart}
          onValuesChange={sliderValuesChange}
          onValuesChangeFinish={sliderValuesChangeFinish}
          step={1}
          min={valueMin}
          max={valueMax}
          selectedStyle={styles.sliderStyle}
          markerStyle={styles.sliderStyle}
          trackStyle={styles.trackSlider}
        />
      </View>
    </View>
  );
};

export default React.memo(SliderCustom);
