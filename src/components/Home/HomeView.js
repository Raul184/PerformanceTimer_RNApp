import React, { Component } from 'react'
import { View, Text, AppState } from 'react-native'
import homePg from './HomeView.styles'
import i18n from '../../i18n/i18n';
import StopWatchBtn from '../stopWatchBtn/StopWatchBtn';
import AsyncStorage from '@react-native-community/async-storage'
export default class HomeView extends Component {
  constructor(props){
    super(props)
    this.state = {
      time:0
    }
    this.startTimer = this.startTimer.bind(this);
    this.pausedTimer = this.pausedTimer.bind(this);
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
  }
  componentDidMount(){
    AppState.addEventListener('change' , this.handleAppStateChange)
  }
  componentWillUnmount(){
    AppState.removeEventListener('change', this.handleAppStateChange)
  }
  async handleAppStateChange(nextAppState) {
    const now = new Date().getTime();
    const {time, paused} = this.state;
    const readTime = AsyncStorage.getItem('@time')
    // time when you went off
    const readStateChangeTimeStamp = AsyncStorage.getItem('@appStateChangedTimeStamp')
    
    const timeDiff = now - parseInt(readStateChangeTimeStamp)
    const nueTime = parseInt(readTime) + timeDiff
    
    if(nextAppState === 'active'){
      const isPaused = await AsyncStorage.getItem('@isPaused')
      const wasPaused = isPaused && isPaused ==='true'
      let newState = {
        pauded: wasPaused,
        time: parseInt(readTime)
      }
      if(!wasPaused){
        newState.time = nueTime
      }
      this.setState(newState , this.startTimer)
    }
    await AsyncStorage.setItem('@isPaused', paused === true ? true : false)
    await AsyncStorage.setItem('@time', time)
    await AsyncStorage.setItem('@appStateChangegTimeStamp', now)
  }

  startTimer(){
    if(this.timerIntervalId) clearInterval(this.timerIntervalId)
    this.timerIntervalId = setInterval(() => {
      const {time,paused}= this.state;
      if(!paused){
        this.setState({time: time + 1000})
      }
    },1000)
  }
  pausedTimer(){
    const {paused} = this.state;
    this.setState({ paused: !paused })
  }
  render() {
    const {time} = this.state
    return <View style={[{flex:1}, homePg.container]}>
      <View style={{flex:1}}>
        <Text style={homePg.header}>{i18n.HOME.header}</Text>
      </View>
      <View style={{flex:2}}>
        <StopWatchBtn 
          time={time} 
          startOnPressAction={this.startTimer}
          timerOnPressAction={this.pausedTimer}
        />
      </View>
    </View>
  }
}