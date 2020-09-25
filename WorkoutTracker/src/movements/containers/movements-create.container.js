import React from 'react';
import {useDispatch} from 'react-redux';
import {MovementCreateScreen} from '@movements/screens';
import {movementActions} from '@movements';
import {equipmentActions} from '@equipment';
import {muscleActions} from '@muscles';
import {getMuscleState, getEquipmentState, getAuthUserID} from '@utils';

export function MovementCreateContainer({navigation}) {
    const dispatch = useDispatch();

    const handleCreateMovement = (name, equipment, muscles) => {
        dispatch(movementActions.createMovement(getAuthUserID(), {name, equipment, muscles})).then(() => {
            dispatch(equipmentActions.clearSelectedEquipment());
            dispatch(muscleActions.clearSelectedMuscles());
            navigation.navigate('MovementList', {forceRefresh: true});
        });
    };

    const handleRemoveSelectedEquipment = (equipment) => {
        dispatch(equipmentActions.removeSelectedEquipment(equipment));
    };

    const handleRemoveSelectedMuscles = (muscle) => {
        dispatch(muscleActions.removeSelectedMuscle(muscle));
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
