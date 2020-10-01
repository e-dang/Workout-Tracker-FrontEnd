import React from 'react';
import {ContainerView} from '@components';
import {FAB, Title, List, Appbar, Divider} from 'react-native-paper';
import {FlatList} from 'react-native';
import {getExerciseString} from '@utils';

export function WorkoutTemplateDetailScreen(props) {
    const {navigation, workoutTemplate, onStart} = props;

    return (
        <ContainerView>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title="Workout" />
            </Appbar.Header>
            <Title>{workoutTemplate.name}</Title>
            <FlatList
                data={workoutTemplate.exercises}
                ItemSeparatorComponent={Divider}
                keyExtractor={(item, idx) => `${idx}`}
                renderItem={({item}) => <List.Item title={getExerciseString(item)} />}
            />
            <FAB label="Start" onPress={onStart} />
        </ContainerView>
    );
}
