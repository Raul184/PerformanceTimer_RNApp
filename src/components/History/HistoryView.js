import React from 'react';
import {SafeAreaView,ImageBackground, Text, View, FlatList} from 'react-native';
import Gstyles from '../../GlobalStyles'
import styles from './HistoryViewStyles';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';
import i18n from '../../i18n/i18n';
import {ACTIVITY_STORAGE_KEY} from '../../config/consts';

class HistoryView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parsedActivities: [],
    };
    this.getActivities = this.getActivities.bind(this);
    this.getActivities()
    props.navigation.addListener('focus', () =>  this.getActivities());
  }
  componentWillUnmount(){
    return props.navigation.removeListener()
  }
  async getActivities() {
    const activities = await AsyncStorage.getItem(ACTIVITY_STORAGE_KEY);
    let parsedActivities = [];
    if (activities !== null) {
      parsedActivities = JSON.parse(activities);
    }
    this.setState({parsedActivities: parsedActivities.reverse()});
  }

  renderItem({item}) {
    return (
      <View style={styles.container}>
        <View style={{flex: 4, justifyContent:'center'}}>
          <Text style={styles.itemName}>{item.name}</Text>
        </View>
        <View style={styles.itemDetailsContainer}>
          <View>
            <Text style={styles.itemText}>
              {moment.utc(item.date).format(i18n.DATE_FORMAT)}
            </Text>
          </View>
          <View>
            <Text style={styles.itemText}>
              {moment.utc(item.timeSpent).format(i18n.TIME_FORMAT)}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  render() {
    const {parsedActivities} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground 
          source={require("../../../assets/lion.png")} 
          style={Gstyles.image} 
        >
          <Text style={Gstyles.header}>
            {i18n.HistV.HEADER}
          </Text>
          <FlatList
            data={parsedActivities}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => {
              return item.name + index;
            }}
          />
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default HistoryView;
