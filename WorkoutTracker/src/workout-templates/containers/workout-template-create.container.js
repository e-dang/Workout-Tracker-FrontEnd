import React from 'react';
import {useDispatch} from 'react-redux';
import {
    deleteWorkoutTemplate,
    commitWorkoutTemplate,
    refreshWorkoutTemplate,
    createWorkoutTemplate,
} from '@workout-templates';
import {WorkoutTemplateCreateScreen} from '@workout-templates/screens';
import {getUncommittedWorkoutTemplate, getAuthUserID} from '@utils';

export function WorkoutTemplateCreateContainer({route, navigation}) {
    const dispatch = useDispatch();
    const userID = getAuthUserID();
    const workoutTemplate = getUncommittedWorkoutTemplate();

    React.useEffect(() => {
        if (workoutTemplate == null) {
            dispatch(createWorkoutTemplate(userID, {exercises: []}));
        }
    }, []);

    React.useEffect(() => {
        if (route.params && route.params.forceRefresh) {
            dispatch(refreshWorkoutTemplate(workoutTemplate));
        }
    }, [route.params]);

    const onSubmit = () => {
        dispatch(commitWorkoutTemplate()).then(() => navigation.pop());
    };

    const onBack = () => {
        dispatch(deleteWorkoutTemplate(workoutTemplate)).then(() =>
            dispatch(commitWorkoutTemplate()).then(() =>
                navigation.navigate('ListWorkoutTemplate', {forceRefresh: true}),
            ),
        );
    };

    return (
        <WorkoutTemplateCreateScreen
            navigation={navigation}
            workoutTemplate={workoutTemplate || undefined}
            onBack={onBack}
            onSubmit={onSubmit}
        />
    );
}
