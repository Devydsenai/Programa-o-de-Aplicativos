import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../page/Home';
import SignIn from '../page/SignIn';
import SignUp from '../page/SignUp';
import Preload from '../page/Preload';

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Preload" component={Preload} />
        </Stack.Navigator>
    );
}
