import React from 'react';
import {StyleSheet} from 'react-native';
import {withTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

function _ContainerView({children, props}) {
    return (
        <SafeAreaView style={styles.container} {...props}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export const ContainerView = withTheme(_ContainerView);
