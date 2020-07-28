import {Animated, Text, TouchableOpacity , Image} from 'react-native';
import i18n from '../../i18n/i18n';
import React from 'react';
import moment from 'moment';
import styles from './StopWatchButtonsStyles';
import Gstyles from '../../GlobalStyles'

const StopWatchButton = ({
  time,
  startOnPressAction,
  timerOnPressAction,
  paused,
}) => {
  const timerOpacity = new Animated.Value(1);
  const BLINK_DELAY = 500;
  const blinker = toValue => {
    if (paused) {
      Animated.timing(timerOpacity, {
        toValue,
        duration: BLINK_DELAY,
        useNativeDriver:false
      }).start(() => {
        blinker(toValue === 1 ? 0 : 1);
      });
    } 
    else {
      Animated.timing(timerOpacity, {
        toValue: 1,
        duration: BLINK_DELAY,
        useNativeDriver:false
      }).start();
    }
  };

  blinker(0);

  if (time > 0) {
    return (
      <TouchableOpacity
        style={styles.actionBtn}
        onPress={timerOnPressAction}>
        <Animated.View
          style={[
            styles.actionBtn,
            {opacity: timerOpacity},
          ]}>
          <Text style={styles.textBtn}>
            {moment.utc(time).format(i18n.TIME_FORMAT)}
          </Text>
          <Image 
            source={require('../../../assets/pause.png')}
            blurRadius={1} 
            style={[styles.p ,{height: 70}]} 
          />
        </Animated.View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={styles.actionBtn}
      onPress={startOnPressAction}
    >
      <Image 
        source={require('../../../assets/play.png')} 
        blurRadius={1} 
        style={styles.b}
      />
    </TouchableOpacity>
  );
};

export default StopWatchButton;
