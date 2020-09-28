import React from 'react';
import {useDispatch} from 'react-redux';
import {WorkoutTemplateCreateScreen} from '@workout-templates/screens';

export function WorkoutTemplateCreateContainer({navigation}) {
    const dispatch = useDispatch();

    return <WorkoutTemplateCreateScreen navigation={navigation} exerciseTemplates={[]} />;
}
