import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux';
import React from 'react';
import HomeScreen from './android/app/src/screens/HomeScreen';
import DetailsScreen from './android/app/src/screens/DetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Store from './android/app/src/redux/Store';
import TaskDetailsScreen from './android/app/src/screens/TaskDetailsScreen';
import EditScreen from './android/app/src/screens/EditScreen';
const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})