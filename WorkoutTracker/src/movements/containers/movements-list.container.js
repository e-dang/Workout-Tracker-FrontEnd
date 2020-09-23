import React from 'react';
import MovementListScreen from '../screens/movements-list.screen';
import {useDispatch, useSelector} from 'react-redux';
import {getMovements} from '../movements.action';

export default function MovementListContainer({navigation}) {
    const dispatch = useDispatch();
    const movementState = useSelector((state) => state.movements);

    React.useEffect(() => {
        if (!movementState.hasInitialMovements && !movementState.isPendingGetMovements) {
            dispatch(getMovements());
        }
    });

    return (
        <MovementListScreen
            movements={movementState.movements}
            isPendingGetMovements={movementState.isPendingGetMovements}
            navigation={navigation}
        />
    );
}
