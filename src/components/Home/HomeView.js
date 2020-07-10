import React, { Component } from 'react'
import { View, Text } from 'react-native'
import homePg from './HomeView.styles'
import i18n from '../../i18n/i18n';
import StopWatchBtn from '../stopWatchBtn/StopWatchBtn';
export default class HomeView extends Component {
  constructor(props){
    super(props)
    this.state = {
      time:0
    }
    this.startTimer = this.startTimer.bind(this);
    this.pausedTimer = this.pausedTimer.bind(this);
  }
  startTimer(){
    setInterval(() => {
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