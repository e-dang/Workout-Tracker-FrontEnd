import React from 'react';
import {useDispatch} from 'react-redux';
import {MovementListScreen} from '@movements/screens'; //'@movements/screens/movements-list.screen';
import {listMovements} from '@movements';
import {getMovements, getMovementState, getPaginationState, getAuthUserID} from '@utils';

export function MovementListContainer({route, navigation}) {
    const dispatch = useDispatch();
    const userID = getAuthUserID();
    const movements = getMovements(userID);

    React.useEffect(() => {
        dispatch(listMovements(userID, route.params));
    }, [route.params]);

    return (
        <MovementListScreen
            movements={movements}
            isPendingGetMovements={getMovementState().isPendingGetMovements}
            navigation={navigation}
            refreshing={!movements && getPaginationState('GET_MOVEMENTS').isFetching}
            onRefresh={() => dispatch(listMovements(userID, {forceRefresh: true}))}
            onEndReached={() => dispatch(listMovements(userID, {loadMore: true}))}
        />
    );
}
