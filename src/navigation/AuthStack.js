import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import CreateAccount from '../screens/CreateAcount';
import ForgotPass from '../screens/ForgotPass';
import Splash from '../screens/Splash';

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            
            <Stack.Screen
                name='Splash'
                component={Splash}
            />


            <Stack.Screen
                name='Login'
                component={Login}
            />

            <Stack.Screen
                name='CreateAccount'
                component={CreateAccount}
            />

            <Stack.Screen
                name='ForgotPassword'
                component={ForgotPass}
            />


        </Stack.Navigator>
    )
}