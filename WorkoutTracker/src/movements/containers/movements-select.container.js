import React from 'react';
import {useDispatch} from 'react-redux';
import {MovementSelectScreen} from '@movements/screens';
import {listMovements} from '@movements';
import {getMovements, getAuthUserID} from '@utils';

export function MovementSelectContainer({navigation}) {
    const dispatch = useDispatch();
    const userID = getAuthUserID();
    const movements = getMovements(userID);

    React.useEffect(() => {
        dispatch(listMovements(userID));
    });

    return <MovementSelectScreen navigation={navigation} movements={movements} />;
}
