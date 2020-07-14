import React from 'react'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

const HistoryView = () => {
  let activities = await AsyncStorage.getItem('@activities')
  console.log(activities);
  return (
    <View>
      <Text>History View</Text>
    </View>
  )
}
export default HistoryView
