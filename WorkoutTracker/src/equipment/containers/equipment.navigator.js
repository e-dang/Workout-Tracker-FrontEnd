import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {EquipmentListContainer} from '@equipment/containers/equipment-list.container';

const Stack = createStackNavigator();

export function EquipmentNavigator() {
    return (
        <Stack.Navigator initialRouteName="EquipmentList" headerMode="none">
            <Stack.Screen name="EquipmentList" component={EquipmentListContainer} />
        </Stack.Navigator>
    );
}
