import React, { Component } from 'react'
import styles from './HomeView.styles'
import { View, Text, AppState, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import i18n from '../../i18n/i18n';
import StopWatchBtn from '../layout/stopWatchBtn/StopWatchBtn';
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
  componentDidMount(){
    AppState.addEventListener('change' , this.handleAppStateChange)
  }
  componentWillUnmount(){
    AppState.removeEventListener('change', this.handleAppStateChange)
  }
  async handleAppStateChange(nextAppState) {
    const now = new Date().getTime();
    const {time, paused} = this.state;
    const readTime = parseInt( await AsyncStorage.getItem('@time'))
    const readStateChangeTimeStamp = parseInt(
      await AsyncStorage.getItem('@appStateChangedTimeStamp')
    )
    const timeDiff = now - readStateChangeTimeStamp
    const nueTime = readTime + timeDiff
    
    if( !isNan(readTime) && nextAppState === 'active' || nextAppState === 'initial'){
      const isPaused = await AsyncStorage.getItem('@isPaused')
      const wasPaused = isPaused && isPaused ==='true'
      let newState = {
        paused: wasPaused,
        time: readTime
      }
      if(!wasPaused){
        newState.time = nueTime
      }
      this.setState(newState , this.startTimer)
    }
    await AsyncStorage.setItem('@isPaused', paused === true ? 'true' : 'false')
    await AsyncStorage.setItem('@time', time.toString())
    await AsyncStorage.setItem('@appStateChangegTimeStamp', now.toString())
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
          <Text style={styles.btnText}>{i18n.HOME.finishBtn}</Text>
        </TouchableOpacity>
      )
    }
    return null
  }
  render() {
    const {time,paused} = this.state
    return <View style={[{flex:1}, styles.container]}>
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
    </View>
  }
}