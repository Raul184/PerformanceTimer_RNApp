import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const ActionBtn = ({label, textColor, backgroundColor, onPress}) => {
  return <TouchableOpacity 
    style={[styles.btn , {backgroundColor}]}
    onPress={onPress}
  >
    <Text style={[styles.captionStyle,{ color: textColor }]}>{label}</Text>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  btn:{
    width: 134,
    height:34,
    borderRadius: 15,
    justifyContent:'center',
    alignItems:'center'
  },
  captionStyle:{
    fontSize:24,
    textTransform: 'lowercase'
  }
})
export default ActionBtn
