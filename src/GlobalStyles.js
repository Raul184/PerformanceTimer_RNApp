'use strict';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image:{
    flex: 1,
    width:'100%',
    resizeMode: "cover",
    justifyContent: "center"
  },
  header: {
    marginTop: 35,
    textAlign:'center',
    fontSize:40,
    color:'black',
    textShadowColor:'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {
    	width: 2,
    	height: 2,
    }
  },
  shadow:{
    textShadowColor:'rgba(0, 0, 0, 0.8)',
    textShadowOffset: {
    	width: 4,
    	height: 4,
    }
  }
});