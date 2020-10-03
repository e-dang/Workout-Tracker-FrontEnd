import React from 'react';
import {withTheme} from 'react-native-paper';
import {CustomList} from '@components';

function _WorkloadViewer(props) {
    const {workload} = props;

    return (
        <CustomList
            keyExtractor={(item) => `${item.order}`}
            itemTitle={(item) => `${item.reps} X ${item.weight} ${workload.units}`}
            data={workload.sets}
            title={workload.movement.name}
            {...props}
        />
    );
}

export const WorkloadViewer = withTheme(_WorkloadViewer);
