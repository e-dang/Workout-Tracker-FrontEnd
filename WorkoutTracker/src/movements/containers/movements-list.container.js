import React from 'react';
import {useDispatch} from 'react-redux';
import {MovementListScreen} from '@movements/screens'; //'@movements/screens/movements-list.screen';
import {movementActions} from '@movements';
import {getMovements, getMovementState, getPaginationState, getAuthUserID} from '@utils';

export function MovementListContainer({route, navigation}) {
    const dispatch = useDispatch();
    const userID = getAuthUserID();
    const movements = getMovements(userID);

    React.useEffect(() => {
        dispatch(movementActions.listMovements(userID, route.params));
    }, [route.params]);

    return (
        <MovementListScreen
            movements={movements}
            isPendingGetMovements={getMovementState().isPendingGetMovements}
            navigation={navigation}
            refreshing={!movements && getPaginationState('GET_MOVEMENTS').isFetching}
            onRefresh={() => dispatch(movementActions.listMovements(userID, {forceRefresh: true}))}
            onEndReached={() => dispatch(movementActions.listMovements(userID, {loadMore: true}))}
        />
    );
}
