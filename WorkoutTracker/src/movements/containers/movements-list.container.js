import React from 'react';
import MovementListScreen from '../screens/movements-list.screen';
import {useDispatch, useSelector} from 'react-redux';
import {movementActions} from '../movements.action';

const getMovements = (paginationKey) => {
    const paginationState = useSelector((state) => state.pagination);
    const entityState = useSelector((state) => state.entities);

    try {
        ids = paginationState.GET_MOVEMENTS[paginationKey].ids;
    } catch (TypeError) {
        ids = [];
    }
    return ids.map((id) => entityState.movements[id]);
};

export default function MovementListContainer({navigation}) {
    const dispatch = useDispatch();
    const movementState = useSelector((state) => state.movements);
    const authState = useSelector((state) => state.auth);
    const paginationState = useSelector((state) => state.pagination);
    const movements = getMovements(authState.user.id.toString());

    const refresh = () => dispatch(movementActions.listMovements(authState.user.id));

    React.useEffect(() => {
        refresh();
    });

    return (
        <MovementListScreen
            movements={movements}
            isPendingGetMovements={movementState.isPendingGetMovements}
            navigation={navigation}
            refreshing={!movements && paginationState.GET_MOVEMENTS.isFetching}
            onRefresh={refresh}
            onEndReached={() => dispatch(movementActions.listMovements(authState.user.id, {loadmore: true}))}
        />
    );
}
