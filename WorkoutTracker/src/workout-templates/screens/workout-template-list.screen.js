import React from 'react';
import {ListScreen} from '@components';

export function WorkoutTemplateListScreen(props) {
    const {navigation, workoutTemplates, refreshing, onRefresh, onEndReached} = props;

    return (
        <ListScreen
            title="Workouts"
            onCreate={() => navigation.push('CreateWorkoutTemplate')}
            data={workoutTemplates}
            refreshing={refreshing}
            onRefresh={onRefresh}
            onEndReached={onEndReached}
        />
    );
}
