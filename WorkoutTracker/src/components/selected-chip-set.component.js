import React from 'react';
import {StyleSheet, View} from 'react-native';
import {withTheme} from 'react-native-paper';
import SelectedChip from './selected-chip.component';

function SelectedChipSet(props) {
    const {data, onClose} = props;

    return (
        <View style={styles.chipContainer}>
            {data.map((item, idx) => (
                <SelectedChip key={idx} title={item} onClose={onClose} />
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

export default withTheme(SelectedChipSet);
