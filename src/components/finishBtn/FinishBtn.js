import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'

const FinishBtn = ({clearTimer,stopTimer}) => {
  return (
    <TouchableOpacity onPress={() => {
      stopTimer()
      // clearTimer()
      console.log('navigation to be set')
    }}>
      <Text style={styles.btnText}>Finish</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnText:{
    fontSize: 45,
    fontWeight:'bold',
    color:'#EA4c4c'
  }
})
export default FinishBtn
