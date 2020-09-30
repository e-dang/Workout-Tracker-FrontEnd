import React from 'react';
import {Appbar} from 'react-native-paper';
import {ContainerView, SingleSelectList} from '@components';

export function MovementSelectScreen(props) {
    const {navigation, movements} = props;

    return (
        <ContainerView>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title={'Select Exercise'} />
            </Appbar.Header>
            <SingleSelectList
                data={movements}
                onPress={(item) => navigation.push('CreateExerciseTemplate', {movement: item})}
            />
        </ContainerView>
    );
}
