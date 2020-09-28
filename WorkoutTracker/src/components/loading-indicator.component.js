import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator, withTheme} from 'react-native-paper';

function _LoadingIndicator() {
    return (
        <View style={styles.container}>
            <ActivityIndicator animating={true} size="large" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
});
export const LoadingIndicator = withTheme(_LoadingIndicator);
