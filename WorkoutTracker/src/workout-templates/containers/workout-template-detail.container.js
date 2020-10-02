import React from 'react';
import {createWorkout} from '@workouts';
import {useDispatch} from 'react-redux';
import {WorkoutTemplateDetailScreen} from '@workout-templates/screens';

export function WorkoutTemplateDetailContainer({route, navigation}) {
    const dispatch = useDispatch();

    const onStart = () => {
        dispatch(createWorkout(route.params.workoutTemplate)).then(() => navigation.navigate('PerformWorkout'));
    };

    return (
        <WorkoutTemplateDetailScreen
            navigation={navigation}
            workoutTemplate={route.params.workoutTemplate}
            onStart={onStart}
        />
    );
}
