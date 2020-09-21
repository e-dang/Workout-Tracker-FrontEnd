import React from 'react';
import MultiSelectScreen from '../../components/multi-select-screen.component';

export default function MusclesSelectScreen(props) {
    const {navigation, muscles, selectedMuscles, handleSelectMuscles} = props;

    return (
        <MultiSelectScreen
            title="Select Muscles"
            onBackPress={() => navigation.pop()}
            data={muscles}
            preSelected={selectedMuscles}
            keyExtractor={(item) => item.name}
            onSubmit={handleSelectMuscles}
        />
    );
}
