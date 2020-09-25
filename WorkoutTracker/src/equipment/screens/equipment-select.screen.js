import React from 'react';
import MultiSelectScreen from '../../components/multi-select-screen.component';

export default function EquipmentSelectScreen(props) {
    const {
        navigation,
        equipment,
        selectedEquipment,
        handleSelectEquipment,
        onRefresh,
        refreshing,
        onEndReached,
    } = props;

    return (
        <MultiSelectScreen
            title="Select Equipment"
            onBackPress={() => navigation.pop()}
            data={equipment}
            preSelected={selectedEquipment}
            keyExtractor={(item) => item.id.toString()}
            onSubmit={handleSelectEquipment}
            onRefresh={onRefresh}
            refreshing={refreshing}
            onEndReached={onEndReached}
        />
    );
}
