import React from 'react';
import {WorkoutPerformScreen} from '@workouts/screens';
import {getWorkout} from '@utils';

export function WorkoutPerformContainer({navigation}) {
    const workout = getWorkout();

    return <WorkoutPerformScreen navigation={navigation} workout={workout} />;
}
