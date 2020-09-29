import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {NumericFieldInput} from '@components/numeric-field-input.component';

const POUNDS = 'lb';
const KILOGRAMS = 'kg';

export function WeightFieldInput() {
    const [units, setUnits] = useState(POUNDS);

    return (
        <View style={styles.container}>
            <NumericFieldInput
                title="Weight"
                label={units}
                labelPress={() => setUnits(units == POUNDS ? KILOGRAMS : POUNDS)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
