import React, {useState, useEffect} from 'react';
import styles from './HistoryView.style';
import {SafeAreaView, Text, View, FlatList} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment'; 
import i18n from '../../i18n/i18n'
import {ACTIVITY_STORAGE_KEY} from '../../config/consts';

class HistoryView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parsedActivities: [],
    };
    this.getActivities = this.getActivities.bind(this);
    props.navigation.addListener('willFocus', this.getActivities);
    this.getActivities()
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
      <View style={styles.listItem}>
        <View style={{flex: 4}}>
          <Text style={styles.itemNameText}>{item.name}</Text>
        </View>
        <View style={styles.listItem2}>
          <View>
            <Text style={styles.itemDetailsText}>
              {moment.utc(item.date).format(i18n.DATE_FORMAT)}
            </Text>
          </View>
          <View>
            <Text style={styles.itemDetailsText}>
              {moment.utc(item.spentTime).format(i18n.TIME_FORMAT)}
            </Text>
          </View>
        </View>
      </View>
    );
  }
  render(){
    const {parsedActivities} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <Text style={styles.header}>
          {i18n.HISTORY.header}
        </Text>
        <FlatList
          data={parsedActivities}
          renderItem={this.renderItem}
          showsVerticalScrollIndicator={true}
          keyExtractor={(item, index) => {
            return item.name + index;
          }}
        />
      </SafeAreaView>
    );
  }
}

export default HistoryView;