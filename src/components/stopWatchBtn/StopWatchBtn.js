import React from 'react'
import styles from './stopwatchBtn.styles'
import { Text, TouchableOpacity } from 'react-native'
import moment from 'moment';
import i18n from '../../i18n/i18n';

const StopWatchBtn = ({time,startOnPressAction,timerOnPressAction}) => {
  if(time > 0){
    return <TouchableOpacity
      style={styles.actionBtn} 
      onPress={timerOnPressAction}
    >
      <Text style={styles.textBtn}>
        {moment.utc(time).format('HH:mm:ss')}
      </Text>
      <Text style={[styles.textBtn, styles.pausedBtn]}>
        Pause
      </Text>
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
