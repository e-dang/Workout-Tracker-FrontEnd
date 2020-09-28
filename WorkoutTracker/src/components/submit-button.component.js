import React from 'react';
import {StyleSheet} from 'react-native';
import {FAB, withTheme} from 'react-native-paper';

function _SubmitButton({onPress}) {
    return <FAB style={styles.fab} label="Submit" onPress={onPress} />;
}

const styles = StyleSheet.create({
    fab: {
        marginHorizontal: 75,
    },
});

export const SubmitButton = withTheme(_SubmitButton);
