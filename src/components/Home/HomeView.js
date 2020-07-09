import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import homeViewStyles from './HomeView.styles'
import i18n from '../../i18n/i18n';

export default class HomeView extends Component {
  constructor(props){
    super(props)
    this.state = {
      time:0
    }
  }
  renderStartBtn(){
    return <TouchableOpacity
      style={homeViewStyles.actionBtn} 
      onPress={() => {
        setInterval( () => {
          this.setState({
            time: this.state.time + 1000
          })      
        }, 1000)
      }}
    >
      <Text style={homeViewStyles.textBtn}>{i18n.HOME.startBtn}</Text>
    </TouchableOpacity>
  }
  renderTimer(){
    return <TouchableOpacity
      style={homeViewStyles.actionBtn} 
      onPress={() => console.log('running')}
    >
      <Text style={homeViewStyles.textBtn}>{this.state.time}</Text>
    </TouchableOpacity>
  }

  render() {
    const {time} = this.state
    return (
      <View style={[{flex:1}, homeViewStyles.container]}>
        <View style={{flex:1}}>
          <Text style={homeViewStyles.header}>{i18n.HOME.header}</Text>
        </View>
        <View style={{flex:2}}>
          {time > 0 ? this.renderTimer(): this.renderStartBtn()}
        </View>
      </View>
    )
  }
}