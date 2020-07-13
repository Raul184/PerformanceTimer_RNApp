import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:30,
    paddingHorizontal:20
  },
  header:{
    flex:1,
    marginTop: 20,
    fontSize:40,
    textAlign:'center'
  },
  subHeader:{
    flex:1,
    fontSize:40,
    textAlign:'center'
  },
  label:{
    fontSize:15,
    paddingHorizontal:9
  },
  input:{
    height:44,
    borderRadius:5,
    borderWidth:1,
    color:'#848484',
    paddingHorizontal:12,
    marginTop:7
  },
  btnSection:{ 
    flex:4, 
    flexDirection:'row', 
    justifyContent:'space-between',
    marginTop:60
  }
})
export default styles;