import React from 'react';
import {withTheme} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {CustomTextInput} from '@components/custom-text-input.component';

function _LongTextComponent(props) {
    return <CustomTextInput style={styles.textInput} {...props} />;
}

const styles = StyleSheet.create({
    textInput: {
        height: 100,
        marginHorizontal: 50,
    },
});

export const LongTextInput = withTheme(_LongTextComponent);
