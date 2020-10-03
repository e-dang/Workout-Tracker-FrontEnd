import React from 'react';
import {View} from 'react-native';
import {FAB, withTheme} from 'react-native-paper';
import {NumericFieldInput} from '@components/numeric-field-input.component';
import {WeightFieldInput} from '@components/weight-field-input.component';

function _RepsWeightSetter(props) {
    const {reps, onRepsChange, weight, onWeightChange, units, onUnitsChange, addSet, label} = props;

    return (
        <View style={{flex: 1}}>
            <NumericFieldInput value={reps} onValueChange={onRepsChange} title={'Reps'} />
            <WeightFieldInput
                units={units}
                onUnitsChange={onUnitsChange}
                weight={weight}
                onWeightChange={onWeightChange}
            />
            <FAB label={label} onPress={addSet} />
        </View>
    );
}

export const RepsWeightSetter = withTheme(_RepsWeightSetter);
