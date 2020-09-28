import * as React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@root/Home';
import {AuthNavigator} from '@auth/containers';
import {MovementNavigator} from '@movements/containers';
import {EquipmentNavigator} from '@equipment/containers';
import {WorkoutTemplateNavigator} from '@workout-templates/containers';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Equipment" component={EquipmentNavigator} />
            {/* Even though this works with Movement data, we set the title to Exercises to not confuse the user */}
            <Tab.Screen name="Exercises" component={MovementNavigator} />
            <Tab.Screen name="Workouts" component={WorkoutTemplateNavigator} />
        </Tab.Navigator>
    );
};

export function WorkoutTracker() {
    const auth = useSelector((state) => state.auth);
    console.log(auth);

    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                {auth.isAuthenticated && <Stack.Screen name="Main" component={MainNavigator} />}
                {!auth.isAuthenticated && <Stack.Screen name="Auth" component={AuthNavigator} />}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
