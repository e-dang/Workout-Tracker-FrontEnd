import React, {useState} from 'react';
import {Appbar, Paragraph, Title} from 'react-native-paper';
import {ContainerView, SetAdder, SubmitButton} from '@components';
import {POUNDS} from '@utils';

export function ExerciseTemplateCreateScreen(props) {
    const {navigation, movement, handleCreateExerciseTemplate} = props;
    const [reps, setReps] = useState(0);
    const [weight, setWeight] = useState(0);
    const [units, setUnits] = useState(POUNDS);
    const [sets, setSets] = useState([]);
    const [order, setOrder] = useState(0);

    const addSet = () => {
        setSets([...sets, {order, reps, weight}]);
        setOrder(order + 1);
    };

    return (
        <ContainerView>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title={'Enter Reps/Weight'} />
            </Appbar.Header>
            <Title>Exercise - {movement.name}</Title>
            <Paragraph>{movement.description}</Paragraph>
            <SetAdder
                reps={reps}
                onRepsChange={(val) => setReps(val)}
                weight={weight}
                onWeightChange={(val) => setWeight(val)}
                units={units}
                onUnitsChange={(val) => setUnits(val)}
                sets={sets}
                addSet={addSet}
            />
            <SubmitButton onPress={() => handleCreateExerciseTemplate(sets, units)} />
        </ContainerView>
    );
}
