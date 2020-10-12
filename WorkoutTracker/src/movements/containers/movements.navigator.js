import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MovementCreateContainer} from '@movements/containers/movements-create.container';
import {MovementListContainer} from '@movements/containers/movements-list.container';
import {MusclesSelectContainer} from '@muscles/containers';
import {EquipmentSelectContainer} from '@equipment/containers';

const Stack = createStackNavigator();

export function MovementNavigator() {
    return (
        <Stack.Navigator initialRouteName="MovementList" headerMode="none">
            <Stack.Screen name="MovementList" component={MovementListContainer} />
            <Stack.Screen name="MovementCreate" component={MovementCreateContainer} />
            <Stack.Screen name="MusclesSelect" component={MusclesSelectContainer} />
            <Stack.Screen name="EquipmentSelect" component={EquipmentSelectContainer} />
        </Stack.Navigator>
    );
}
