import React from 'react';
import EquipmentSelectScreen from '../screens/equipment-select.screen';
import {useSelector} from 'react-redux';
import {addSelectedEquipment} from '../equipment.action';
import {useDispatch} from 'react-redux';

export default function EquipmentSelectContainer({navigation}) {
    const dispatch = useDispatch();
    const equipmentState = useSelector((state) => state.equipment);

    const handleSelectEquipment = (equipment) => {
        dispatch(addSelectedEquipment(equipment)).then(() => {
            navigation.pop();
        });
    };

    return (
        <EquipmentSelectScreen
            navigation={navigation}
            equipment={equipmentState.equipment}
            selectedEquipment={equipmentState.selectedEquipment}
            handleSelectEquipment={handleSelectEquipment}
        />
    );
}
