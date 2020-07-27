import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2.5,
    borderColor:'#FFF',
    padding: 12,
    height: 68,
  },
  itemName: {
    fontSize: 18,
    color:'#fff'
  },
  itemDetailsContainer: {
    flex: 2,
    alignItems: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 14,
    color:'#fff'
  },
});

export default styles;
