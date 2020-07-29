import {StyleSheet} from 'react-native';

const FinishViewStyles = StyleSheet.create({
  subHeader:{
    fontSize:48,
    fontWeight:'bold',
    fontStyle:'italic',
    color:'rgba(252, 9, 9, 0.7)',
    opacity: 0.8,
    marginBottom:30,
    textAlign:'center'
  },
  input:{
    height:50,
    borderRadius:5,
    borderBottomWidth:3,
    borderBottomColor:'#ffffff',
    fontWeight:'bold',
    fontSize:16,
    color:'#ffffff',
    paddingHorizontal:14,
    marginTop:7
  },
  alert:{
    margin:30,
    fontWeight:'bold',
    fontSize:16,
    color:'red',
  },
  btnSection:{ 
    flex:4, 
    flexDirection:'row', 
    justifyContent:'space-between',
    marginTop:60
  }
});

export default FinishViewStyles;
