import React from 'react';
import {useDispatch} from 'react-redux';
import {MovementCreateScreen} from '@movements/screens';
import {createMovement} from '@movements';
import {clearSelectedEquipment, removeSelectedEquipment} from '@equipment';
import {clearSelectedMuscles, removeSelectedMuscle} from '@muscles';
import {getMuscleState, getEquipmentState, getAuthUserID} from '@utils';

export function MovementCreateContainer({navigation}) {
    const dispatch = useDispatch();

    const handleCreateMovement = (name, equipment, muscles) => {
        dispatch(createMovement(getAuthUserID(), {name, equipment, muscles})).then(() => {
            dispatch(clearSelectedEquipment());
            dispatch(clearSelectedMuscles());
            navigation.navigate('MovementList', {forceRefresh: true});
        });
    };

    const handleRemoveSelectedEquipment = (equipment) => {
        dispatch(removeSelectedEquipment(equipment));
    };

    const handleRemoveSelectedMuscles = (muscle) => {
        dispatch(removeSelectedMuscle(muscle));
    };

    return (
        <MovementCreateScreen
            navigation={navigation}
            handleCreateMovement={handleCreateMovement}
            selectedEquipment={getEquipmentState().selectedEquipment}
            selectedMuscles={getMuscleState().selectedMuscles}
            handleRemoveSelectedEquipment={handleRemoveSelectedEquipment}
            handleRemoveSelectedMuscles={handleRemoveSelectedMuscles}
        />
    );
}
