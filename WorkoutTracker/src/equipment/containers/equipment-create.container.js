import React from 'react';
import {useDispatch} from 'react-redux';
import {createEquipment} from '@equipment';
import {EquipmentCreateScreen} from '@equipment/screens';
import {getAuthUserID} from '@utils';

export function EquipmentCreateContainer({navigation}) {
    const dispatch = useDispatch();
    const userID = getAuthUserID();

    const handleCreateEquipment = (name) => {
        dispatch(createEquipment(userID, {name})).then(() => {
            navigation.navigate('EquipmentList', {forceRefresh: true});
        });
    };

    return <EquipmentCreateScreen navigation={navigation} handleCreateEquipment={handleCreateEquipment} />;
}
