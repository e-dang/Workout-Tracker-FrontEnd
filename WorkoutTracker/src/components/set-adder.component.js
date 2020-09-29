import React from 'react';
import {Divider, FAB, List, withTheme} from 'react-native-paper';
import {NumericFieldInput} from '@components/numeric-field-input.component';
import {WeightFieldInput} from '@components/weight-field-input.component';
import {StyleSheet, View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

export function _SetAdder(props) {
    const {reps, onRepsChange, weight, onWeightChange, units, onUnitsChange, sets, addSet} = props;

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                renderItem={({item}) => (
                    <List.Item titleStyle={styles.listItem} title={`${item.reps} X ${item.weight} ${item.units}`} />
                )}
                data={sets}
                keyExtractor={(item, idx) => `${idx}`}
                ListHeaderComponent={<Text style={styles.listHeader}>Sets</Text>}
                ListEmptyComponent={
                    <View style={styles.exampleList}>
                        <List.Item title={'10 X 135 lb'} />
                        <Divider />
                        <List.Item title={'10 X 135 lb'} />
                        <Divider />
                        <List.Item title={'10 X 135 lb'} />
                        <Divider />
                        <List.Item title={'10 X 135 lb'} />
                        <Divider />
                    </View>
                }
            />
            <Divider style={styles.divider} />
            <View style={styles.numericInputContainer}>
                <NumericFieldInput value={reps} onValueChange={onRepsChange} title={'Reps'} />
                <WeightFieldInput
                    units={units}
                    onUnitsChange={onUnitsChange}
                    weight={weight}
                    onWeightChange={onWeightChange}
                />
                <FAB style={styles.fab} label="Add Set" onPress={addSet} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        borderTopWidth: 2,
    },
    list: {
        flex: 1,
    },
    exampleList: {
        opacity: 0.5,
    },
    listHeader: {
        fontSize: 25,
        left: 10,
    },
    listItem: {
        fontSize: 20,
    },
    divider: {
        borderWidth: 1,
    },
    numericInputContainer: {
        flex: 1,
    },
    fab: {
        alignSelf: 'center',
        bottom: 20,
    },
});

export const SetAdder = withTheme(_SetAdder);
