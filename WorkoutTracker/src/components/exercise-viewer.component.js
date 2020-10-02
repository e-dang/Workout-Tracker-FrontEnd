import React from 'react';
import {withTheme, Title, Surface} from 'react-native-paper';
import {WorkloadViewer} from '@components/workload-viewer.component';
import {View, StyleSheet} from 'react-native';

function _ExerciseViewer({exercise}) {
    return (
        <View style={styles.container}>
            {exercise.workloads.length > 1 && (
                <Surface>
                    <Title>{exercise.name}</Title>
                </Surface>
            )}
            {exercise.workloads.map((workload) => (
                <WorkloadViewer workload={workload} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export const ExerciseViewer = withTheme(_ExerciseViewer);
