import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {Appbar} from 'react-native-paper';
import {ContainerView, SelectChipsSection, SubmitButton, ShortTextInput} from '@components';

export function MovementCreateScreen(props) {
    const {
        handleCreateMovement,
        handleRemoveSelectedEquipment,
        handleRemoveSelectedMuscles,
        navigation,
        selectedEquipment,
        selectedMuscles,
    } = props;
    const [name, setName] = useState('');

    return (
        <ContainerView>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title="Create Movement" />
            </Appbar.Header>
            <ScrollView>
                <ShortTextInput
                    label="Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    errVisible={false}
                    errMessage={'Error.'}
                />
                <SelectChipsSection
                    title={'Equipment'}
                    data={selectedEquipment.map((piece) => piece.name)}
                    onClose={handleRemoveSelectedEquipment}
                    onAdd={() => navigation.push('EquipmentSelect')}
                />
                <SelectChipsSection
                    title={'Muscles'}
                    data={selectedMuscles.map((muscle) => muscle.name)}
                    onClose={handleRemoveSelectedMuscles}
                    onAdd={() => navigation.push('MusclesSelect')}
                />
            </ScrollView>
            <SubmitButton onPress={() => handleCreateMovement(name, selectedEquipment, selectedMuscles)} />
        </ContainerView>
    );
}
