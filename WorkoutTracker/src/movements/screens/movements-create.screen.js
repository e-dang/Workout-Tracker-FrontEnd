import React, {useState} from 'react';
import {Text, ScrollView} from 'react-native';
import {TextInput, HelperText, Appbar} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import SubmitButton from '../../components/submit-button.component';
import SelectChipsSection from '../../components/select-chips-section.component';

export default function MovementCreateScreen(props) {
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
        <SafeAreaView style={{flex: 1}}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title="Create Movement" />
            </Appbar.Header>
            <ScrollView>
                <TextInput mode="outlined" label="Name" value={name} onChangeText={(text) => setName(text)} />
                <HelperText type="error" visible={false}>
                    <Text>Error.</Text>
                </HelperText>
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
        </SafeAreaView>
    );
}
