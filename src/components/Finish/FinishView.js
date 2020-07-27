import React, {useState} from 'react';
import {Text, SafeAreaView, TextInput, View} from 'react-native';
import styles from './FinishView.style';
import ResponsiveCentered from './ResponsiveCentered';
import ActionBtn from '../layout/actionBtn/ActionBtn';
import i18n from '../../i18n/i18n';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';
import {ACTIVITY_STORAGE_KEY} from '../../config/consts';

const FinishView = ({route, navigation:{goBack}}) => {
  const { spentTime } = route.params;
  const [name, setName] = useState('');

  const saveTime = async () => {
    let activities = await AsyncStorage.getItem(ACTIVITY_STORAGE_KEY);
    if (activities === null) {
      activities = [];
    } else {
      activities = JSON.parse(activities);
    }
    const date = new Date().getTime();
    activities.push({
      name,
      spentTime,
      date,
    });
    console.log('after push', activities);
    await AsyncStorage.setItem(
      ACTIVITY_STORAGE_KEY,
      JSON.stringify(activities),
    );
    goBack();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 4, justifyContent: 'space-between'}}>
        <Text style={styles.header}>
          {i18n.FV.header}
        </Text>
        <Text style={styles.subHeader}>
          {moment.utc(spentTime).format(i18n.TIME_FORMAT)}
        </Text>
        <View style={{flex: 0.2}} />
      </View>

      <View style={{flex: 1}}>
        <ResponsiveCentered>
        </ResponsiveCentered>
        <ResponsiveCentered>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={txt => setName(txt)}
          />
        </ResponsiveCentered>
      </View>
      <View style={{flex: 5}}>
        <ResponsiveCentered>
          <View style={styles.btnSection}>
            <ActionBtn 
              label={i18n.FV.save} 
              backgroundColor={'rgba(122, 233, 173, 0.38)'} 
              textColor={'#fff'} 
              onPress={saveTime}
            />
            <ActionBtn 
              label={i18n.FV.cancel} 
              backgroundColor={'rgba(235, 78, 78, 0.24);'} 
              textColor={'#fff'}
              onPress={goBack} 
            />
          </View>
        </ResponsiveCentered>
      </View>
    </SafeAreaView>
  );
};
export default FinishView;

