import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Title, FAB, withTheme} from 'react-native-paper';
import SelectedChipSet from './selected-chip-set.component';

function SelectChipsSection(props) {
    const {title, data, onClose, onAdd} = props;

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Title>{title}</Title>
            </View>
            <View style={styles.chipSetContainer}>
                <SelectedChipSet style={styles.chipSetContainer} data={data} onClose={onClose} />
            </View>
            <View style={styles.fabContainer}>
                <FAB style={styles.fab} icon="plus" onPress={() => onAdd()} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        paddingVertical: 4,
    },
    titleContainer: {
        paddingBottom: 4,
        paddingHorizontal: 8,
    },
    chipSetContainer: {
        paddingBottom: 8,
        paddingHorizontal: 8,
    },
    fabContainer: {},
    fab: {
        alignSelf: 'center',
    },
});

export default withTheme(SelectChipsSection);
