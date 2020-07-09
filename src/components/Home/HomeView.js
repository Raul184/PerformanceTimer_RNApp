import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import homeViewStyles from './HomeView.styles'
const HomeView = () => {
  handlePress = () => console.log('pressed');
  return (
    <View style={[{flex:1}, homeViewStyles.container]}>
      <View style={{flex:1}}>
        <Text style={homeViewStyles.header}>Hi Br@!</Text>
      </View>
      <View style={{flex:2}}>
        <TouchableOpacity
          style={homeViewStyles.actionBtn} 
          onPress={handlePress}
        >
          <Text style={homeViewStyles.textBtn}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeView;