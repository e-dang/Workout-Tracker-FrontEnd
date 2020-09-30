import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {NumericFieldInput} from '@components/numeric-field-input.component';
import {POUNDS, KILOGRAMS} from '@utils';

export function WeightFieldInput(props) {
    const {units, onUnitsChange, weight, onWeightChange} = props;

    return (
        <View style={styles.container}>
            <NumericFieldInput
                value={weight}
                onValueChange={onWeightChange}
                title="Weight"
                label={units}
                labelPress={() => onUnitsChange(units == POUNDS ? KILOGRAMS : POUNDS)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
