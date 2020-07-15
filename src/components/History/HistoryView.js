import React, {useEffect, useState} from 'react'
import styles from './HistoryView.style'
import { SafeAreaView,View, Text, FlatList } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import moment from 'moment';
import i18n from '../../i18n/i18n';

const HistoryView = ({navigation}) => {
  const [listAct, setListAct] = useState('')
  useEffect(() => {
    navigation.addListener('willFocus', getActivities)
    getActivities()
  }, 
  [getActivities])
  const getActivities = async () => {
    const activities = await AsyncStorage.getItem('@activities')
    let parsedActivities = []
    if(activities !== null ){
      parsedActivities = JSON.parse(activities)
    }
    setListAct(parsedActivities)
  }

  const renderItems = ({item:{name,date,spentTime}}) => {
    return <View style={styles.listItem}>
      <View style={{flex:4}}>
        <Text style={{fontSize:18}}>{name}</Text>
      </View>
      <View style={styles.listItem2}>
        <View><Text style={{fontSize:14}}>
          {date}
          </Text>
        </View>
        <View><Text style={{fontSize:14}}>
          {moment.utc(spentTime).format('DD MMM YYYY')}
          </Text>
        </View>
      </View>
    </View>
  }
  return (
    <SafeAreaView style={{flex:1}}>
      <Text style={styles.header}>{i18n.HISTORY.header}</Text>
      <FlatList 
        data={listAct}
        renderItem={renderItems}
        keyExtractor={(item,index) => item.name + index}
      />

    </SafeAreaView>
  )
}
export default HistoryView
