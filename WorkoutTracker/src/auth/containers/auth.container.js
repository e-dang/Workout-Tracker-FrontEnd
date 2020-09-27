import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginContainer} from '@auth/containers/login.container';
import {WelcomeContainer} from '@auth/containers/welcome.container';
import {SignUpContainer} from '@auth/containers/signup.container';

const authStack = createStackNavigator();

export function AuthContainer({navigation}) {
    return (
        <NavigationContainer independent={true} mode="modal">
            <authStack.Navigator headerMode="none" initialRouteName="Welcome">
                <authStack.Screen name="Welcome" navigation={navigation} component={WelcomeContainer} />
                <authStack.Screen name="Login" navigation={navigation} component={LoginContainer} />
                <authStack.Screen name="SignUp" navigation={navigation} component={SignUpContainer} />
            </authStack.Navigator>
        </NavigationContainer>
    );
}
