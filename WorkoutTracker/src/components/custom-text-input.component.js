import React from 'react';
import {View} from 'react-native';
import {HelperText, TextInput, withTheme} from 'react-native-paper';

function _CustomTextInput(props) {
    const {style, errVisible, errMessage} = props;

    return (
        <View>
            <TextInput style={style} mode="outlined" {...props} />
            <HelperText type="error" visible={errVisible}>
                {errMessage}
            </HelperText>
        </View>
    );
}

export const CustomTextInput = withTheme(_CustomTextInput);
