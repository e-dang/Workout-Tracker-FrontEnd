import React from 'react';
import {EquipmentListScreen} from '@equipment/screens';
import {listEquipment} from '@equipment';
import {getEquipment, getPaginationState, getAuthUserID} from '@utils';
import {useDispatch} from 'react-redux';

export function EquipmentListContainer({route, navigation}) {
    const dispatch = useDispatch();
    const userID = getAuthUserID();
    const equipment = getEquipment(userID);

    React.useEffect(() => {
        dispatch(listEquipment(userID), route.params);
    }, [route.params]);

    return (
        <EquipmentListScreen
            navigation={navigation}
            equipment={equipment}
            refreshing={!equipment && getPaginationState('GET_EQUIPMENT').isFetching}
            onRefresh={() => dispatch(listEquipment(userID, {forceRefresh: true}))}
            onEndReached={() => dispatch(listEquipment(userID, {loadMore: true}))}
        />
    );
}
