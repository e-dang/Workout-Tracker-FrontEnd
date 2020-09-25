import React from 'react';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';

export function SplashScreen() {
    return (
        <View style={styles.indicator}>
            <ActivityIndicator animating={true} color={Colors.red800} size="large" />
        </View>
    );
}

const styles = StyleSheet.create({
    indicator: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
