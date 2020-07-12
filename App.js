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
            } 
            else if (route.name === 'History') {
              iconName = focused ? 'ios-list-box' : 'ios-analytics';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'gray',
          labelStyle:{
            fontSize:12,
            fontWeight:'bold'
          }
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen 
          name="History"
          component={HistoryStackScreen} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}