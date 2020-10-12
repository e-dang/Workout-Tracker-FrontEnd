import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginContainer} from '@auth/containers/login.container';
import {WelcomeContainer} from '@auth/containers/welcome.container';
import {SignUpContainer} from '@auth/containers/signup.container';

const Stack = createStackNavigator();

export function AuthNavigator({navigation}) {
    return (
        <Stack.Navigator initialRouteName="Welcome" headerMode="none">
            <Stack.Screen name="Welcome" navigation={navigation} component={WelcomeContainer} />
            <Stack.Screen name="Login" navigation={navigation} component={LoginContainer} />
            <Stack.Screen name="SignUp" navigation={navigation} component={SignUpContainer} />
        </Stack.Navigator>
    );
}
