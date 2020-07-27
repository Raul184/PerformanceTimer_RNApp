import {StyleSheet} from 'react-native';

const StopWatchButtonsStyles = StyleSheet.create({
  actionBtn:{
    width:230,
    height:184,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:142
  },
  b:{
    opacity: 0.8,
    width:70,
    height:75
  },
  p:{
    opacity:0.6,
    width:70
  },
  textBtn:{
    fontSize:60,
    fontStyle:'italic',
    color:'rgba(252, 9, 9, 0.97)',
    opacity: 0.8,
    marginBottom:30
  },
  pausedBtn:{
    fontSize:35
  }
});

export default StopWatchButtonsStyles;
