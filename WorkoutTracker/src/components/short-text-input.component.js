import React from 'react';
import {View} from 'react-native';
import {HelperText, TextInput, withTheme} from 'react-native-paper';

export function _ShortTextInput(props) {
    const {label, value, onChangeText, errVisible, errMessage} = props;

    return (
        <View>
            <TextInput mode="outlined" label={label} value={value} onChangeText={onChangeText} />
            <HelperText type="error" visible={errVisible}>
                {errMessage}
            </HelperText>
        </View>
    );
}

export const ShortTextInput = withTheme(_ShortTextInput);
