import React from 'react';
import {StyleSheet} from 'react-native';
import {withTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

function _ContainerView({children, style}) {
    return <SafeAreaView style={style || styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
    },
});

export const ContainerView = withTheme(_ContainerView);
