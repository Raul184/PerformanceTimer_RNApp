import {StyleSheet} from 'react-native';
const homePg = StyleSheet.create({
  container: {
    alignItems:'center'
  },
  image:{
    flex: 1,
    width:'100%',
    resizeMode: "cover",
    justifyContent: "center"
  },
  header:{
    marginTop: 35,
    textAlign:'center',
    fontSize:40,
    color:'black'
  },
  btns:{
    flex:2,
    alignItems:'center',
    justifyContent: 'space-between'
  },
  actionBtn:{
    width:284,
    height:284,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'red',
    borderRadius:142
  },
  textBtn:{
    fontSize:40,
    fontWeight:'bold'
  },
  pausedBtn:{
    fontSize:35
  },
  btnText:{
    fontSize: 45,
    fontWeight:'bold',
    color:'#EA4c4c'
  }
})
export default homePg;