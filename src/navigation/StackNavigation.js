import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// import Login from '../screens/Login';
// import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

export default function StackNavigation() {
    return (
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={RegisterScreen} /> */}
            <Stack.Screen name='Welcome' component={WelcomeScreen} />
            <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
    )
}