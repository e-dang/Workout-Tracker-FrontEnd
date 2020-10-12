import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {Appbar} from 'react-native-paper';
import {ContainerView, ShortTextInput, SubmitButton} from '@components';

export function EquipmentCreateScreen(props) {
    const {navigation, handleCreateEquipment} = props;
    const [name, setName] = useState('');

    return (
        <ContainerView>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title={'Create Equipment'} />
            </Appbar.Header>
            <ScrollView>
                <ShortTextInput
                    label="Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    errVisible={false}
                    errMessage={'Error.'}
                />
            </ScrollView>
            <SubmitButton onPress={() => handleCreateEquipment(name)} />
        </ContainerView>
    );
}
