import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import homePg from './HomeView.styles'
import i18n from '../../i18n/i18n';
import moment from 'moment';
export default class HomeView extends Component {
  constructor(props){
    super(props)
    this.state = {
      time:0
    }
  }
  renderStartBtn(){
    return (
      <TouchableOpacity
        style={homePg.actionBtn} 
        onPress={() => {
          setInterval( () => {
            if(!this.state.paused){
              this.setState({
                time: this.state.time + 1000
              })
            }  
          }, 1000)
        }}
      >
        <Text style={homePg.textBtn}>{i18n.HOME.startBtn}</Text>
      </TouchableOpacity>
    )
  }
  renderTimer(){
    const {time} = this.state
    return (
      <TouchableOpacity
        style={homePg.actionBtn} 
        onPress={() => {
          const {paused} = this.state
          this.setState({ paused:!paused })
        }}
      >
        <Text style={homePg.textBtn}>
          {moment.utc(time).format('HH:mm:ss')}
        </Text>
        <Text style={[homePg.actionBtn, homePg.pausedBtn]}>
          {i18n.HOME.PAUSE}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    const {time} = this.state
    return (
      <View style={[{flex:1}, homePg.container]}>
        <View style={{flex:1}}>
          <Text style={homePg.header}>{i18n.HOME.header}</Text>
        </View>
        <View style={{flex:2}}>
          {time > 0 ? this.renderTimer(): this.renderStartBtn()}
        </View>
      </View>
    )
  }
}