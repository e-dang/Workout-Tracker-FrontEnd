import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MovementCreateScreen from '../screens/movements-create.screen';
import {movementActions} from '../movements.action';

export default function MovementCreateContainer({navigation}) {
    const dispatch = useDispatch();
    const equipmentState = useSelector((state) => state.equipment);
    const muscleState = useSelector((state) => state.muscles);
    const authState = useSelector((state) => state.auth);

    const handleCreateMovement = (name, equipment, muscles) => {
        dispatch(movementActions.createMovement(authState.user.id, {name, equipment, muscles})).then(() => {
            navigation.navigate('MovementList', {forceRefresh: true});
        });
    };

    return (
        <MovementCreateScreen
            navigation={navigation}
            handleCreateMovement={handleCreateMovement}
            selectedEquipment={equipmentState.selectedEquipment}
            selectedMuscles={muscleState.selectedMuscles}
        />
    );
}
