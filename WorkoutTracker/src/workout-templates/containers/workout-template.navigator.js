import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {WorkoutTemplateListContainer} from '@workout-templates/containers/workout-template-list.container';
import {WorkoutTemplateCreateContainer} from '@workout-templates/containers/workout-template-create.container';

const Stack = createStackNavigator();

export function WorkoutTemplateNavigator() {
    return (
        <Stack.Navigator initialRouteName="ListWorkoutTemplate" headerMode={'none'}>
            <Stack.Screen name="ListWorkoutTemplate" component={WorkoutTemplateListContainer} />
            <Stack.Screen name="CreateWorkoutTemplate" component={WorkoutTemplateCreateContainer} />
        </Stack.Navigator>
    );
}
