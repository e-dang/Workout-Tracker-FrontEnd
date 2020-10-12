import React from 'react';
import {StyleSheet} from 'react-native';
import {withTheme} from 'react-native-paper';
import {CustomTextInput} from '@components/custom-text-input.component';

function _ShortTextInput(props) {
    return <CustomTextInput style={styles.textInput} {...props} />;
}

const styles = StyleSheet.create({
    textInput: {
        marginHorizontal: 50,
    },
});

export const ShortTextInput = withTheme(_ShortTextInput);
