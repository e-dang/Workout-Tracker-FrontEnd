import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {WorkoutTemplateListContainer} from '@workout-templates/containers/workout-template-list.container';

const Stack = createStackNavigator();

export function WorkoutTemplateNavigator() {
    return (
        <Stack.Navigator initialRouteName="WorkoutTemplateList" headerMode={'none'}>
            <Stack.Screen name="WorkoutTemplateList" component={WorkoutTemplateListContainer} />
        </Stack.Navigator>
    );
}
