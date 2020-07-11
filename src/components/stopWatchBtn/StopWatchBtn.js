import React from 'react'
import styles from './stopwatchBtn.styles'
import { Text, TouchableOpacity, Animated } from 'react-native'
import moment from 'moment';
import i18n from '../../i18n/i18n';

const StopWatchBtn = ({
  time,
  isPaused,
  startOnPressAction,
  timerOnPressAction
}) => {
  const timerOpacity = new Animated.Value(1)
  const blinker = toValue => {
    if(isPaused){
      Animated.timing(timerOpacity, {
        toValue ,
        duration: i18n.SWBtn.blinkDelay,
        useNativeDriver: true
      }).start(() => blinker(toValue === 1 ? 0 : 1))
    }else{
      Animated.timing(timerOpacity, {
        toValue: 1,
        duration: i18n.SWBtn.blinkDelay,
        useNativeDriver: true
      }).start()
    }
  }
  blinker(0)

  if(time > 0){
    return <TouchableOpacity
      style={styles.actionBtn} 
      onPress={timerOnPressAction}
    >
      <Animated.View style={[
        styles.actionBtn,
        {opacity: timerOpacity}
        ]}>
        <Text style={styles.textBtn}>
          {moment.utc(time).format('HH:mm:ss')}
        </Text>
        <Text style={[styles.textBtn, styles.pausedBtn]}>
          Pause
        </Text>
      </Animated.View>
    </TouchableOpacity>
  }
  else {
    return <TouchableOpacity
        style={styles.actionBtn} 
        onPress={startOnPressAction}
      >
        <Text style={styles.textBtn}>{i18n.HOME.startBtn}</Text>
    </TouchableOpacity>
  }
}
export default StopWatchBtn
