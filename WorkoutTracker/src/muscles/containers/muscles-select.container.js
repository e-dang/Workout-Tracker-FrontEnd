import React from 'react';
import MusclesSelectScreen from '../screens/muscles-select.screen';
import {useSelector} from 'react-redux';
import {addSelectedMuscles, muscleActions} from '../muscles.action';
import {useDispatch} from 'react-redux';

const getMuscles = () => {
    const paginationState = useSelector((state) => state.pagination);
    const entityState = useSelector((state) => state.entities);

    try {
        ids = paginationState.GET_MUSCLES['1'].ids;
    } catch (TypeError) {
        ids = [];
    }
    return ids.map((id) => entityState.muscles[id]);
};

export default function MusclesSelectContainer({navigation}) {
    const dispatch = useDispatch();
    const muscleState = useSelector((state) => state.muscles);
    const paginationState = useSelector((state) => state.pagination);
    const muscles = getMuscles();

    const refresh = () => dispatch(muscleActions.listMuscles());

    React.useEffect(() => {
        refresh();
    });

    const handleSelectMuscles = (muscles) => {
        dispatch(addSelectedMuscles(muscles)).then(() => {
            navigation.pop();
        });
    };

    return (
        <MusclesSelectScreen
            navigation={navigation}
            muscles={muscles}
            selectedMuscles={muscleState.selectedMuscles}
            handleSelectMuscles={handleSelectMuscles}
            onRefresh={refresh}
            refreshing={!muscles && paginationState.muscles.isFetching}
            onEndReached={() => dispatch(muscleActions.listMuscles({loadMore: true}))}
        />
    );
}
