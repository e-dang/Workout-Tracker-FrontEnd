import React from 'react';
import {ListScreen} from '@components';

export function MovementListScreen(props) {
    const {movements, navigation, refreshing, onRefresh, onEndReached} = props;

    return (
        <ListScreen
            title={'Exercises'}
            onCreate={() => navigation.push('MovementCreate')}
            data={movements}
            refreshing={refreshing}
            onRefresh={onRefresh}
            onEndReached={onEndReached}
        />
    );
}
