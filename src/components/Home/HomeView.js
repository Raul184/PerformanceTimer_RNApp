import React, { Component } from 'react'
import { View, ImageBackground, Text, AppState, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import styles from './HomeView.styles'
import i18n from '../../i18n/i18n';
import AsyncStorage from '@react-native-community/async-storage'
import StopWatchBtn from '../layout/stopWatchBtn/StopWatchBtn';
import {
  APP_STATE_CHANGED_TIMESTAMP_STORAGE_KEY,
  IS_PAUSED_STORAGE_KEY,
  TIME_STORAGE_KEY,
} from '../../config/consts';

export default class HomeView extends Component {
  constructor(props){
    super(props)
    this.state = {
      time:0
    }
    this.startTimer = this.startTimer.bind(this);
    this.pausedTimer = this.pausedTimer.bind(this);
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    this.handleAppStateChange('initial')
  }

  async handleAppStateChange(nextAppState) {
    const now = new Date().getTime();
    const {time, paused} = this.state;
    const readTime = parseInt( await AsyncStorage.getItem(TIME_STORAGE_KEY))
    const readStateChangeTimeStamp = parseInt(
      await AsyncStorage.getItem(APP_STATE_CHANGED_TIMESTAMP_STORAGE_KEY)
    )
    
    if( !isNaN(readTime) && 
      ( nextAppState === 'active' || nextAppState === 'initial')
    ){
      const timeDiff = now - readStateChangeTimeStamp
      const nueTime = readTime + timeDiff
      const isPaused = await AsyncStorage.getItem(IS_PAUSED_STORAGE_KEY)
      const wasPaused = isPaused && isPaused ==='true'
      let newState = {
        paused: wasPaused,
        time: readTime
      }
      if(!wasPaused){
        newState.time = nueTime
      }
      this.setState(newState , () => {
        if(newState.time > 0){
          this.startTimer()
        }
      });
    }
    else{
      await AsyncStorage.setItem(
        IS_PAUSED_STORAGE_KEY, paused === true ? 'true' : 'false'
      )
      await AsyncStorage.setItem(
        TIME_STORAGE_KEY, time.toString()
      )
      await AsyncStorage.setItem(
        APP_STATE_CHANGED_TIMESTAMP_STORAGE_KEY, now.toString()
      )
    }
  }
  componentDidMount(){
    AppState.addEventListener('change' , this.handleAppStateChange)
  }
  componentWillUnmount(){
    AppState.removeEventListener('change', this.handleAppStateChange)
  }

  startTimer(){
    this.clearTimer()
    this.timerIntervalId = setInterval(() => {
      const {time,paused}= this.state;
      if(!paused){
        this.setState({time: time + 1000})
      }
    },1000)
  }

  clearTimer(){
    if(this.timerIntervalId) {
      clearInterval(this.timerIntervalId)
    }
  }

  pausedTimer(){
    const {paused} = this.state;
    this.setState({ paused: !paused })
  }

  renderFinishBtn(){
    const {time,paused} = this.state;
    if(time > 0 && !paused){
      return (
        <TouchableOpacity onPress={() => {
          this.clearTimer()
          this.props.navigation.navigate('Finish',{spentTime: time})
          this.setState({ time: 0 })
        }}>
          <Ionicons name='ios-square-outline' size={72} color='white' style={{marginBottom:70}}/>
        </TouchableOpacity>
      )
    }
    return null
  }
  render() {
    const {time,paused} = this.state
    return <View style={[{flex:1}, styles.container]}>
      <ImageBackground 
        source={require("../../../assets/lion.png")} 
        style={styles.image} 
      >
        <View style={{flex:1}}>
          <Text style={styles.header}>{i18n.HOME.header}</Text>
        </View>
        <View style={styles.btns}>
          <StopWatchBtn 
            time={time} 
            isPaused={paused}
            startOnPressAction={this.startTimer}
            timerOnPressAction={this.pausedTimer}
          />
          {this.renderFinishBtn()}
        </View>
      </ImageBackground>
    </View>
  }
}