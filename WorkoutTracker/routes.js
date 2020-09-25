import * as React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/components/Home';
import {AuthContainer} from '@auth/containers';
import {MovementNavigator} from '@movements/containers';

const tabNavigator = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <tabNavigator.Navigator>
            <tabNavigator.Screen name="Home" component={Home} />
            {/* Even though this works with Movement data, we set the title to Exercises to not confuse the user */}
            <tabNavigator.Screen name="Exercises" component={MovementNavigator} />
        </tabNavigator.Navigator>
    );
};

export default function WorkoutTracker() {
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
