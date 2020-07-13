import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const ActionBtn = ({label, textColor, backgroundColor}) => {
  return <TouchableOpacity style={[styles.btn , {backgroundColor}]}>
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
