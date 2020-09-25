import React from 'react';
import EquipmentSelectScreen from '../screens/equipment-select.screen';
import {useSelector, useDispatch} from 'react-redux';
import equipmentActions from '../equipment.action';

const getEquipment = (paginationKey) => {
    const paginationState = useSelector((state) => state.pagination);
    const entityState = useSelector((state) => state.entities);
    let ids = [];

    try {
        ids = paginationState.GET_EQUIPMENT[paginationKey].ids;
    } catch (TypeError) {}

    return ids.map((id) => entityState.equipment[id]);
};

export default function EquipmentSelectContainer({navigation}) {
    const dispatch = useDispatch();
    const equipmentState = useSelector((state) => state.equipment);
    const authState = useSelector((state) => state.auth);
    const paginationState = useSelector((state) => state.pagination);
    const equipment = getEquipment(authState.user.id.toString());

    const refresh = () => dispatch(equipmentActions.listEquipment(authState.user.id));

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
            selectedEquipment={equipmentState.selectedEquipment}
            handleSelectEquipment={handleSelectEquipment}
            onRefresh={refresh}
            refreshing={!equipment && paginationState.GET_EQUIPMENT.isFetching}
            onEndReached={() => dispatch(equipmentActions.listEquipment(authState.user.id, {loadmore: true}))}
        />
    );
}
