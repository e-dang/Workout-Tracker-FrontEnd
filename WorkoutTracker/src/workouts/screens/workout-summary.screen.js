import React from 'react';
import {Appbar, FAB} from 'react-native-paper';
import {ContainerView} from '@components';

export function WorkoutSummaryScreen(props) {
    const {navigation} = props;

    return (
        <ContainerView>
            <Appbar.Header>
                <Appbar.Content title="Summary" />
            </Appbar.Header>
            <FAB label={'Done'} onPress={() => navigation.navigate('ListWorkoutTemplate')} />
        </ContainerView>
    );
}
