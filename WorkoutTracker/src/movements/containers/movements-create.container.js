import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MovementCreateScreen from '../screens/movements-create.screen';
import {movementActions} from '../movements.action';
import equipmentActions from '../../equipment/equipment.action';
import muscleActions from '../../muscles/muscles.action';

export default function MovementCreateContainer({navigation}) {
    const dispatch = useDispatch();
    const equipmentState = useSelector((state) => state.equipment);
    const muscleState = useSelector((state) => state.muscles);
    const authState = useSelector((state) => state.auth);

    const handleCreateMovement = (name, equipment, muscles) => {
        dispatch(movementActions.createMovement(authState.user.id, {name, equipment, muscles})).then(() => {
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
            selectedEquipment={equipmentState.selectedEquipment}
            selectedMuscles={muscleState.selectedMuscles}
            handleRemoveSelectedEquipment={handleRemoveSelectedEquipment}
            handleRemoveSelectedMuscles={handleRemoveSelectedMuscles}
        />
    );
}
