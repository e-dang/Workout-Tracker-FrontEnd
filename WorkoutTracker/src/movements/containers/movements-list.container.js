import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {MovementListScreen} from '@movements/screens'; //'@movements/screens/movements-list.screen';
import {movementActions} from '@movements';

const getMovements = (paginationKey) => {
    const paginationState = useSelector((state) => state.pagination);
    const entityState = useSelector((state) => state.entities);
    let ids = [];

    try {
        ids = paginationState.GET_MOVEMENTS[paginationKey].ids;
    } catch (TypeError) {
        ids = [];
    }

    return ids.map((id) => entityState.movements[id]);
};

export function MovementListContainer({route, navigation}) {
    const dispatch = useDispatch();
    const movementState = useSelector((state) => state.movements);
    const authState = useSelector((state) => state.auth);
    const paginationState = useSelector((state) => state.pagination);
    const movements = getMovements(authState.user.id.toString());

    React.useEffect(() => {
        dispatch(movementActions.listMovements(authState.user.id, route.params));
    }, [route.params]);

    return (
        <MovementListScreen
            movements={movements}
            isPendingGetMovements={movementState.isPendingGetMovements}
            navigation={navigation}
            refreshing={!movements && paginationState.GET_MOVEMENTS.isFetching}
            onRefresh={() => dispatch(movementActions.listMovements(authState.user.id, {forceRefresh: true}))}
            onEndReached={() => dispatch(movementActions.listMovements(authState.user.id, {loadMore: true}))}
        />
    );
}
