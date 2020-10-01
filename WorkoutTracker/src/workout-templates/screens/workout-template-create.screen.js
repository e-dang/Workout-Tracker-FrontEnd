import React from 'react';
import {Appbar} from 'react-native-paper';
import {ContainerView, AddList, ShortTextInput, SubmitButton} from '@components';

const getExerciseString = (exercise) => {
    let str = `${exercise.name} `;
    let workload;
    for (workload of exercise.workloads) {
        str = str.concat(`${workload.sets.length} sets`);
    }
    return str;
};

export function WorkoutTemplateCreateScreen(props) {
    const {navigation, workoutTemplate = {exercises: []}, onSubmit, onBack} = props;

    return (
        <ContainerView>
            <Appbar.Header>
                <Appbar.BackAction onPress={onBack} />
                <Appbar.Content title="Create Workout" />
            </Appbar.Header>
            <ShortTextInput label="Name" />
            <AddList
                data={workoutTemplate.exercises}
                titleExtractor={getExerciseString}
                keyExtractor={(item, idx) => `${idx}`}
                onAdd={() => navigation.push('SelectMovement')}
            />
            <SubmitButton onPress={onSubmit} />
        </ContainerView>
    );
}
