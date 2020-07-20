import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'
import HomeView from './src/components/Home/HomeView';
import FinishView from './src/components/Finish/FinishView';
import HistoryView from './src/components/History/HistoryView';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeView} options={{headerShown:false}} />
      <Stack.Screen name="Finish" component={FinishView} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}
function HistoryStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="History" component={HistoryView} options={{headerShown:false}} />
      <Stack.Screen name="Finish" component={FinishView} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home'
              size=35
            } 
            else if (route.name === 'History') {
              iconName = focused ? 'ios-analytics' : 'ios-analytics';
              size=35
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: ' rgba(0, 0, 0, 0.37)',
          inactiveTintColor: 'rgba(255, 255, 255, 0.97)',
          lazyLoad:true,
          labelStyle:{
            display:'none',
            padding:0
          },
          style:{
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            position: 'absolute',
            bottom: 10,
            height: 80
          },
          activeBackgroundColor:'none',
          inactiveBackgroundColor:'none'
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="History" component={HistoryStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}