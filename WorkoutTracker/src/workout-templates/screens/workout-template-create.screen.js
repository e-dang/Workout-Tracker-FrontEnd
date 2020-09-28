import React from 'react';
import {Appbar} from 'react-native-paper';
import {ContainerView, AddList} from '@components';

export function WorkoutTemplateCreateScreen(props) {
    const {navigation, exerciseTemplates} = props;

    return (
        <ContainerView>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title="Create Workout" />
            </Appbar.Header>
            <AddList data={exerciseTemplates} onAdd={() => navigation.push('CreateExercise')} />
        </ContainerView>
    );
}
