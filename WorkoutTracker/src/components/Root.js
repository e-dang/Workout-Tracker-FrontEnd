import * as React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import AuthContainer from '../auth/containers/auth.container';

const Stack = createStackNavigator();

export default function Root() {
    const auth = useSelector((state) => state.auth);
    console.log(auth);

    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                {auth.isAuthenticated && <Stack.Screen name="Home" component={Home} />}
                {!auth.isAuthenticated && <Stack.Screen name="Auth" component={AuthContainer} />}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
