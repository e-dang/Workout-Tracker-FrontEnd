import React from 'react';
import {ListScreen} from '@components';

export function EquipmentListScreen(props) {
    const {navigation, equipment, refreshing, onRefresh, onEndReached} = props;

    return (
        <ListScreen
            title={'Equipment'}
            onCreate={() => navigation.push('EquipmentCreate')}
            data={equipment}
            refreshing={refreshing}
            onRefresh={onRefresh}
            onEndReached={onEndReached}
        />
    );
}
