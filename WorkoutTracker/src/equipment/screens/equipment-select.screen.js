import React from 'react';
import MultiSelectScreen from '../../components/multi-select-screen.component';

export default function EquipmentSelectScreen(props) {
    const {navigation, equipment, selectedEquipment, handleSelectEquipment} = props;

    return (
        <MultiSelectScreen
            title="Select Equipment"
            onBackPress={() => navigation.pop()}
            data={equipment}
            preSelected={selectedEquipment}
            keyExtractor={(item) => item.name}
            onSubmit={handleSelectEquipment}
        />
    );
}
