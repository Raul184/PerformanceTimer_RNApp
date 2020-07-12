import React from 'react'
import { View,Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import styles from './FinishView.style'
import ActionBtn from '../layout/actionBtn/ActionBtn'
const FinishView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:3, justifyContent:'space-between'}}>
        <Text style={styles.header}>Your mark:</Text>
        <Text style={styles.subHeader}>00:15:00</Text>
        <View style={{flex:0.2 }}/>
      </View>
      <View style={{flex:1}}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input}/>
      </View>
      <View style={{flex:4}} >
        <ActionBtn label='Save' backgroundColor={'#f32343'} textColor={'#fff'} />
        <ActionBtn label='Pass' backgroundColor={'green'} textColor={'#fff'} />
      </View>
    </SafeAreaView>
  )
}

export default FinishView
