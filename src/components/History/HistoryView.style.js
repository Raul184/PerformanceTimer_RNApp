import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    fontSize:40,
    textAlign:'center'
  },
  listItem: {
    flexDirection:'row',
    borderBottomWidth:1,
    borderColor:'#EAEAEA',
    padding:12,
    height:65
  },
  listItem2: {
    flex:2,
    alignItems:'flex-end',
    flexDirection:'column',
    justifyContent:'space-between'
  }
})
export default styles;