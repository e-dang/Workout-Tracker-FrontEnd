import React, {useState} from 'react';
import {Appbar, FAB} from 'react-native-paper';
import {ContainerView, Timer, CustomList} from '@components';
import {getExerciseString} from '@utils';

export function WorkoutPerformScreen(props) {
    const {navigation, workout} = props;

    const [time, setTime] = useState(0);

    return (
        <ContainerView>
            <Appbar.Header>
                <Appbar.Content title="Perform Workout" />
            </Appbar.Header>
            <CustomList
                data={workout.exercises || []}
                keyExtractor={(item) => `${item.order}`}
                itemTitle={(item) => getExerciseString(item)}
                title={'Exercises'}
            />
            <Timer time={time} setTime={setTime} />
            <FAB label="Finish" onPress={() => navigation.navigate('WorkoutSummary')} />
        </ContainerView>
    );
}
