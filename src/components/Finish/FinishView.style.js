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