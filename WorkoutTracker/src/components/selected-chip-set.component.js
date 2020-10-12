import React from 'react';
import {StyleSheet, View} from 'react-native';
import {withTheme} from 'react-native-paper';
import {SelectedChip} from '@components/selected-chip.component';

function _SelectedChipSet(props) {
    const {data, onClose} = props;

    return (
        <View style={styles.chipContainer}>
            {data.map((item, idx) => (
                <SelectedChip key={idx} title={item} onClose={() => onClose(item)} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    chipContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

export const SelectedChipSet = withTheme(_SelectedChipSet);
