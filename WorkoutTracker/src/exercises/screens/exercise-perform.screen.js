import React, {useState, useEffect} from 'react';
import {Appbar, FAB, Surface, Title} from 'react-native-paper';
import {ContainerView, CustomListItem, RepsWeightSetter} from '@components';
import {FlatList, View} from 'react-native';

const get = (obj, prop, _default = null) => {
    try {
        return obj[prop];
    } catch (TypeError) {
        return _default;
    }
};

export function ExercisePerformScreen(props) {
    const {navigation, exercise, finishExercise} = props;
    const [currentWorkload, setCurrentWorkload] = useState(0);
    const [currentSet, setCurrentSet] = useState(0);
    const [reps, setReps] = useState(get(exercise.workloads[currentWorkload].sets[currentSet], 'reps', []));
    const [weight, setWeight] = useState(get(exercise.workloads[currentWorkload].sets[currentSet], 'weight', 0));
    const [units, setUnits] = useState(exercise.workloads[currentWorkload].units);

    const renderItem = ({item, index}) => {
        if (index < currentSet)
            return (
                <CustomListItem
                    title={`Target: ${item.reps} X ${item.weight} ${exercise.workloads[0].units} Completed: ${exercise.workloads[currentWorkload].sets[index].completed_reps} X ${exercise.workloads[currentWorkload].sets[index].weight} ${exercise.workloads[currentWorkload].units}`}
                />
            );
        else
            return (
                <CustomListItem
                    style={{opacity: 0.5}}
                    title={`Target: ${item.reps} X ${item.weight} ${exercise.workloads[0].units}`}
                />
            );
    };

    const addSet = () => {
        exercise.workloads[currentWorkload].sets[currentSet].completed_reps = reps;
        if (currentSet < exercise.workloads[currentWorkload].sets.length) setCurrentSet(currentSet + 1);
    };

    return (
        <ContainerView>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title="Exercise" />
            </Appbar.Header>
            <View style={{flex: 1}}>
                <Surface>
                    <Title>{exercise.name}</Title>
                </Surface>
                <FlatList
                    keyExtractor={(item, idx) => `${idx}`}
                    data={exercise.workloads[currentWorkload].sets}
                    renderItem={renderItem}
                    extraData={currentSet}
                />
            </View>
            <RepsWeightSetter
                style={{flex: 1}}
                reps={reps}
                onRepsChange={setReps}
                weight={weight}
                onWeightChange={setWeight}
                units={units}
                onUnitsChange={setUnits}
                addSet={addSet}
                label="Complete Set"
            />
            <FAB label="Finish" onPress={() => finishExercise(exercise)} />
        </ContainerView>
    );
}
