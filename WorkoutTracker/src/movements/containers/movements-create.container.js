import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MovementCreateScreen from '../screens/movements-create.screen';
import {createMovement, getMovements} from '../movements.action';
import {getEquipment} from '../../equipment/equipment.action';
import {getMuscles} from '../../muscles';

export default function MovementCreateContainer({navigation}) {
    const dispatch = useDispatch();
    const movementState = useSelector((state) => state.movements);
    const equipmentState = useSelector((state) => state.equipment);
    const muscleState = useSelector((state) => state.muscles);

    React.useEffect(() => {
        if (!equipmentState.hasInitialEquipment && !equipmentState.isPendingGetEquipment) {
            dispatch(getEquipment());
        }
        if (!muscleState.hasInitialMuscles && !muscleState.isPendingGetMuscles) {
            dispatch(getMuscles());
        }
    });

    const handleCreateMovement = (name, equipment, muscles) => {
        dispatch(createMovement(name, equipment, muscles))
            .then(() =>
                dispatch(getMovements())
                    .then(() => navigation.pop())
                    .catch((err) => {}),
            )
            .catch((err) => {});
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
