import React from 'react'
import styles from './FinishView.style'
import { View,Text, SafeAreaView, TextInput} from 'react-native'
import ActionBtn from '../layout/actionBtn/ActionBtn'
import i18n from '../../i18n/i18n'
const FinishView = ({navigation}) => {
  const timeSpent = navigation.getParam('spentTime');
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:3, justifyContent:'space-between'}}>
        <Text style={styles.header}>{i18n.FV.header}</Text>
        <Text style={styles.subHeader}>{
          moment.utc(timeSpent).format('HH:mm:ss')
        }</Text>
        <View style={{flex:0.2 }}/>
      </View>
      <View style={{flex:1}}>
        <Text style={styles.label}>{i18n.FV.name}</Text>
        <TextInput style={styles.input}/>
      </View>
      <View style={styles.btnSection} >
        <ActionBtn label={i18n.FV.save} backgroundColor={'#f32343'} textColor={'#fff'} />
        <ActionBtn label={i18n.FV.cancel} backgroundColor={'green'} textColor={'#fff'} />
      </View>
    </SafeAreaView>
  )
}

export default FinishView
