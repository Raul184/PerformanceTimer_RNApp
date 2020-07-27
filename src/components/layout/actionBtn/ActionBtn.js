import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const ActionBtn = ({label, textColor, backgroundColor, onPress, direction}) => {
  return direction ? 
  <TouchableOpacity 
    style={[styles.btn , {backgroundColor} , styles.right]}
    onPress={onPress}
  >
    <Text style={[styles.captionStyle,{ color: textColor }]}>{label}</Text>
  </TouchableOpacity>
  :
  <TouchableOpacity 
    style={[styles.btn , {backgroundColor}, styles.left]}
    onPress={onPress}
  >
    <Text style={[styles.captionStyle,{ color: textColor }]}>{label}</Text>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  btn:{
    width: 134,
    height:30,
    padding:25,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center'
  },
  left:{
    borderTopRightRadius:20,
    borderBottomLeftRadius:20
  },
  right:{
    borderTopLeftRadius:20,
    borderBottomRightRadius:20
  },
  captionStyle:{
    fontSize:24,
    textTransform: 'capitalize'
  }
})
export default ActionBtn
