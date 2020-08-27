import React from 'react';
import { SafeAreaView,View, ImageBackground, Text, AppState, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Gstyles from '../../GlobalStyles'
import styles from './HomeViewStyles';
import StopWatchButton from '../StopwatchButton/StopWatchButton';
import AsyncStorage from '@react-native-community/async-storage';
import {
  APP_STATE_CHANGED_TIMESTAMP_STORAGE_KEY,
  IS_PAUSED_STORAGE_KEY,
  TIME_STORAGE_KEY,
} from '../../config/consts';
class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    this.handleAppStateChange('initial');
  }

  async handleAppStateChange(nextAppState) {
    const now = new Date().getTime();
    const {time, paused} = this.state;
    const readTime = parseInt(await AsyncStorage.getItem(TIME_STORAGE_KEY));
    const readStateChangeTimestamp = parseInt(
      await AsyncStorage.getItem(APP_STATE_CHANGED_TIMESTAMP_STORAGE_KEY),
    );

    if (
      !isNaN(readTime) &&
      (nextAppState === 'active' || nextAppState === 'initial')
    ) {
      const timeDifference = now - readStateChangeTimestamp;
      const newTime = readTime !== 0 ? readTime + timeDifference : 0;
      const isPaused = await AsyncStorage.getItem(IS_PAUSED_STORAGE_KEY);
      const wasPaused = isPaused && isPaused === 'true';
      let newState = {
        paused: wasPaused,
        time: readTime,
      };
      if (!wasPaused) {
        newState.time = newTime;
      }
      this.setState(newState, () => {
        if (newState.time > 0) {
          this.startTimer();
        }
      });
    } else {
      await AsyncStorage.setItem(
        IS_PAUSED_STORAGE_KEY,
        paused === true ? 'true' : 'false',
      );
      await AsyncStorage.setItem(TIME_STORAGE_KEY, time.toString());
      await AsyncStorage.setItem(APP_STATE_CHANGED_TIMESTAMP_STORAGE_KEY, now.toString());
    }
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }
  componentWillUnmount() {
    AppState.removeEventListiner('change', this.handleAppStateChange);
  }

  startTimer() {
    this.clearTimer();
    this.timerIntervalId = setInterval(() => {
      const {time, paused} = this.state;
      if (!paused) {
        this.setState({
          time: time + 1000,
        });
      }
    }, 1000);
  }

  clearTimer() {
    if (this.timerIntervalId) {
      clearInterval(this.timerIntervalId);
    }
  }

  pauseTimer() {
    const {paused} = this.state;
    this.setState({
      paused: !paused,
    });
  }

  renderFinishButton() {
    const {time, paused} = this.state;
    if (time && !paused) {
      return (
        <TouchableOpacity
          onPress={() => {
            this.clearTimer();
            this.props.navigation.navigate('Finish', {timeSpent: time});
            this.setState({
              time: 0,
            });
          }}>
          <Ionicons 
            name='ios-square-outline' 
            size={72} 
            color='rgba(255, 255, 255, 0.6)' 
            style={{marginBottom:70}}
          />
        </TouchableOpacity>
      );
    }
    return null;
  }
  render() {
    const {time, paused} = this.state;
    return (
      <SafeAreaView style={[{flex: 1}, styles.container]}>
        <ImageBackground 
          source={require("../../../assets/lion.png")} 
          style={Gstyles.image} 
        >
          <View style={{flex: 1}}></View>
          <View style={[{flex: 2}, styles.btns]}>
            <StopWatchButton
              paused={paused}
              time={time}
              startOnPressAction={this.startTimer}
              timerOnPressAction={this.pauseTimer}
            />
            {this.renderFinishButton()}
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default HomeView;
