import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MovementCreateContainer from './containers/movements-create.container';
import MovementListContainer from './containers/movements-list.container';
import MusclesSelectContainer from '../muscles/containers/muscles-select.container';
import EquipmentSelectContainer from '../equipment/containers/equipment-select.container';

const Stack = createStackNavigator();

export default function MovementNavigator() {
    return (
        <Stack.Navigator initialRouteName="MovementList" headerMode="none">
            <Stack.Screen name="MovementList" component={MovementListContainer} />
            <Stack.Screen name="MovementCreate" component={MovementCreateContainer} />
            <Stack.Screen name="MusclesSelect" component={MusclesSelectContainer} />
            <Stack.Screen name="EquipmentSelect" component={EquipmentSelectContainer} />
        </Stack.Navigator>
    );
}
