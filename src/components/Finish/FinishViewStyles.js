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
    height:44,
    borderRadius:5,
    borderBottomWidth:3,
    borderBottomColor:'#ffffff',
    color:'#ffffff',
    fontWeight:'bold',
    paddingHorizontal:14,
    marginTop:7
  },
  btnSection:{ 
    flex:4, 
    flexDirection:'row', 
    justifyContent:'space-between',
    marginTop:60
  }
});

export default FinishViewStyles;
