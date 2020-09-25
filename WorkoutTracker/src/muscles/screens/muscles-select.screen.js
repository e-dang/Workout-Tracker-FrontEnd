import React from 'react';
import MultiSelectScreen from '../../components/multi-select-screen.component';

export default function MusclesSelectScreen(props) {
    const {navigation, muscles, selectedMuscles, handleSelectMuscles, onRefresh, refreshing, onEndReached} = props;

    return (
        <MultiSelectScreen
            title="Select Muscles"
            onBackPress={() => navigation.pop()}
            data={muscles}
            preSelected={selectedMuscles}
            keyExtractor={(item) => item.name}
            onSubmit={handleSelectMuscles}
            onRefresh={onRefresh}
            refreshing={refreshing}
            onEndReached={onEndReached}
        />
    );
}
