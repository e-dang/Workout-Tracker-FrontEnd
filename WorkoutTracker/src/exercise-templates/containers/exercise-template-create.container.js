import React from 'react';
import {useDispatch} from 'react-redux';
import {createExerciseTemplate} from '@exercise-templates';
import {ExerciseTemplateCreateScreen} from '@exercise-templates/screens';
import {getUncommittedWorkoutTemplate, getAuthUserID} from '@utils';

export function ExerciseTemplateCreateContainer({route, navigation}) {
    const dispatch = useDispatch();
    const userID = getAuthUserID();
    const workoutTemplate = getUncommittedWorkoutTemplate();

    const handleCreateExerciseTemplate = (sets, units) => {
        dispatch(createExerciseTemplate(userID, {workoutTemplate, movement: route.params.movement, units, sets})).then(
            () => {
                navigation.pop();
            },
        );
    };

    return (
        <ExerciseTemplateCreateScreen
            navigation={navigation}
            movement={route.params.movement}
            handleCreateExerciseTemplate={handleCreateExerciseTemplate}
        />
    );
}
