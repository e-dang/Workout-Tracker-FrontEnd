import React from 'react';
import {useDispatch} from 'react-redux';
import {listWorkoutTemplates} from '@workout-templates';
import {WorkoutTemplateListScreen} from '@workout-templates/screens';
import {getAuthUserID, getWorkoutTemplates, getPaginationState} from '@utils';

export function WorkoutTemplateListContainer({route, navigation}) {
    const dispatch = useDispatch();
    const userID = getAuthUserID();
    const workoutTemplates = getWorkoutTemplates(userID);

    React.useEffect(() => {
        dispatch(listWorkoutTemplates(userID, route.params));
    }, [route.params]);

    return (
        <WorkoutTemplateListScreen
            navigation={navigation}
            workoutTemplates={workoutTemplates}
            refreshing={!workoutTemplates && getPaginationState(userID).isFetching}
            onRefresh={() => dispatch(listWorkoutTemplates(userID, {forceRefresh: true}))}
            onEndReached={() => dispatch(listWorkoutTemplates(userID, {loadMore: true}))}
        />
    );
}
