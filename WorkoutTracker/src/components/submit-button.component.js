import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FAB, withTheme} from 'react-native-paper';

function SubmitButton({onPress}) {
    return <FAB style={styles.fab} label="Submit" onPress={onPress} />;
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        left: 75,
        right: 75,
        bottom: 20,
    },
});

export default withTheme(SubmitButton);
