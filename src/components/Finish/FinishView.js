import React, {useState} from 'react';
import {Text, SafeAreaView, ImageBackground, TextInput, View} from 'react-native';
import Gstyles from '../../GlobalStyles'
import styles from './FinishViewStyles';
import ResponsiveCentered from './ResponsiveCentered';
import ActionBtn from './ActionBtn';
import i18n from '../../i18n/i18n';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';
import {ACTIVITY_STORAGE_KEY} from '../../config/consts';

const FinishView = ({route, navigation:{goBack}}) => {
  const { timeSpent } = route.params;
  const [name, setName] = useState('');
  const [validate, setValidate] = useState(false)

  const saveTime = async () => {
    if(name.length === 0) {
      setValidate(true)
      setTimeout(() => setValidate(false), 1500)
      return
    }
    let activities = await AsyncStorage.getItem(ACTIVITY_STORAGE_KEY);
    if (activities === null) {
      activities = [];
    } else {
      activities = JSON.parse(activities);
    }
    const date = new Date().getTime();
    activities.push({
      name,
      timeSpent,
      date,
    });
    await AsyncStorage.setItem(
      ACTIVITY_STORAGE_KEY,
      JSON.stringify(activities),
    );
    goBack();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground 
          source={require("../../../assets/lion.png")} 
          style={Gstyles.image} 
      >
        <View style={{flex: 4, justifyContent: 'space-between'}}>
          <Text style={Gstyles.header}>
            {i18n.FV.HEADER}
          </Text>
          <Text style={styles.subHeader}>
            {moment.utc(timeSpent).format(i18n.TIME_FORMAT)}
          </Text>
          <View style={{flex: 0.2}} />
        </View>

        <View style={{flex: 1}}>
          <ResponsiveCentered>
            <TextInput
              style={styles.input}
              placeholder='Name it'
              value={name}
              onChangeText={txt => setName(txt)}
              minLength={4}
              required
            />
            { validate && <Text style={styles.alert}>
                Give it a name mate, thanks.
              </Text>}
          </ResponsiveCentered>
        </View>
        <View style={{flex: 5}}>
          <ResponsiveCentered>
            <View style={styles.btnSection}>
              <ActionBtn 
                label={i18n.SAVE} 
                backgroundColor={'rgba(122, 233, 173, 0.38)'} 
                textColor={'#fff'} 
                onPress={saveTime}
                direction={true}
              />
              <ActionBtn 
                label={i18n.CANCEL} 
                backgroundColor={'rgba(235, 78, 78, 0.24);'} 
                textColor={'#fff'}
                onPress={goBack} 
              />
            </View>
          </ResponsiveCentered>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default FinishView;
