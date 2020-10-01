import React from 'react';
import {useDispatch} from 'react-redux';
import {WorkoutTemplateDetailScreen} from '@workout-templates/screens';

export function WorkoutTemplateDetailContainer({route, navigation}) {
    const dispatch = useDispatch();

    const onStart = () => {
        dispatch(createWorkout(workoutTemplate)).then(() => navigation.navigate());
    };

    return (
        <WorkoutTemplateDetailScreen
            navigation={navigation}
            workoutTemplate={route.params.workoutTemplate}
            onStart={onStart}
        />
    );
}
