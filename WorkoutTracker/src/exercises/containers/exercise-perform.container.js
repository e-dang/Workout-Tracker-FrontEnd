import React from 'react';
import {updateWorkout} from '@workouts';
import {useDispatch} from 'react-redux';
import {ExercisePerformScreen} from '@exercises/screens';
import {getWorkout} from '@utils';

export function ExercisePerformContainer({route, navigation}) {
    const dispatch = useDispatch();
    const workout = getWorkout();

    const finishExercise = (completedExercise) => {
        dispatch(updateWorkout(workout, completedExercise)).then(() => navigation.pop());
    };

    return (
        <ExercisePerformScreen
            navigation={navigation}
            exercise={route.params.exercise}
            finishExercise={finishExercise}
        />
    );
}
