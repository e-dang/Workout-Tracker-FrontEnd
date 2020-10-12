import React from 'react';
import {StyleSheet} from 'react-native';
import {FAB, withTheme} from 'react-native-paper';

function _SubmitButton(props) {
    return <FAB style={styles.fab} label="Submit" {...props} />;
}

const styles = StyleSheet.create({
    fab: {
        marginHorizontal: 75,
    },
});

export const SubmitButton = withTheme(_SubmitButton);
