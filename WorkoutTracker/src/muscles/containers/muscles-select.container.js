import React from 'react';
import MusclesSelectScreen from '../screens/muscles-select.screen';
import {useSelector} from 'react-redux';
import {addSelectedMuscles} from '../muscles.action';
import {useDispatch} from 'react-redux';

export default function MusclesSelectContainer({navigation}) {
    const dispatch = useDispatch();
    const muscleState = useSelector((state) => state.muscles);

    const handleSelectMuscles = (muscles) => {
        dispatch(addSelectedMuscles(muscles)).then(() => {
            navigation.pop();
        });
    };

    return (
        <MusclesSelectScreen
            navigation={navigation}
            muscles={muscleState.muscles}
            selectedMuscles={muscleState.selectedMuscles}
            handleSelectMuscles={handleSelectMuscles}
        />
    );
}
