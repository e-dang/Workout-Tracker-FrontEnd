import React, {useState} from 'react';
import {Appbar, Divider} from 'react-native-paper';
import {ContainerView, Timer} from '@components';
import {FlatList} from 'react-native';

export function WorkoutPerformScreen(props) {
    const {navigation, workout} = props;

    const [time, setTime] = useState(0);

    return (
        <ContainerView>
            <Appbar.Header>
                <Appbar.Content title="Perform Workout" />
            </Appbar.Header>
            <FlatList
                data={workout.exercise || []}
                ItemSeparatorComponent={Divider}
                keyExtractor={(item) => `${item.order}`}
                renderItem={({item}) => <List.Item title={getExerciseString(item)} />}
            />
            <Timer time={time} setTime={setTime} />
        </ContainerView>
    );
}
