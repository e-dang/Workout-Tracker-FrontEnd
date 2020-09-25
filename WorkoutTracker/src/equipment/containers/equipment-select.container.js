import React from 'react';
import {useDispatch} from 'react-redux';
import {EquipmentSelectScreen} from '@equipment/screens';
import {equipmentActions} from '@equipment';
import {getEquipment, getEquipmentState, getPaginationState, getAuthUserID} from '@utils';

export function EquipmentSelectContainer({navigation}) {
    const dispatch = useDispatch();
    const userID = getAuthUserID();
    const equipment = getEquipment(userID);

    const refresh = () => dispatch(equipmentActions.listEquipment(userID));

    React.useEffect(() => {
        refresh();
    });

    const handleSelectEquipment = (equipment) => {
        dispatch(equipmentActions.addSelectedEquipment(equipment)).then(() => {
            navigation.pop();
        });
    };

    return (
        <EquipmentSelectScreen
            navigation={navigation}
            equipment={equipment}
            selectedEquipment={getEquipmentState().selectedEquipment}
            handleSelectEquipment={handleSelectEquipment}
            onRefresh={refresh}
            refreshing={!equipment && getPaginationState('GET_EQUIPMENT').isFetching}
            onEndReached={() => dispatch(equipmentActions.listEquipment(userID, {loadmore: true}))}
        />
    );
}
