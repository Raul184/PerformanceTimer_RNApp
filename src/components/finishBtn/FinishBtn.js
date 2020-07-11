import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'

const FinishBtn = () => {
  return (
    <TouchableOpacity>
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
