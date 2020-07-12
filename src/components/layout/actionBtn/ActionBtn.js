import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const ActionBtn = ({label, textColor, backgroundColor,onPress}) => {
  return <TouchableOpacity 
    style={{ width: 134,height:34,borderRadius: 15, backgroundColor}}
    onPress={onPress}
  >
  <Text style={{ color: textColor }}>{label}</Text>
</TouchableOpacity>
}

export default ActionBtn
