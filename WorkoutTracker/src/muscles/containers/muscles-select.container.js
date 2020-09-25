import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {MusclesSelectScreen} from '@muscles/screens';
import {muscleActions} from '@muscles';
import {getMuscles, getMuscleState, getPaginationState} from '@utils';

export function MusclesSelectContainer({navigation}) {
    const dispatch = useDispatch();
    const muscles = getMuscles();

    const refresh = () => dispatch(muscleActions.listMuscles());

    React.useEffect(() => {
        refresh();
    });

    const handleSelectMuscles = (muscles) => {
        dispatch(muscleActions.addSelectedMuscles(muscles)).then(() => {
            navigation.pop();
        });
    };

    return (
        <MusclesSelectScreen
            navigation={navigation}
            muscles={muscles}
            selectedMuscles={getMuscleState().selectedMuscles}
            handleSelectMuscles={handleSelectMuscles}
            onRefresh={refresh}
            refreshing={!muscles && getPaginationState().GET_MUSCLES.isFetching}
            onEndReached={() => dispatch(muscleActions.listMuscles({loadMore: true}))}
        />
    );
}
