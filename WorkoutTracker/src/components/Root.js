import * as React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthContainer from '../auth/containers/auth.container';
import MainNavigator from '../../routes';

const Stack = createStackNavigator();

export default function Root() {
    const auth = useSelector((state) => state.auth);
    console.log(auth);

    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                {auth.isAuthenticated && <Stack.Screen name="Main" component={MainNavigator} />}
                {!auth.isAuthenticated && <Stack.Screen name="Auth" component={AuthContainer} />}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
